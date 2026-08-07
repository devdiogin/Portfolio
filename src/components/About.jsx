export function About() {
  return (
    <section className="about-section" aria-label="Sobre mim">
      <p className="section-label">ABOUT</p>
      <div className="about-body">
        <p>
          Desenvolvedor <span className="about-highlight">Backend Java</span> com experiência
          no desenvolvimento de sistemas corporativos integrados ao{' '}
          <span className="about-highlight">ERP Sankhya</span> e na construção de aplicações
          próprias publicadas em produção. Atua no desenvolvimento de{' '}
          <span className="about-highlight">APIs</span>, integrações entre sistemas, automação
          de processos e estruturação de fluxos de{' '}
          <span className="about-highlight">entrega contínua</span>, com foco em qualidade,
          segurança, manutenibilidade e escalabilidade.
        </p>
        <p>
          Possui conhecimento em <span className="about-highlight">arquitetura de software</span>,
          princípios <span className="about-highlight">SOLID</span> e boas práticas de engenharia,
          aliando visão de negócio à capacidade de transformar necessidades reais em soluções
          confiáveis.
        </p>
      </div>
    </section>
  );
}
