import { useState } from "react";

export const useUser = () => {
  const [username, setUsername] = useState<string>("");

  return { username, setUsername };
}