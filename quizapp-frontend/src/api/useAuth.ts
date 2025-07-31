import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  sub: number;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Erreur lors du décodage du token", err);
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    setLoading(false);
  }, []);

  return { isAuthenticated, user, loading };
}
