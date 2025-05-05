export async function getJobs() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/jobs`, {
        cache: "no-store"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.docs || [];
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw new Error("Failed to load jobs. Please try again later.");
    }
  }
  
  export default getJobs;