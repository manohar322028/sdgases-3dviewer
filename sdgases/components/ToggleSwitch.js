export default function ToggleSwitch({ label, checked, onChange }) {
  return (
    <div className="toggle-container flex items-center gap-2">
      <span className="toggle-label text-sm font-medium">{label}</span>
      <label className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          className="peer hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="absolute cursor-pointer inset-0 rounded-full bg-gray-300 transition-colors duration-200 peer-checked:bg-blue-500">
          <div
            className={`absolute w-4 h-4 bg-white rounded-full transition-all duration-200 ease-in-out left-1 top-1
              ${checked ? "translate-x-4" : "translate-x-0"}`}
          ></div>
        </div>
      </label>
    </div>
  );
}
