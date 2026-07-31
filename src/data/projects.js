/**
 * ──────────────────────────────────────────────────────────────────────
 * SEUS PROJETOS — edite este arquivo para atualizar o portfólio.
 * ──────────────────────────────────────────────────────────────────────
 *
 * Campos disponíveis:
 *   id          — identificador único (qualquer string, sem espaços)
 *   title       — nome do projeto
 *   description — descrição curta (2-3 frases)
 *   stack       — array de tecnologias  ["Java", "Spring Boot", ...]
 *   repoUrl     — URL do repositório GitHub (ou null)
 *   deployUrl   — URL do deploy/demo (ou null)
 *   featured    — true → aparece no topo com destaque
 */

export const projects = [
  {
    id: "banking-platform",
    title: "Banking Platform Microservices",
    description:
      "Plataforma bancária distribuída construída com arquitetura de microsserviços. Inclui serviços de autenticação, contas, transações e notificações com comunicação assíncrona via Kafka.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "JWT"],
    repoUrl: "https://github.com/diogenescassimiro/banking-platform-microservices",
    deployUrl: null,
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Este mesmo site. Design minimalista inspirado em landing pages da Apple, construído com React + Vite e Tailwind CSS.",
    stack: ["React", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/diogenescassimiro/portfolio",
    deployUrl: null,
    featured: false,
  },
  // Adicione mais projetos aqui seguindo o mesmo padrão ↑
];
