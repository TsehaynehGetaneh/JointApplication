import { useEffect, useState } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { BsPersonFill } from "react-icons/bs";
import router from 'next/router';

interface UserData {
  data: {
    firstname: string;
    email: string;
  };
}

const ProfileInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    function isValidJSON(jsonString: any) {
      try {
        JSON.parse(jsonString);
      } catch (e) {
        return false;
      }
      return true;
    }

    const cookies = parseCookies();
    const parsedUserData = cookies.user && typeof cookies.user === 'string' && isValidJSON(cookies.user) ? JSON.parse(cookies.user) : null;
    setUserData(parsedUserData);
  }, []);

  const handleSignOut = () => {
    destroyCookie(null, 'user');
    router.push('/');
  };

  if (!userData) {
    return null;
  }

  const data = userData.data;
  const { firstname, email } = data;

  return (
    <div>
      <BsPersonFill className="md:hidden block text-lg" />
      <div className="text-sm hidden md:flex rounded p-2 space-x-2 items-center border-4 border-blue-500">
        <BsPersonFill className="h-5 w-5 text-gray-600 text-lg" />
        <div>
          <div className="font-bold">Welcome, {firstname}!</div>
          <div>{email}</div>
        </div>
        <button
          className="text-white bg-black rounded-full px-3 py-1 border-2 border-gray-600 transform ease-in-out hover:shadow-lg hover:scale-110"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
