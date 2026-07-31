import { IconGitHub, IconLinkedIn, IconInstagram } from './Icons';
import { useTypewriter } from '../hooks/useTypewriter';

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

const ROLE_LINE = 'Java Backend Developer | Spring Boot | Microsserviços';

export function Header() {
  // Digita apenas a linha de cargo — começa após 400ms
  const { displayed: roleText, done: roleDone } = useTypewriter(ROLE_LINE, 22, 400);

  // Ícones surgem quando o role terminar
  const iconsVisible = roleDone;

  return (
    <header className="site-header">
      {/* Nome estático — sem efeito de digitação */}
      <h1 className="site-name">Diogenes Lucas Souza Cassimiro</h1>

      <div className="header-divider" />

      {/* Linha de cargo com typewriter */}
      <p className="site-role" style={{ minHeight: '1.7em' }}>
        {roleText}
        {!roleDone && <span className="typewriter-cursor" />}
      </p>

      {/* Ícones — fade-in após o cargo terminar */}
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
