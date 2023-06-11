import Link from "next/link";

interface LinkItem {
  text: string;
  href: string;
}

interface FooterLinkProps {
  links: LinkItem[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ links }) => {
  return (
    <ul className="text-lg">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLink;
