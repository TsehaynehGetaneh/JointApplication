import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import FooterLink from './FooterLink';
import Link from 'next/link';

interface LinkItem {
  text: string;
  href: string;
}

const aboutLinks: LinkItem[] = [
  { text: 'About', href: '/about' },
  { text: 'Guiding principles', href: '/guiding-principles' },
  { text: 'Leadership', href: '/leadership' },
  { text: 'Partners', href: '/partners' },
];

const contactLinks: LinkItem[] = [
  { text: 'Contact', href: '/contact' },
  { text: 'Become a member', href: '/become-member' },
];

const newsLinks: LinkItem[] = [
  { text: 'News and updates', href: '/news-updates' },
  { text: 'Help', href: '/help' },
  { text: 'Events', href: '/events' },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-700 text-white py-8 w-full mt-12">
        <footer className="flex flex-col md:flex-row gap-12 justify-between items-center mx-12">
          {/* About links */}
          <div className="w-full md:w-auto">
              <h2 className="text-lg">The JointApplication</h2>
              <FooterLink links={aboutLinks} />
          </div>
          
          {/* Contact links */}
          <div className="w-full md:w-auto mt-4 md:ml-4 md:mt-0">
              <FooterLink links={contactLinks} />
          </div>
          
          {/* News and updates links */}
          <div className="w-full md:w-auto mt-4 md:ml-4 md:mt-0">
              <FooterLink links={newsLinks} />
          </div>
          
          {/* Social Media links */}
          <div className="w-full md:w-auto flex flex-col justify-center mt-4 md:ml-4 md:mt-0 gap-3">
              <h2>Connect with <span className="text-blue-500 text-lg">#JointApplication</span></h2>
              <div className="flex fex-row gap-2">
                  <Link href="https://www.facebook.com" className="mr-2">
                  <FaFacebook size={24} />
                  </Link>
                  <Link href="https://www.linkedin.com" className="mr-2">
                  <FaLinkedin size={24} />
                  </Link>
                  <Link href="https://www.twitter.com" className="mr-2">
                  <FaTwitter size={24} />
                  </Link>
                  <Link href="https://www.youtube.com" className="mr-2">
                  <FaYoutube size={24} />
                  </Link>
                  <Link href="https://www.instagram.com">
                  <FaInstagram size={24} />
                  </Link>
              </div>
          </div>
        </footer>
    </div>
  );
};

export default Footer;
