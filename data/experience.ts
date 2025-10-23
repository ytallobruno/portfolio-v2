export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  tech: string[];
}

export const experienceData: Experience[] = [
  {
    company: "BTG Pactual",
    position: "Engenheiro de Software I",
    startDate: "02/2025",
    endDate: "atual",
    description: [
      "Atuação como Desenvolvedor Backend Pleno em equipe offshore, dando suporte a contas dos EUA e contribuindo para soluções financeiras de alta disponibilidade.",
      "Desenvolvimento e otimização de funções serverless em AWS Lambda usando JavaScript e TypeScript, com modelagem de dados NoSQL em DynamoDB.",
      "Desenvolvimento e integração de projetos na nuvem Azure, expandindo a experiência multi-cloud.",
      "Manutenção e melhoria de pipelines CI/CD com Jenkins, automatizando processos de build e deploy.",
      "Participação ativa em reuniões técnicas com equipe e clientes dos EUA em ambiente internacional.",
    ],
    tech: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "GraphQL",
      "AWS Lambda",
      "DynamoDB",
      "AWS CloudWatch",
      "Azure",
      "Jenkins",
      "Datadog",
      "Backend Development",
      "CI/CD",
      "Git",
      "Scrum",
    ],
  },
  {
    company: "Calindra Tech",
    position: "Software Developer II",
    startDate: "09/2024",
    endDate: "02/2025",
    description: [
      "Desenvolvimento de soluções inovadoras para a plataforma Stakkd.tech, com foco em backend robusto e escalável.",
      "Implementação de endpoints críticos com Node.js e TypeScript para gerenciamento autônomo de produtos por representantes.",
      "Gestão de serviços AWS, incluindo RDS (MySQL), S3 e configuração de grupos de segurança.",
      "Condução de reuniões em inglês com equipe e clientes para alinhamento de expectativas.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "TSOA",
      "AWS S3",
      "AWS RDS",
      "AWS CloudWatch",
      "MySQL",
      "Jest",
      "Cypress",
      "React",
      "Next.js",
      "Tailwind",
      "Git",
      "GitHub",
      "Scrum",
      "Kanban",
    ],
  },
  {
    company: "PUC Minas - Pontifícia Universidade Católica de Minas Gerais",
    position: "Tecnólogo Análise e Desenvolvimento de Sistemas",
    startDate: "02/2024",
    endDate: "atual",
    description: [
      "Destaque no primeiro semestre de 2024 na turma 4 com o projeto 'Fila Fácil', para melhorar a experiência do cliente em shoppings, focado em estabelecimentos gastronômicos.",
      "Utilização de diversas tecnologias, com seus semestres sendo divididos em 'stacks'.",
      "Desenvolvimento de habilidades de comunicação, trabalho em equipe, liderança e resolução de problemas.",
    ],
    tech: [
      "ASP.NET Core",
      "C#",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "Kanban",
      "React Native",
    ],
  },
  {
    company: "Calindra Tech",
    position: "Software Developer I",
    startDate: "01/2023",
    endDate: "09/2024",
    description: [
      "Desenvolvimento de soluções back-end em projetos críticos como Pix e Open Finance na Ame Digital, utilizando Java 17 e Spring Boot.",
      "Aplicação de princípios de programação reativa com WebFlux e desenvolvimento de testes unitários com JUnit e Mockito.",
      "Integração e manutenção de serviços em nuvem com AWS (SQS, CloudWatch, CodeBuild, CodePipeline) e monitoramento de performance com DataDog e Kibana.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "WebFlux",
      "JUnit",
      "Mockito",
      "AWS",
      "DataDog",
      "Git",
      "Scrum",
      "Kanban",
    ],
  },
  {
    company: "Calindra Tech",
    position: "Software Developer Trainee",
    startDate: "05/2022",
    endDate: "01/2023",
    description: [
      "Participação em uma formação intensiva de desenvolvimento de software, combinando teoria e prática para aprimorar habilidades técnicas e resolver desafios reais.",
      "Estudo intensivo de oito semanas focado em lógica de programação, estrutura de dados e orientação a objetos, seguido de um estágio rotativo de seis semanas.",
      "Desenvolvimento e apresentação de um protótipo de produto em duas semanas utilizando React.js e Spring Framework, além de execução de testes estruturais e funcionais.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React.js",
      "SQL",
      "Scrum",
      "Git",
    ],
  },
  {
    company: "Resilia Educação",
    position: "Estudante WebDev Full Stack",
    startDate: "12/2021",
    endDate: "06/2022",
    description: [
      "Formação intensiva de mais de 440 horas focadas em Desenvolvimento Web Full Stack e Soft Skills, além de contato com profissionais da área através da mentoria mensal.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Git",
      "Node",
      "React",
      "Scrum",
      "Kanban",
    ],
  },
];

export function getExperienceData() {
  return experienceData;
}

