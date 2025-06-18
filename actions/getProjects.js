export async function getProjects() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/projects`, {
        cache: "no-store"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Data projects : ", data)
      return data.docs || [];
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw new Error("Failed to load projects. Please try again later.");
    }
  }
  
  export default getProjects;