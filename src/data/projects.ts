export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  projectLink: string;
}

export const projects: Project[] = [
  {
    title: 'Gasosa Justa',
    description:
      'Projeto feito com a intenção de calcular o gasto por pessoa da gasolina para uma viagem, role e afins, contando também com valores de pedágio.',
    image: '/images/placeholderIcon.jpg',
    link: 'https://github.com/ytallobruno/GasosaJusta',
    projectLink: 'https://gasosajusta.netlify.app/',
  },
  {
    title: 'Maia Team',
    description:
      'Landing page para personal trainer que apresenta métodos, práticas e planos de consultoria, além de apresentar também uma seção com resultados de seus alunos.',
    image: '/images/placeholderIcon.jpg',
    link: 'https://lmaiateam.netlify.app/',
    projectLink: 'https://lmaiateam.netlify.app/',
  },
  {
    title: 'Fila Fácil',
    description:
      'Projeto destaque do eixo 1 do curso de ADS da PUC Minas para melhorar a experiência do cliente em shoppings, focado em estabelecimentos gastronômicos.',
    image: '/images/placeholderIcon.jpg',
    link: 'https://github.com/ytallobruno/puc-filafacil',
    projectLink:
      'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t4-pmv-ads-2024-1-e1-proj-fila-facil/src/index.html',
  },
  {
    title: 'Serviço Fácil',
    description:
      'Projeto do eixo 2 do curso de ADS da PUC Minas para melhorar a experiência de contratação de serviços, conectando clientes a prestadores como faxineiros e eletricistas',
    image: '/images/placeholderIcon.jpg',
    link: 'https://github.com/ytallobruno/puc-servicofacil',
    projectLink: 'https://servicofacil.azurewebsites.net/',
  },
  {
    title: 'Mensagens Escondidas',
    description:
      'Projeto onde precisei desenvolver uma aplicação capaz de codificar e decodificar mensagens utilizando Cifra de César e Base64',
    image: '/images/placeholderIcon.jpg',
    link: 'https://github.com/ytallobruno/ProjetoMensagemEscondida',
    projectLink: 'https://ytallobruno.github.io/ProjetoMensagemEscondida/',
  },
  {
    title: 'Battlefront',
    description:
      'Projeto feito na Resilia, onde o foco era inventar o produto que quiséssemos, pensando em algo que seria legal para ajudar no dia a dia com programação ou estudos',
    image: '/images/placeholderIcon.jpg',
    link: 'https://github.com/ytallobruno/ProjetoFinalModulo2',
    projectLink: 'https://ytallobruno.github.io/ProjetoFinalModulo2/',
  },
];

export function getProjects() {
  return projects;
}
