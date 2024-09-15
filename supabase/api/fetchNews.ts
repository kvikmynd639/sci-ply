// supabase/api/fetchNews.ts
export const fetchScienceNews = async () => {
    try {
      const response = await fetch('https://api.gdeltproject.org/api/v2/doc/doc?query=science&mode=ArtList&format=json&maxrecords=10');
      const data = await response.json();
      return data.articles || []; // Adjust based on the GDELT API response structure
    } catch (error) {
      console.error("Error fetching GDELT news:", error);
      return [];
    }
  };
  