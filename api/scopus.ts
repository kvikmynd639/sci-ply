// api/scopus.ts
export const fetchTrendingArticles = async (topic: string) => {
    const response = await fetch(`https://api.elsevier.com/content/search/scopus?query=${topic}`, {
      headers: {
        "X-ELS-APIKey": process.env.SCOPUS_API_KEY || ""
      }
    });
    const data = await response.json();
    return data["search-results"]?.entry || [];
  };
  