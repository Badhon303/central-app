export async function getInsights() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/insights`, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.docs || [];
    } catch (error) {
        console.error("Error fetching insights:", error);
        throw new Error("Failed to load insights. Please try again later.");
    }
}

export default getInsights;