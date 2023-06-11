import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './DropDown';
import SearchBar from './SearchBar';
import { FiMenu, FiX } from 'react-icons/fi';

interface LinkItem {
  text: string;
  href: string;
}

const planLinks: LinkItem[] = [
  { text: "Why college matters", href: "plan/why-college-matters" },
  { text: "Paying for college", href: "plan/paying-for-college" },
  { text: "Your path to college", href: "plan/your-path-to-college" },
];

const applyCollegeLinks: LinkItem[] = [
  { text: "Undergraduate application guide", href: "apply/undergraduate-students" },
  { text: "Application letter prompts", href: "apply/essay-prompts" },
];

const supportLinks: LinkItem[] = [
  { text: "Recommender guide", href: "support/recommender-guide" },
  { text: "News and Updates", href: "support/blog" },
];

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-200 text-black p-8 flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Home section */}
      <div className="mr-8">
        <Link href="/">
          <span className="flex items-center flex-shrink-0 text-black cursor-pointer">
            <span className="font-semibold text-xl tracking-tight hover:text-green-800">
              Joint
              <span className="text-blue-500">Application</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {showMobileMenu ? (
          <FiX size={24} className="cursor-pointer" onClick={handleToggleMenu} />
        ) : (
          <FiMenu size={24} className="cursor-pointer" onClick={handleToggleMenu} />
        )}
      </div>

      {/* Nav links and Account section */}
      <div
        className={`md:flex md:flex-row md:gap-x-7 items-center ${showMobileMenu ? 'flex flex-col mt-4' : ''}`}
        style={{ flexBasis: showMobileMenu ? '100%' : 'auto' }}
      >
        {/* Find A College section */}
        <div className="text-lg hover:text-blue-800" onClick={closeMobileMenu}>
          <Link href="/explore">Find A College</Link>
        </div>

        {/* Plan For College section */}
        <div className="" onClick={closeMobileMenu}>
          <Dropdown links={planLinks} buttonText="Plan for college" href="/plan" />
        </div>

        {/* Apply To College section */}
        <div className="" onClick={closeMobileMenu}>
          <Dropdown links={applyCollegeLinks} buttonText="Apply to college" href="/apply" />
        </div>

        {/* Support section */}
        <div className="" onClick={closeMobileMenu}>
          <Dropdown links={supportLinks} buttonText="Support" href="/support" />
        </div>

        {/* Search bar */}
        <div onClick={closeMobileMenu}>
          <SearchBar />
        </div>

        {/* Account section */}
        <div className="flex gap-2 text-lg">
          {/* Sign In button */}
          <Link href="/sign-in" className="bg-black text-white py-1 px-4 rounded-full" onClick={closeMobileMenu}>
            Sign In
          </Link>

          {/* Create Account button */}
          <Link href="/create-account" className="border-2 border-black rounded-full py-1 px-4" onClick={closeMobileMenu}>
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
