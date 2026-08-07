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
  // {
  //   id: "carrara-odontologia",
  //   title: "Carrara Odontologia",
  //   description: "API RESTful em Spring Boot para gestão completa de clínica odontológica. Gerencia doutores, pacientes, sessões, pagamentos e prescrições com autenticação JWT, notificações por e-mail e monitoramento via Prometheus. Em produção — backend em VM na Oracle Cloud e frontend na Vercel.",
  //   stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker", "GitHub Actions", "Swagger/OpenApi", "Oracle Cloud", "Vercel"],
  //   repoUrl: null,
  //   deployUrl: "https://www.carraraodontologia.com.br/",
  //   featured: true,
  // },
  {
    id: "carrara-odontologia-api",
    title: "Carrara Odontologia API",
    description: "API RESTful em Spring Boot para gestão completa de clínica odontológica. Gerencia doutores, pacientes, sessões, pagamentos e prescrições com autenticação JWT, notificações por e-mail e monitoramento via Prometheus.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker", "GitHub Actions", "Swagger", "Oracle Cloud", "Vercel"],
    repoUrl: null,
    deployUrl: "https://www.carraraodontologia.com.br/",
    featured: true,
  },
  {
    id: "banking-platform-microsservices",
    title: "Banking Platform Microsservices",
    description: "Plataforma bancária composta por microsserviços Java Spring Boot, com autenticação Keycloak, banco de dados PostgreSQL, filas RabbitMQ e Kafka, balanceamento de carga com Eureka, gateway de API. O projeto inclui um aplicativo móvel React Native para clientes.",
    stack: ["Java", "Spring Boot", "Spring Security", "Keycloak", "PostgreSQL", "Docker", "GitHub Actions", "Kafka", "RabbitMQ", "Eureka", "Api Gateway", "React Native"],
    repoUrl: "https://github.com/devdiogin/banking-platform-microservices",
    deployUrl: null,
    featured: true,
  },
];
