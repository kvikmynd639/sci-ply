'use client'; // Mark this as a client hook
import { useState, useEffect } from 'react';
import { supabase } from '@/supabase/supabaseClient';

export function useAuth() {
  const [user, setUser] = useState<any>(null); // Set to `any` to handle Supabase user types

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    getSession(); // Call the async function to set the session

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return user;
}
