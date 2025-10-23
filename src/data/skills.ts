export interface SkillCategory {
  icon: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "Code",
    name: "Tecnologias de programação",
    skills: [
      "Java 17",
      "Spring Boot",
      "Quarkus",
      "Programação Reativa",
      "Webflux",
      "Programação Orientada a Objetos",
      "Testes unitários",
      "JUnit",
      "Mockito",
    ],
  },
  {
    icon: "Globe",
    name: "Desenvolvimento web",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "Bootstrap",
      "Tailwind",
      "Material Ui",
      "Chakra Ui",
    ],
  },
  {
    icon: "Cloud",
    name: "Nuvem & Monitoramento",
    skills: [
      "Azure DevOps",
      "AWS",
      "SQS",
      "CloudWatch",
      "CodeBuild",
      "CodePipeline",
      "Secrets Manager",
      "IAM",
      "RDS",
      "ECS",
      "ECR",
      "Step Function",
      "ApSync",
      "Kibana",
      "DataDog",
    ],
  },
  {
    icon: "Database",
    name: "Bancos de dados",
    skills: ["MySQL", "SQL", "MongoDB", "Hibernate", "DynamoDB"],
  },
  {
    icon: "GitBranch",
    name: "Controle de versão",
    skills: ["Git", "Github", "Gitlab", "Bitbucket", "GitFlow"],
  },
  {
    icon: "Webhook",
    name: "Gerenciamento de API",
    skills: ["REST", "GraphQL", "Gravitee"],
  },
  {
    icon: "Box",
    name: "Infraestrutura como código",
    skills: ["Docker", "Terraform"],
  },
  {
    icon: "Briefcase",
    name: "Trabalho & Gestão de projeto",
    skills: ["Scrum", "Kanban", "Jira", "Confluence", "Code Review"],
  },
];

export function getSkillCategories() {
  return skillCategories;
}

