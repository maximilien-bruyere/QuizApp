(async () => {
  const { app, BrowserWindow, ipcMain } = await import("electron");
  const path = await import("path");
  const { fileURLToPath } = await import("url");
  const { spawn } = await import("child_process");
  const fs = (await import("fs")).default;
  const net = (await import("net")).default;

  ipcMain.on("stop-app", () => {
    if (backendProcess && !backendProcess.killed) backendProcess.kill();
    app.relaunch();
    app.exit();
  });

  let backendProcess;

  function getBasePath() {
    return app.isPackaged ? process.resourcesPath : __dirname;
  }

  function startBackend() {
    const nodeCmd =
      process.platform === "win32"
        ? path.join(getBasePath(), "quizapp-node", "node.exe")
        : "node";

    const backendScript = path.join(
      getBasePath(),
      "quizapp-backend",
      "dist",
      "main.js"
    );

    backendProcess = spawn(nodeCmd, [backendScript], {
      detached: true,
      stdio: ["ignore", "ignore", "pipe"],
    });

    backendProcess.stderr.on("data", (data) => {
      fs.appendFileSync("backend-error.log", data.toString());
    });
  }

  function checkBackendProcess() {
    const backendMainPath = path.join(
      getBasePath(),
      "quizapp-backend",
      "dist",
      "main.js"
    );

    const dirToCheck = path.dirname(backendMainPath);
    console.log("Répertoire backend utilisé :", dirToCheck);
    try {
      const files = fs.readdirSync(dirToCheck);
      console.log("Fichiers présents :", files);
    } catch (err) {
      console.warn("Impossible de lire le répertoire :", err);
    }

    if (!fs.existsSync(backendMainPath)) {
      console.warn(
        "Le fichier backend n'existe pas. Le service ne peut pas démarrer."
      );
      return false;
    }

    const port = 3000;
    return new Promise((resolve) => {
      const client = net.createConnection({ port }, () => {
        client.end();
        console.warn(`Le backend écoute déjà sur le port ${port}.`);
        resolve(false);
      });
      client.on("error", () => {
        resolve(true);
      });
    });
  }

  function createWindow() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const indexPath = path.join(
      __dirname,
      "quizapp-frontend",
      "dist",
      "index.html"
    );
    const splashPath = path.join(
      __dirname,
      "quizapp-frontend",
      "dist",
      "splash.html"
    );
    const splash = new BrowserWindow({
      width: 400,
      height: 300,
      frame: false,
      alwaysOnTop: true,
      transparent: false,
      resizable: false,
      show: true,
    });
    splash.loadFile(splashPath);
    const win = new BrowserWindow({
      width: 1600,
      height: 900,
      minWidth: 1600,
      minHeight: 900,
      show: false,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        nodeIntegration: false,
        contextIsolation: true,
      },
    });

    win.loadFile(indexPath);

    win.once("ready-to-show", () => {
      splash.destroy();
      win.show();
    });

    win.webContents.on("will-navigate", (event, url) => {
      if (!url.startsWith("file://")) {
        event.preventDefault();
        win.loadFile(indexPath);
      }
    });
    win.webContents.on("will-redirect", (event, url) => {
      if (!url.startsWith("file://")) {
        event.preventDefault();
        win.loadFile(indexPath);
      }
    });
  }

  app.whenReady().then(async () => {
    createWindow();
    if (await checkBackendProcess()) {
      startBackend();
    }
    // Si le backend fonctionne déjà, rien ne se passe
  });

  app.on("window-all-closed", () => {
    if (backendProcess && !backendProcess.killed) backendProcess.kill();
    if (process.platform !== "darwin") app.quit();
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
})();
export {};
