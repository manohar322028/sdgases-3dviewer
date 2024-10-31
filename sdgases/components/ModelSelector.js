export default function ModelSelector({ currentModel, onModelSelect }) {
  return (
    <div className="button-container space-x-4">
      <button
        className={`px-4 py-2 rounded ${
          currentModel === "cylinder"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onModelSelect("cylinder")}
      >
        Cylinder
      </button>
      <button
        className={`px-4 py-2 rounded ${
          currentModel === "regulator"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onModelSelect("regulator")}
      >
        Regulator
      </button>
      <button
        className={`px-4 py-2 rounded ${
          currentModel === "mask"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onModelSelect("mask")}
      >
        Mask
      </button>
    </div>
  );
}
