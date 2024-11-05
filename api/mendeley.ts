// api/mendeley.ts
export const fetchMendeleyCollections = async () => {
    const response = await fetch("https://api.mendeley.com/documents", {
      headers: {
        Authorization: `Bearer ${process.env.MENDELEY_API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  };
  