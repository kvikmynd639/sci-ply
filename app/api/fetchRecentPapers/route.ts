// app/api/fetchRecentPapers/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic') || 'machine learning';

  const response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${topic}&fields=title,authors,year&limit=5`);
  const data = await response.json();

  return NextResponse.json(data.data || []);
}
