import { ArrowUpRight, BookOpen, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categories, contentItems, glossary, type ContentKind } from "@/lib/content";

const config: Record<ContentKind, { title: string; intro: string; label: string }> = {
  blog: { title: "Ideias para decidir com mais clareza.", intro: "Análises diretas sobre governança, portfólio, PMO, VMO e execução estratégica.", label: "Blog" },
  conhecimento: { title: "Conhecimento aplicado à sua decisão.", intro: "Guias e materiais para transformar temas complexos em próximos passos concretos.", label: "Centro de Conhecimento" },
  case: { title: "Transformações que tornam o valor visível.", intro: "Contextos reais, caminhos construídos e aprendizados que ficam na organização.", label: "Cases" },
};

export const ArchivePage = ({ kind }: { kind: ContentKind }) => {
  const [category, setCategory] = useState("Todos");
  const data = config[kind];
  const items = contentItems.filter((item) => item.kind === kind && (category === "Todos" || item.category === category));
  return <main className="bg-[#f3eee1] px-6 py-16 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#a07c3a]">{data.label}</p><h1 className="mt-4 max-w-3xl font-fraunces text-5xl leading-[.98] lg:text-7xl">{data.title}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#0e302e]/70">{data.intro}</p><div className="mt-10 flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 font-outfit text-[10px] font-bold uppercase tracking-wider ${category === item ? "bg-[#0e302e] text-white" : "border border-[#0e302e]/15 bg-white text-[#0e302e]"}`}>{item}</button>)}</div><div className="mt-12 grid gap-5 lg:grid-cols-3">{items.map((item) => <article key={item.slug} className="flex min-h-80 flex-col rounded-[1.6rem] border border-[#0e302e]/10 bg-[#fffdf8] p-6"><div className="flex justify-between font-outfit text-[10px] font-bold uppercase tracking-widest text-[#a07c3a]"><span>{item.category}</span><span>{item.readTime}</span></div><h2 className="mt-6 font-fraunces text-3xl leading-tight">{item.title}</h2><p className="mt-4 text-sm leading-relaxed text-[#0e302e]/70">{item.excerpt}</p><Link className="mt-auto flex items-center gap-2 pt-7 font-outfit text-xs font-bold uppercase tracking-wider" to={`/${kind === "case" ? "cases" : kind}/${item.slug}`}>Ler conteúdo <ArrowUpRight size={15}/></Link></article>)}</div></div></main>;
};

export const ArticlePage = () => {
  const { kind, slug } = useParams();
  const item = contentItems.find((entry) => entry.kind === kind && entry.slug === slug);
  if (!item) return <main className="grid min-h-[60vh] place-items-center bg-[#f3eee1]"><Link to="/blog">Voltar para conteúdos</Link></main>;
  return <main className="bg-[#fffdf8] px-6 py-16 lg:px-10 lg:py-24"><article className="mx-auto max-w-3xl"><div className="flex justify-between font-outfit text-[10px] font-bold uppercase tracking-[.16em] text-[#a07c3a]"><span>{item.category}</span><span>{item.date} · {item.readTime}</span></div><h1 className="mt-5 font-fraunces text-5xl leading-[.98] lg:text-7xl">{item.title}</h1><p className="mt-7 border-l-2 border-[#c7a45b] pl-5 text-xl leading-relaxed text-[#0e302e]/75">{item.excerpt}</p><div className="mt-12 space-y-6 text-lg leading-relaxed text-[#0e302e]/80">{item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="my-14 rounded-[1.6rem] bg-[#0e302e] p-8 text-white"><p className="font-outfit text-[10px] font-bold uppercase tracking-[.18em] text-[#e2c88c]">Próximo passo</p><h2 className="mt-3 font-fraunces text-3xl">Quer trazer este tema para a realidade da sua organização?</h2><button onClick={() => window.dispatchEvent(new Event("open-lucinari-chat"))} className="mt-6 rounded-full bg-[#c7a45b] px-5 py-3 font-outfit text-xs font-bold uppercase tracking-wider text-[#0e302e]">Falar com especialista</button></div><h2 className="font-fraunces text-3xl">Perguntas frequentes</h2><div className="mt-5 divide-y divide-[#0e302e]/10">{item.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-fraunces text-xl">{faq.question}<ChevronRight className="transition group-open:rotate-90" size={20}/></summary><p className="mt-3 max-w-2xl leading-relaxed text-[#0e302e]/70">{faq.answer}</p></details>)}</div></article></main>;
};

export const GlossaryPage = () => {
  const [query, setQuery] = useState("");
  const terms = useMemo(() => glossary.filter((item) => item.term.toLowerCase().includes(query.toLowerCase()) || item.definition.toLowerCase().includes(query.toLowerCase())), [query]);
  return <main className="bg-[#f3eee1] px-6 py-16 lg:px-10 lg:py-24"><div className="mx-auto max-w-5xl"><p className="font-outfit text-[11px] font-bold uppercase tracking-[.22em] text-[#a07c3a]">Taxonomia de conceitos</p><h1 className="mt-4 font-fraunces text-5xl lg:text-7xl">Glossário Lucinari</h1><p className="mt-5 max-w-xl text-lg text-[#0e302e]/70">Definições objetivas para apoiar conversas mais claras sobre estratégia, governança e entrega.</p><label className="relative mt-10 block max-w-lg"><Search className="absolute left-4 top-4 text-[#a07c3a]" size={18}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar um conceito" className="w-full rounded-2xl border border-[#0e302e]/15 bg-white py-4 pl-11 pr-4 outline-none focus:border-[#c7a45b]"/></label><div className="mt-10 grid gap-4 md:grid-cols-2">{terms.map((item) => <article key={item.term} className="rounded-2xl bg-white p-6"><h2 className="font-fraunces text-2xl">{item.term}</h2><p className="mt-3 leading-relaxed text-[#0e302e]/70">{item.definition}</p></article>)}</div></div></main>;
};
