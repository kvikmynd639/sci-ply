// api/gdelt.ts
// api/fetchGdeltScienceNews.ts
import axios from "axios";

export async function fetchScienceNews() {
  try {
    const response = await axios.get("https://api.gdeltproject.org/api/v2/doc/doc", {
      params: {
        query: "Science OR Technology",
        mode: "ArtList",
        format: "json",
      },
    });

    // Format the data to match the structure we want
    return response.data.articles.map((article: any) => ({
      title: article.title,
      url: article.url,
      source: article.domain,
    }));
  } catch (error) {
    console.error("Error fetching GDELT Science News:", error);
    return [];
  }
}
