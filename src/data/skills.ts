export interface SkillCategory {
  icon: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'Code',
    name: 'Linguagens & Frameworks',
    skills: ['Java 17', 'Spring Boot', 'C#', 'ASP.NET Core', 'WebFlux', 'Node.js', 'TypeScript', 'JavaScript'],
  },
  {
    icon: 'Globe',
    name: 'Front-end',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Bootstrap', 'Tailwind', 'Chakra UI', 'Material UI'],
  },
  {
    icon: 'Database',
    name: 'Bancos de Dados',
    skills: ['MySQL', 'SQL', 'MongoDB', 'DynamoDB', 'Hibernate'],
  },
  {
    icon: 'FlaskConical',
    name: 'Testes',
    skills: ['Jest', 'Vitest', 'Cypress', 'JUnit', 'Mockito'],
  },
  {
    icon: 'Cloud',
    name: 'Cloud & Monitoramento',
    skills: [
      'AWS',
      'SQS',
      'CloudWatch',
      'CodeBuild',
      'CodePipeline',
      'RDS',
      'ECS',
      'Step Function',
      'S3',
      'Azure DevOps',
      'Kibana',
      'DataDog',
    ],
  },
  {
    icon: 'Webhook',
    name: 'API',
    skills: ['REST', 'GraphQL', 'Gravitee', 'Postman'],
  },
  {
    icon: 'Box',
    name: 'Infraestrutura',
    skills: ['Docker', 'Terraform'],
  },
  {
    icon: 'GitBranch',
    name: 'Controle de Versão',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'GitFlow'],
  },
  {
    icon: 'Briefcase',
    name: 'Metodologias',
    skills: ['Scrum', 'Kanban', 'Jira', 'Confluence', 'Code Review'],
  },
];

export function getSkillCategories() {
  return skillCategories;
}
