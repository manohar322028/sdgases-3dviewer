"use client";
import { useState } from "react";
import ModelViewer from "../components/ModelViewer";
import ToggleSwitch from "../components/ToggleSwitch";
import ModelSelector from "../components/ModelSelector";

export default function Home() {
  const [currentModel, setCurrentModel] = useState("cylinder");
  const [showBackground, setShowBackground] = useState(false);

  const modelConfigs = {
    cylinder: { src: "newcylinder.glb", src1: "newcylinder1.glb" },
    regulator: { src: "newregulator.glb" },
    mask: { src: "cehck.glb" },
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 bg-gray-100">
        <div className="viewer-container w-full h-[80vh] md:h-[90vh] max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          <ModelViewer
            modelConfig={modelConfigs[currentModel]}
            showBackground={showBackground}
            currentModel={currentModel}
          />
        </div>

        <div className="controls-container mt-4 space-y-2 md:space-y-4 flex flex-col items-center justify-center">
          <ToggleSwitch
            label="Background Environment"
            checked={showBackground}
            onChange={() => setShowBackground(!showBackground)}
            className="mb-2"
          />
          <ModelSelector
            currentModel={currentModel}
            onModelSelect={setCurrentModel}
          />
        </div>
      </main>

      <style jsx>{`
        .controls-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .viewer-container {
          flex: 1;
        }

        @media (max-width: 768px) {
          .controls-container {
            flex-direction: row;
            gap: 1rem;
          }

          .controls-container button,
          .controls-container label {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
