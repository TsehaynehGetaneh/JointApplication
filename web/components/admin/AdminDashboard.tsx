import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsForm from './news/NewsForm';
import CollgeList from './college-list/CollgeList';

interface ProfileProps {
  name: string;
  imageSrc: string;
}

interface NavItemProps {
  href: string;
  text: string;
}

const Header: React.FC<ProfileProps> = ({ name, imageSrc }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-8 px-6 bg-white border-b-2 border-gray-300">
      <div className="flex items-center">
        <Link href="/">
          <span className="flex items-center flex-shrink-0 cursor-pointer">
            <span className="font-semibold text-xl tracking-tight text-green-800">
              Joint
              <span className="text-blue-500">Application</span>
            </span>
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Image
          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:opacity-75"
          src={imageSrc}
          alt="Admin profile"
          width={200}
          height={200}
        />
        <div className="flex flex-col">
          <p className="text-gray-700 mr-2">{name}</p>
          <p>Admin</p>
        </div>
      </div>
    </header>
  );
};

interface ActiveNavItemProps extends NavItemProps {
  isActive: boolean;
  onClick: () => void;
}

const ActiveNavItem: React.FC<ActiveNavItemProps> = ({ href, text, isActive, onClick }) => {
  return (
    <li className="my-2 md:my-0" >
      <Link
        href="#"
        className={`block py-1 md:py-3 pl-1  align-middle text-gray-700 no-underline hover:text-blue-500 border-b-2 ${
          isActive ? 'border-blue-500' : 'border-transparent'
        } hover:border-blue-500`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

interface SidebarProps {
  activeNavItem: string;
  onNavItemClick: (text: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeNavItem, onNavItemClick }) => {
  return (
    <aside className="fixed top-0 left-0 mt-12 bg-white h-screen w-64 hidden sm:block border-r-2 border-gray-300">
      <ul className="list-reset flex flex-col mt-16">
        <ActiveNavItem
          href="/admin/dashboard"
          text="College List"
          isActive={activeNavItem === 'College List'}
          onClick={() => onNavItemClick('College List')}
        />
        <ActiveNavItem
          href="/admin/dashboard"
          text="College Add"
          isActive={activeNavItem === 'College Add'}
          onClick={() => onNavItemClick('College Add')}
        />
        <ActiveNavItem
          href="/admin/dashboard"
          text="News and Updates"
          isActive={activeNavItem === 'News and Updates'}
          onClick={() => onNavItemClick('News and Updates')}
        />
      </ul>
    </aside>
  );
};

const AdminDashboard: React.FC<ProfileProps> = ({ name, imageSrc }) => {
  const [activeNavItem, setActiveNavItem] = useState('College List');

  const handleNavItemClick = (text: string) => {
    setActiveNavItem(text);
  };

  let content;

  if (activeNavItem === 'College List') {
    content = (
      <div>
        <CollgeList />
      </div>
    );
  } else if (activeNavItem === 'College Add') {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-5">College Add</h1>
        <p>This is the college add page.</p>
      </div>
    );
  } else if (activeNavItem === 'News and Updates') {
    content= (
      <div className='items-center justify-center'>
        <NewsForm />
      </div>
    );
  }

  return (
    <div className="relative">
      <Header name={name} imageSrc={imageSrc} />
      <div className="flex mt-20">
        <Sidebar activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick} />
        <main className="flex-1 ml-96 mt-16 bg-gray-50">{content}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;