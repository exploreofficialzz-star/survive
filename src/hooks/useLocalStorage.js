import { useState, useEffect } from 'react';
export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s) setValue(JSON.parse(s)); } catch {}
  }, [key]);
  const set = (v) => { setValue(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} };
  return [value, set];
};
