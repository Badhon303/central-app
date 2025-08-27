export async function getWhatsNew() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/whats-new`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch What's New");
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching what's new:", error);
    return [];
  }
}
