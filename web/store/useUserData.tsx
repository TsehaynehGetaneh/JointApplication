import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

interface UserData {
  data: {
    firstname: string;
    email: string;
    token: string;
  };
}

function isValidJSON(jsonString: any) {
  try {
    JSON.parse(jsonString);
  } catch (e) {
    return false;
  }
  return true;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const cookies = parseCookies();
    const parsedUserData = cookies.user && typeof cookies.user === 'string' && isValidJSON(cookies.user) ? JSON.parse(cookies.user) : null;
    setUserData(parsedUserData);
  }, []);

  return userData;
};
