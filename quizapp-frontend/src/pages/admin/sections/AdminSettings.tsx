import { useEffect, useState } from "react";
import { frontendInfo } from "../../components/informations/frontendInfo";
import { api } from "../../../api/api";

const AdminSettings = () => {
  const [backendInfo, setBackendInfo] = useState<{
    name: string;
    version: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    api.get("/info").then((res) => setBackendInfo(res.data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        Informations principales
      </h1>
      <div className="space-y-8">
        {/* Frontend */}
        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-2">Frontend</h2>
          <div className="text-white text-sm">Nom : {frontendInfo.name}</div>
          <div className="text-white text-sm">
            Version : {frontendInfo.version}
          </div>
          <div className="text-white text-sm">
            Description : {frontendInfo.description}
          </div>
        </section>
        {/* Backend */}
        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-2">Backend</h2>
          {backendInfo ? (
            <>
              <div className="text-white text-sm">Nom : {backendInfo.name}</div>
              <div className="text-white text-sm">
                Version : {backendInfo.version}
              </div>
              <div className="text-white text-sm">
                Description : {backendInfo.description}
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-sm">Chargement...</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminSettings;
