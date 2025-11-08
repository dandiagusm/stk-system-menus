"use client";
import MenuNode from "./MenuNode";

export default function MenuTree({ data, onSelect }: any) {
  return (
    <div className="border p-4 rounded bg-white">
      {data.map((menu: any) => (
        <MenuNode key={menu.id} node={menu} onSelect={onSelect} />
      ))}
    </div>
  );
}
