"use client";

export default function MenuDetailForm({ selected }: any) {
  if (!selected)
    return (
      <div className="text-gray-400 text-center pt-20">
        Select a menu item to view details.
      </div>
    );

  return (
    <div className="p-6 bg-white border rounded shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Menu Details</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-500">Menu ID</label>
        <input
          value={selected.id}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-500">Depth</label>
        <input
          value={selected.depth ?? "—"}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-500">
          Parent Data
        </label>
        <input
          value={selected.parent ?? "Root"}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-500">Name</label>
        <input
          value={selected.name}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save
      </button>
    </div>
  );
}
