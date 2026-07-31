export function About() {
  return (
    <section className="about-section" aria-label="Sobre mim">
      <p className="section-label">ABOUT</p>
      <div className="about-body">
        <p>
          Desenvolvedor Backend focado em <span className="about-highlight">Java</span> e{' '}
          <span className="about-highlight">Spring Boot</span>, com experiência em
          arquitetura de microsserviços, mensageria assíncrona e APIs RESTful.
        </p>
        <p>
          Gosto de construir sistemas que escalam — desde a modelagem do domínio até
          o deploy em containers. Atualmente aprofundando conhecimentos em{' '}
          <span className="about-highlight">Cloud</span> e boas práticas de{' '}
          <span className="about-highlight">Clean Architecture</span>.
        </p>
      </div>
    </section>
  );
}
