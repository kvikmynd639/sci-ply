// app/api/fetchScienceNews/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.gdeltproject.org/api/v2/doc/doc', {
      params: {
        query: 'Science OR Technology',
        mode: 'ArtList',
        format: 'json',
      },
    });

    const articles = response.data.articles.map((article: any) => ({
      title: article.title,
      url: article.url,
      source: article.domain,
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching GDELT Science News:', error);
    return NextResponse.json([]);
  }
}
