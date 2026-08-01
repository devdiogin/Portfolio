import { IconGitHub, IconLinkedIn, IconInstagram } from './Icons';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/devdiogin',
    Icon: IconGitHub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-cassimiro/',
    Icon: IconLinkedIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/diogelucasc/',
    Icon: IconInstagram,
  },
];

export function Header() {
  return (
    <header className="site-header">
      <h1 className="site-name">Diogenes Lucas Souza Cassimiro</h1>

      <div className="header-divider" />

      <p className="site-role">
        Java Backend Developer
        <span>|</span>
        Spring Boot
        <span>|</span>
        Microsserviços
      </p>

      <div className="icon-row">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="icon-link"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </header>
  );
}
