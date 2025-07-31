/// <reference types="vite/client" />

interface Window {
  electron?: {
    ipcRenderer: {
      send: (channel: string, data?: any) => void;
    };
  };
}