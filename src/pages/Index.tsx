import { ArrowUpRight, BookOpen, ChevronRight, Compass, Layers3, Menu, Target, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LeadChat from "@/components/LeadChat";

const solutions = [
  { title: "Governança & PMO", text: "Dê clareza à decisão, ritmo à execução e visibilidade ao portfólio.", image: "/assets/governanca-pmo.png", label: "Estrutura que sustenta", path: "/solucoes/governanca-pmo" },
  { title: "VMO & Valor", text: "Transforme investimentos, fornecedores e iniciativas em valor mensurável.", image: "/assets/vmo-valor.png", label: "Valor que aparece", path: "/solucoes/vmo-valor" },
  { title: "Educação Executiva", text: "Desenvolva líderes e times para uma nova cadência de entrega.", image: "/assets/educacao-executiva.png", label: "Método que permanece", path: "/solucoes/educacao-executiva" },
];

const challenges = ["Estratégia distante da execução", "PMO sem influência nas decisões", "Portfólio sem priorização clara", "Fornecedores sem gestão de valor"];
const trainings = [
  { title: "Governança Estratégica: da Gestão de Projetos aos OKRs", path: "/treinamentos/governanca-estrategica-okrs" },
  { title: "Transformação Organizacional: de PMO ao VMO", path: "/treinamentos/transformacao-pmo-vmo" },
  { title: "Excelência Operacional com Metodologias Ágeis", path: "/treinamentos/metodologias-ageis" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatInterest, setChatInterest] = useState<string | undefined>();
  const openChat = (interest?: string) => { setChatInterest(interest); window.dispatchEvent(new Event("open-lucinari-chat")); };

  return <main className="bg-[#f3eee1] text-[#0e302e]">
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#inicio" className="font-fraunces text-xl tracking-tight text-white">lucinari<span className="text-[#e2c88c]">.</span><span className="ml-2 font-outfit text-[9px] uppercase tracking-[.24em] text-white/60">consulting</span></a>
        <div className="hidden items-center gap-7 font-outfit text-[11px] font-medium uppercase tracking-[.12em] text-white/75 lg:flex"><a href="#solucoes" className="hover:text-[#e2c88c]">Soluções</a><a href="#desafios" className="hover:text-[#e2c88c]">Desafios</a><a href="#conhecimento" className="hover:text-[#e2c88c]">Conhecimento</a><button onClick={() => openChat()} className="rounded-full border border-[#c7a45b]/70 px-4 py-2 text-[#e2c88c] transition hover:bg-[#c7a45b] hover:text-[#0e302e]">Falar com especialista</button></div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white lg:hidden" aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      {menuOpen && <div className="mx-5 rounded-2xl bg-[#123c38] p-5 text-center font-outfit text-xs uppercase tracking-wider text-white lg:hidden"><a className="block py-3" href="#solucoes">Soluções</a><a className="block py-3" href="#desafios">Desafios</a><a className="block py-3" href="#conhecimento">Conhecimento</a></div>}
    </header>

    <section id="inicio" className="relative min-h-[730px] overflow-hidden bg-[#0e302e]">
      <img src="/assets/lucinari-hero.png" className="absolute inset-0 h-full w-full object-cover opacity-55" alt="Anel de luz em profundidade" />
      <div className="absolute inset-0 bg-[#0e302e]/55" />
      <div className="relative mx-auto flex min-h-[730px] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10 lg:pb-24"><div className="max-w-3xl animate-enter">
        <p className="font-outfit text-[11px] font-semibold uppercase tracking-[.24em] text-[#e2c88c]">Lucinari Consulting · VMO · PMO · OKRs</p>
        <h1 className="mt-5 font-fraunces text-5xl leading-[.96] tracking-tight text-white sm:text-6xl lg:text-8xl">Da profundidade<br />à <em className="font-normal text-[#e2c88c]">clareza.</em></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">Tornamos visível o que estava submerso na complexidade para que estratégia, decisão e entrega avancem na mesma direção.</p>
        <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => openChat()} className="rounded-full bg-[#c7a45b] px-6 py-3.5 font-outfit text-xs font-bold uppercase tracking-wider text-[#0e302e] transition hover:bg-[#e2c88c]">Falar com especialista</button><a href="#solucoes" className="rounded-full border border-white/35 px-6 py-3.5 font-outfit text-xs font-bold uppercase tracking-wider text-white transition hover:border-white">Conheça as soluções</a></div>
      </div></div>
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-white/60 lg:flex"><span className="h-px w-12 bg-[#c7a45b]"/><span className="font-outfit text-[10px] uppercase tracking-[.16em]">Role para revelar</span></div>
    </section>

    <section className="border-b border-[#0e302e]/10 bg-[#f3eee1] px-6 py-16 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_2fr]"><p className="font-outfit text-xs font-bold uppercase tracking-[.16em] text-[#a07c3a]">O nosso papel</p><p className="font-fraunces text-3xl leading-tight text-[#0e302e] lg:text-4xl">Não navegamos por você. <em className="font-normal">Iluminamos a rota</em> para que a decisão certa se torne evidente.</p></div></section>

    <section id="solucoes" className="bg-[#0e302e] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#e2c88c]">Por solução</p><h2 className="mt-3 font-fraunces text-4xl text-white lg:text-5xl">Estrutura para<br /><em className="font-normal">entregar valor.</em></h2></div><p className="max-w-sm text-sm leading-relaxed text-white/60">Conectamos governança, execução e desenvolvimento de capacidades em uma atuação feita para o seu contexto.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{solutions.map((solution, index) => <article key={solution.title} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#123c38]"><div className="relative h-52 overflow-hidden"><img src={solution.image} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" alt=""/><div className="absolute inset-0 bg-[#0e302e]/20"/></div><div className="p-6"><p className="font-outfit text-[10px] font-bold uppercase tracking-[.16em] text-[#e2c88c]">0{index + 1} · {solution.label}</p><h3 className="mt-3 font-fraunces text-2xl text-white">{solution.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{solution.text}</p><Link to={solution.path} className="mt-6 flex items-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider text-[#e2c88c]">Explorar solução <ArrowUpRight size={15}/></Link></div></article>)}</div></div></section>

    <section id="desafios" className="px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#a07c3a]">Por desafio</p><h2 className="mt-3 font-fraunces text-4xl leading-tight lg:text-5xl">Quando a estratégia<br />não encontra a entrega.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-[#0e302e]/70">Toda transformação começa ao tornar o problema visível. Identificamos o ponto em que a operação perde ritmo e construímos o caminho de volta à clareza.</p><button onClick={() => openChat("Diagnóstico estratégico")} className="mt-8 rounded-full bg-[#0e302e] px-6 py-3.5 font-outfit text-xs font-bold uppercase tracking-wider text-white">Conversar sobre um desafio</button></div><div className="grid content-center gap-3">{challenges.map((challenge, index) => <button key={challenge} onClick={() => openChat(challenge)} className="group flex items-center justify-between rounded-2xl border border-[#0e302e]/15 bg-white p-5 text-left transition hover:border-[#c7a45b] hover:shadow-lg"><span className="flex items-center gap-4"><span className="font-outfit text-xs text-[#a07c3a]">0{index + 1}</span><span className="font-fraunces text-xl">{challenge}</span></span><ChevronRight className="text-[#a07c3a]"/></button>)}</div></div></section>

    <section className="bg-[#1e514a] px-6 py-20 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-8 md:grid-cols-4">{[[Compass,"Clareza","Torne visível o que está oculto."],[Layers3,"Método","Estrutura que sustenta decisões."],[Target,"Cadência","Ritmo que gera previsibilidade."],[ArrowUpRight,"Resultado","Entrega que comprova a estratégia."]].map(([Icon,title,text]) => { const I = Icon as typeof Compass; return <div key={String(title)} className="border-t border-[#c7a45b]/50 pt-5"><I className="text-[#e2c88c]" size={21}/><h3 className="mt-6 font-fraunces text-2xl">{String(title)}</h3><p className="mt-2 text-sm text-white/65">{String(text)}</p></div>})}</div></div></section>

    <section id="conhecimento" className="px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#a07c3a]">Centro de conhecimento</p><h2 className="mt-3 font-fraunces text-4xl lg:text-5xl">Conteúdo que organiza<br /><em className="font-normal">a complexidade.</em></h2></div><button onClick={() => openChat("Educação executiva")} className="flex items-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider text-[#0e302e]">Ver todos os conteúdos <ArrowUpRight size={16}/></button></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{trainings.map((training) => <article key={training.title} className="rounded-[1.5rem] border border-[#0e302e]/12 bg-[#fffdf8] p-6"><BookOpen size={21} className="text-[#a07c3a]"/><p className="mt-7 font-outfit text-[10px] font-bold uppercase tracking-[.16em] text-[#a07c3a]">Treinamento · 06 etapas</p><h3 className="mt-3 font-fraunces text-2xl leading-tight">{training.title}</h3><Link to={training.path} className="mt-8 inline-block font-outfit text-xs font-bold uppercase tracking-wider text-[#0e302e] underline decoration-[#c7a45b] decoration-2 underline-offset-4">Ver programa</Link></article>)}</div></div></section>

    <section className="bg-[#0e302e] px-6 py-20 text-center lg:px-10"><div className="mx-auto max-w-2xl"><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#e2c88c]">Próximo passo</p><h2 className="mt-4 font-fraunces text-4xl text-white lg:text-5xl">Vamos trazer o fundo<br />à superfície?</h2><p className="mt-5 text-white/65">Uma conversa inicial para entender seu contexto e revelar as prioridades da sua organização.</p><button onClick={() => openChat()} className="mt-8 rounded-full bg-[#c7a45b] px-6 py-3.5 font-outfit text-xs font-bold uppercase tracking-wider text-[#0e302e]">Falar com especialista</button></div></section>

    <footer className="bg-[#123c38] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><p className="font-fraunces text-2xl">lucinari<span className="text-[#e2c88c]">.</span></p><p className="mt-2 font-outfit text-[10px] uppercase tracking-[.2em] text-white/55">Consulting</p></div><div className="grid grid-cols-2 gap-10 text-sm text-white/70"><div><p className="mb-3 font-outfit text-[10px] font-bold uppercase tracking-widest text-[#e2c88c]">Navegue</p><a className="block py-1" href="#solucoes">Soluções</a><a className="block py-1" href="#desafios">Desafios</a></div><div><p className="mb-3 font-outfit text-[10px] font-bold uppercase tracking-widest text-[#e2c88c]">Contato</p><a className="block py-1" href="https://wa.me/5511994706023">+55 11 99470-6023</a><a className="block py-1" href="mailto:lucinariconsulting@gmail.com">E-mail</a></div></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 font-outfit text-[10px] uppercase tracking-wider text-white/40">© 2026 Lucinari Consulting. Da profundidade à clareza.</div></footer>
    <LeadChat contextualInterest={chatInterest} />
  </main>;
};

export default Index;
