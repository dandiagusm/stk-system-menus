export default function Sidebar() {
  const items = [
    "Systems",
    "System Code",
    "Properties",
    "Menus",
    "API List",
    "Users & Group",
    "Competition",
  ];

  return (
    <aside className="w-64 bg-blue-900 text-white h-screen p-4 space-y-3">
      <h1 className="text-xl font-semibold mb-4">Solusi Teknologi Kreatif</h1>
      {items.map((item) => (
        <button
          key={item}
          className="w-full text-left px-3 py-2 rounded hover:bg-blue-800"
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
