export async function getEvents() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/events`, {
        cache: "no-store"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.docs || [];
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error("Failed to load events. Please try again later.");
    }
  }
  
  export default getEvents;