export type ContentKind = "blog" | "conhecimento" | "case";

export type ContentItem = {
  kind: ContentKind;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: string[];
  faqs: { question: string; answer: string }[];
};

export const contentItems: ContentItem[] = [
  {
    kind: "blog", slug: "pmo-que-influencia-decisoes", title: "O PMO que influencia decisões não começa pelo dashboard", excerpt: "Antes da ferramenta, um PMO relevante cria linguagem comum para priorizar, decidir e acompanhar valor.", category: "PMO Estratégico", readTime: "7 min", date: "12 jun 2026",
    body: ["Um PMO não se torna estratégico por estar próximo da diretoria. Ele se torna estratégico quando melhora a qualidade das decisões que chegam à diretoria.", "O ponto de partida é simples: identificar quais decisões precisam de mais clareza. Priorização, capacidade, risco e benefícios são algumas delas. A partir daí, o escritório organiza ritos, evidências e responsabilidades.", "O dashboard entra depois. Ele é consequência de uma governança que já sabe o que precisa enxergar — e para quê."],
    faqs: [{ question: "Quando um PMO precisa ser redesenhado?", answer: "Quando os reportes não mudam decisões, as prioridades se alteram sem critério ou a liderança não enxerga valor na atuação do escritório." }, { question: "Todo PMO precisa ser estratégico?", answer: "Não. O modelo deve responder à maturidade e aos desafios reais da organização. Estratégia é relevância para a decisão, não um rótulo." }]
  },
  {
    kind: "blog", slug: "okrs-sem-teatro-de-alinhamento", title: "OKRs sem teatro de alinhamento: como manter o foco no que muda", excerpt: "Objetivos só ganham força quando provocam escolhas. O resto é lista de desejos bem diagramada.", category: "OKRs", readTime: "6 min", date: "28 mai 2026",
    body: ["OKRs funcionam quando ajudam a organização a dizer não. Sem escolhas explícitas, objetivos viram uma nova camada de acompanhamento sobre a rotina existente.", "A boa prática é conectar resultados-chave a evidências observáveis e revisá-los em uma cadência que permita correção de rota.", "O objetivo não é preencher uma plataforma. É criar foco coletivo para uma mudança relevante."],
    faqs: [{ question: "Qual é a cadência recomendada?", answer: "Em geral, trimestral para revisão de objetivos e semanal ou quinzenal para acompanhamento de sinais e impedimentos." }, { question: "OKRs substituem indicadores operacionais?", answer: "Não. OKRs orientam mudanças prioritárias; indicadores operacionais mantêm a saúde da rotina visível." }]
  },
  {
    kind: "conhecimento", slug: "guia-maturidade-pmo", title: "Guia de maturidade de PMO: cinco perguntas para começar", excerpt: "Um roteiro objetivo para entender se o escritório de projetos apoia execução ou apenas reporta status.", category: "Guia técnico", readTime: "12 min", date: "04 jun 2026",
    body: ["Maturidade não é quantidade de processos. É a capacidade de tomar melhores decisões de forma consistente.", "Comece perguntando: quais decisões o PMO apoia, que dados tornam essas decisões mais claras e o que acontece depois de cada rito?", "O diagnóstico deve revelar lacunas de governança, informação, capacidade e comportamento — sem confundir atividade com impacto."],
    faqs: [{ question: "O diagnóstico exige ferramentas específicas?", answer: "Não. Entrevistas, análise de ritos e leitura de portfólio já revelam padrões importantes." }, { question: "Quanto tempo leva?", answer: "Uma leitura inicial pode ser feita em poucas semanas, dependendo do porte e da disponibilidade da organização." }]
  },
  {
    kind: "conhecimento", slug: "matriz-priorizacao-portfolio", title: "Matriz de priorização de portfólio", excerpt: "Um material prático para comparar iniciativas por valor, esforço, risco e alinhamento estratégico.", category: "Material prático", readTime: "9 min", date: "18 mai 2026",
    body: ["Priorizar é comparar. Quando os critérios não são explícitos, a agenda mais urgente costuma vencer a mais importante.", "Uma boa matriz combina valor esperado, esforço, risco e alinhamento estratégico. Mais importante que a fórmula é a conversa que ela organiza.", "Use a matriz como instrumento de decisão, não como substituto da responsabilidade executiva."],
    faqs: [{ question: "Quem deve participar da priorização?", answer: "Quem responde pela estratégia, pela capacidade de execução e pelos resultados do portfólio." }, { question: "A matriz resolve conflitos?", answer: "Ela torna os critérios visíveis. O conflito saudável continua sendo uma decisão de liderança." }]
  },
  {
    kind: "case", slug: "governanca-portfolio-industria", title: "Governança de portfólio para reduzir dispersão em uma indústria", excerpt: "Uma nova cadência de decisão trouxe foco às iniciativas e clareza para a liderança sobre capacidade e risco.", category: "Indústria", readTime: "Caso", date: "2026",
    body: ["O desafio não era falta de iniciativas. Era excesso de movimentos paralelos, com dependências pouco visíveis e critérios inconsistentes de priorização.", "A atuação começou pelo mapa de decisões e pela leitura do portfólio. Em seguida, foram definidos ritos executivos, critérios comuns e um fluxo de escalonamento.", "O resultado foi uma conversa de portfólio mais objetiva, com menos retrabalho e maior transparência sobre o que cabia na capacidade disponível."],
    faqs: [{ question: "Que tipo de organização se beneficia desse modelo?", answer: "Empresas com múltiplas iniciativas concorrendo por recursos e pouca visibilidade de dependências." }, { question: "O trabalho substitui a liderança interna?", answer: "Não. A consultoria estrutura o método para que a liderança tome decisões com mais clareza." }]
  }
];

export const glossary = [
  { term: "Governança", definition: "Conjunto de decisões, responsabilidades e ritos que orienta uma organização a agir com coerência." },
  { term: "OKR", definition: "Objetivo e resultados-chave. Um método para tornar uma mudança prioritária explícita e acompanhável." },
  { term: "PMO", definition: "Escritório de projetos. Pode apoiar padrões, execução, portfólio e decisões, conforme seu modelo de atuação." },
  { term: "Portfólio", definition: "Conjunto de iniciativas que disputa recursos e deve ser gerido como uma escolha estratégica." },
  { term: "VMO", definition: "Value Management Office. Estrutura que conecta investimentos, iniciativas e fornecedores ao valor entregue." },
];

export const categories = ["Todos", "PMO Estratégico", "OKRs", "Guia técnico", "Material prático", "Indústria"];
