import { IconGitHub, IconLinkedIn, IconInstagram } from './Icons';
import { useTypewriter } from '../hooks/useTypewriter';

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

const ROLE_LINE = 'Desenvolvedor Backend Java | Spring Boot | Microsserviços';

export function Header() {
  const { displayed: roleText, done: roleDone } = useTypewriter(ROLE_LINE, 22, 400);
  const iconsVisible = roleDone;

  return (
    <header className="site-header">
      <h1 className="site-name">Diogenes Lucas Souza Cassimiro</h1>

      <div className="header-divider" />

      <p className="site-role" style={{ minHeight: '1.7em' }}>
        {roleText}
        {!roleDone && <span className="typewriter-cursor" />}
      </p>

      <div
        className="icon-row"
        style={{
          opacity: iconsVisible ? 1 : 0,
          transform: iconsVisible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 400ms ease, transform 400ms ease',
        }}
      >
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
