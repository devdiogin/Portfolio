import { IconGitHub, IconLinkedIn, IconInstagram } from './Icons';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/diogenescassimiro',
    Icon: IconGitHub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/diogenescassimiro',
    Icon: IconLinkedIn,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/diogenescassimiro',
    Icon: IconInstagram,
  },
];

export function IconRow() {
  return (
    <div className="flex items-center gap-5 mt-6">
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="icon-link"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
