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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/GasosaJusta',
    projectLink: 'https://gasosajusta.netlify.app/',
  },
  {
    title: 'Hire Me',
    description:
      "Projeto feito para o desafio da Bemobi, onde consiste em reproduzir um encurtador de URL's (apenas sua API), simples e com poucas funções",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/hire.me',
    projectLink: 'https://github.com/ytallobruno/hire.me',
  },
  {
    title: 'Fila Fácil',
    description:
      'Projeto destaque do eixo 1 do curso de ADS da PUC Minas para melhorar a experiência do cliente em shoppings, focado em estabelecimentos gastronômicos.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/ads-2024-e1-proj-fila-facil',
    projectLink:
      'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t4-pmv-ads-2024-1-e1-proj-fila-facil/src/index.html',
  },
  {
    title: 'Serviço Fácil',
    description:
      'Projeto do eixo 2 do curso de ADS da PUC Minas para melhorar a experiência de contratação de serviços, conectando clientes a prestadores como faxineiros e eletricistas',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/ads-2024-e2-proj-servico-facil',
    projectLink: 'https://servicofacil.azurewebsites.net/',
  },
  {
    title: 'Mensagens Escondidas',
    description:
      'Projeto onde precisei desenvolver uma aplicação capaz de codificar e decodificar mensagens utilizando Cifra de César e Base64',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/ProjetoMensagemEscondida',
    projectLink: 'https://ytallobruno.github.io/ProjetoMensagemEscondida/',
  },
  {
    title: 'Battlefront',
    description:
      'Projeto feito na Resilia, onde o foco era inventar o produto que quiséssemos, pensando em algo que seria legal para ajudar no dia a dia com programação ou estudos',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    link: 'https://github.com/ytallobruno/ProjetoFinalModulo2',
    projectLink: 'https://ytallobruno.github.io/ProjetoFinalModulo2/',
  },
];

export function getProjects() {
  return projects;
}
