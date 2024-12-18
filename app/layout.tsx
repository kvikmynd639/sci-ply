"use client"; // This is a client component
import { SessionProvider } from '@/context/SessionProvider'; // Import the custom SessionProvider for Supabase
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider> 
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
