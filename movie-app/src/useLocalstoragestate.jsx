import { useEffect, useState } from "react";

export function useLocalstoragestate(initial, key) {
  const [moviewatched, setmoviewatched] = useState(() => {
    const storedval = localStorage.getItem(key);
    return storedval ? JSON.parse(storedval) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(moviewatched));
  }, [key, moviewatched]);
  return [moviewatched, setmoviewatched];
}
