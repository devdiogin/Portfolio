export function About() {
  return (
    <section className="about-section" aria-label="Sobre mim">
      <p className="section-label">ABOUT</p>
      <div className="about-body">
        <p>
          Desenvolvedor <span className="about-highlight">Backend Java</span> em formação,
          com experiência prática em sistemas corporativos integrados ao{' '}
          <span className="about-highlight">ERP Sankhya</span> e projetos próprios
          publicados em produção — incluindo{' '}
          <span className="about-highlight">API REST</span>, autenticação,{' '}
          <span className="about-highlight">CI/CD</span> e monitoramento.
        </p>
        <p>
          Foco em construir aplicações backend escaláveis aplicando{' '}
          <span className="about-highlight">Clean Architecture</span>,{' '}
          <span className="about-highlight">SOLID</span> e boas práticas de engenharia.
          Em busca de uma primeira oportunidade <span className="about-highlight">Jr.</span>{' '}
          para aplicar essa base técnica em um time maduro e continuar evoluindo.
        </p>
      </div>
    </section>
  );
}
