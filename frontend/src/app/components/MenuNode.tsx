"use client";
import { useState } from "react";

export default function MenuNode({
  node,
  depth = 0,
  onSelect,
}: {
  node: any;
  depth?: number;
  onSelect: (menu: any) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: depth * 16 }}>
      <div
        className="flex items-center gap-2 cursor-pointer py-1"
        onClick={() => onSelect(node)}
      >
        {hasChildren && (
          <button
            className="text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? "▼" : "▶"}
          </button>
        )}
        <span>{node.name}</span>
      </div>

      {expanded &&
        hasChildren &&
        node.children.map((child: any) => (
          <MenuNode
            key={child.id}
            node={child}
            depth={depth + 1}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
}
