"use client";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";

export default function ModelViewer({
  modelConfig,
  showBackground,
  currentModel,
}) {
  const [source, setSource] = useState({});
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      modelViewer.addEventListener("load", () => {
        modelViewer.updateFraming();
        modelViewer.scale = "1 1 1 ";
        modelViewer.updateFraming();
        modelViewer.scale = getScale(currentModel);
      });
    }
  }, [currentModel]);

  const getScale = (model) => {
    switch (model) {
      case "mask":
        return "0.75 0.75 0.75";
      case "regulator":
        return "0.5 0.5 0.5";
      default:
        return "1 1 1";
    }
  };

  useEffect(() => {
    // Update source based on currentModel and showBackground
    if (currentModel === "cylinder" && !showBackground) {
      setSource(modelConfig.src1);
    } else {
      setSource(modelConfig.src);
    }

    // var modelViewer;
    // // Set the scaling for each model
    // if (currentModel === "mask") {
    //   // Get the model-viewer element
    //   modelViewer = document.getElementById(`${currentModel}-viewer`);
    //   modelViewer.addEventListener("load", () => {
    //     modelViewer.scale = "0.75 0.75 0.75";
    //   });
    // } else if (currentModel === "regulator") {
    //   // Get the model-viewer element
    //   modelViewer = document.getElementById(`${currentModel}-viewer`);
    //   modelViewer.addEventListener("load", () => {
    //     modelViewer.scale = "0.5 0.5 0.5";
    //   });
    // } else {
    //   // Get the model-viewer element
    //   modelViewer = document.getElementById(`${currentModel}-viewer`);
    //   modelViewer.scale = "1 1 1";
    // }
  }, [currentModel, showBackground]);

  // Define lighting based on model and background
  const getLightingConfig = () => {
    if (currentModel === "cylinder") {
      return showBackground
        ? {
            toneMapping: "agx",
            exposure: "2",
            shadowIntensity: "0",
            shadowSoftness: "0",
          }
        : {
            toneMapping: "agx",
            exposure: "1",
            shadowIntensity: "1.13",
            shadowSoftness: "0.5",
          };
    } else {
      return {
        toneMapping: "agx",
        exposure: "2",
        shadowIntensity: showBackground ? "0" : "1.13",
        shadowSoftness: showBackground ? "0" : "0.5",
      };
    }
  };

  const lighting = getLightingConfig();

  // Background configuration
  const backgroundConfig = showBackground
    ? {
        "environment-image": "pizzo_pernice_8k.hdr",
        "skybox-image": "pizzo_pernice_8k.hdr",
        "skybox-image-opacity": "0.5",
      }
    : {};

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
      />

      <model-viewer
        ref={modelViewerRef}
        id={`${currentModel}-viewer`}
        src={source}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.gif"
        tone-mapping={lighting.toneMapping}
        exposure={lighting.exposure}
        shadow-intensity={lighting.shadowIntensity}
        shadow-softness={lighting.shadowSoftness}
        {...backgroundConfig}
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <div id="ar-prompt">
          <img src="ar_hand_prompt.png" alt="AR prompt" />
        </div>
      </model-viewer>
    </>
  );
}
