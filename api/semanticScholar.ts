// api/semanticScholar.ts
export const fetchRecentPapers = async (topic: string) => {
    const response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${topic}&fields=title,authors,year&limit=5`);
    const data = await response.json();
    return data.data || [];
  };
  