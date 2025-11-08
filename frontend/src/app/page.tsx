"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuTree from "./components/MenuTree";
import MenuDetailForm from "./components/MenuDetailForm";
import { mockMenus } from "../lib/mockMenus";

export default function Page() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-6 flex gap-6">
        {/* Left panel (tree view) */}
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold">Menus</h2>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded">Expand All</button>
              <button className="px-3 py-1 border rounded">Collapse All</button>
            </div>
          </div>

          <MenuTree data={mockMenus} onSelect={setSelected} />
        </div>

        {/* Right panel (details) */}
        <div className="w-1/2">
          <MenuDetailForm selected={selected} />
        </div>
      </div>
    </div>
  );
}
