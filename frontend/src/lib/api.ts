const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function fetchMenus() {
  try {
    const res = await fetch(`${API_URL}/api/menus`);
    if (!res.ok) {
      // Response from backend but not 200 OK
      throw new Error(`API responded with status ${res.status}`);
    }
    return await res.json();
  } catch (err: any) {
    console.error("❌ Fetch menus failed:", err.message);
    throw new Error("Unable to connect to the backend API.");
  }
}


export async function createMenu(data: any) {
  const res = await fetch(`${API_URL}/api/menus`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create menu");
  return res.json();
}

export async function deleteMenu(id: string) {
  const res = await fetch(`${API_URL}/api/menus/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete menu");
  return res.json();
}
