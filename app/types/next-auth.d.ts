// types/next-auth.d.ts
import NextAuth from "next-auth";

// Override the default Session and User types
declare module "next-auth" {
  interface User {
    id: string; // Add 'id' property to User
  }

  interface Session {
    user: User; // Override the session's user type
  }
}
