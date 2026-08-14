import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Send, X } from "lucide-react";

type LeadData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  sourcePage: string;
};

const WHATSAPP_NUMBER = "5511994706023";
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string | undefined;

const LeadChat = ({ contextualInterest }: { contextualInterest?: string }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [lead, setLead] = useState<LeadData>({ name: "", email: "", phone: "", company: "", interest: contextualInterest ?? "", sourcePage: window.location.href });
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (contextualInterest) setLead((current) => ({ ...current, interest: contextualInterest }));
  }, [contextualInterest]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-lucinari-chat", openChat);
    return () => window.removeEventListener("open-lucinari-chat", openChat);
  }, []);

  const questions = [
    { key: "name", text: "Olá. Para começar, como podemos chamar você?", placeholder: "Seu nome" },
    { key: "email", text: "Prazer, {name}. Qual é o seu melhor e-mail?", placeholder: "nome@empresa.com" },
    { key: "phone", text: "E qual número de WhatsApp usamos para continuar a conversa?", placeholder: "(00) 00000-0000" },
    { key: "company", text: "Em qual empresa você atua?", placeholder: "Nome da empresa" },
    { key: "interest", text: contextualInterest ? `Você chegou pela página “${contextualInterest}”. Confirma que este é o tema que quer conversar?` : "Qual tema mais precisa de clareza neste momento?", placeholder: contextualInterest ?? "Ex.: VMO, PMO, governança ou treinamento" },
  ] as const;

  const submit = async (finalLead: LeadData) => {
    const payload = { data: finalLead };

    if (STRAPI_URL) {
      try {
        await fetch(`${STRAPI_URL.replace(/\/$/, "")}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // O contato segue para o WhatsApp mesmo se o CMS estiver indisponível.
      }
    }
    setComplete(true);
    const text = `Olá, sou ${finalLead.name} da ${finalLead.company}. Tenho interesse em ${finalLead.interest}. Meu e-mail é ${finalLead.email} e telefone ${finalLead.phone}.`;
    window.setTimeout(() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer"), 700);
  };

  const advance = () => {
    if (!answer.trim()) return;
    const key = questions[step].key;
    const nextLead = { ...lead, [key]: answer.trim() } as LeadData;
    setLead(nextLead);
    setAnswer("");
    if (step === questions.length - 1) {
      void submit(nextLead);
      return;
    }
    setStep(step + 1);
  };

  const question = questions[step];
  const message = question.text.replace("{name}", lead.name || "");

  return (
    <div className="fixed bottom-5 left-5 z-50 font-plex">
      {open && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[1.7rem] border border-[#c7a45b]/30 bg-[#0e302e] shadow-2xl shadow-[#0e302e]/40">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full border border-[#c7a45b] text-[#e2c88c]"><MessageCircle size={17} /></div><div><p className="font-outfit text-[10px] uppercase tracking-[.18em] text-[#e2c88c]">Lucinari Consulting</p><p className="text-xs text-white/70">Especialista online</p></div></div>
            <button aria-label="Fechar conversa" onClick={() => setOpen(false)} className="text-white/70 hover:text-white"><X size={19} /></button>
          </div>
          <div className="min-h-56 p-5">
            {complete ? <div className="rounded-2xl bg-[#1e514a] p-4 text-sm leading-relaxed text-white">Obrigada. Vamos abrir o WhatsApp para continuarmos essa conversa com clareza.</div> : <><div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1e514a] p-4 text-sm leading-relaxed text-white">{message}</div><div className="mt-4"><input autoFocus value={answer} onChange={(event) => setAnswer(event.target.value)} onKeyDown={(event) => event.key === "Enter" && advance()} placeholder={question.placeholder} className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#c7a45b]" /><button onClick={advance} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c7a45b] px-4 py-3 font-outfit text-xs font-semibold uppercase tracking-wider text-[#0e302e] transition hover:bg-[#e2c88c]">Continuar <Send size={14} /></button></div><p className="mt-3 text-center text-[10px] text-white/40">Etapa {step + 1} de {questions.length}</p></>}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="group flex items-center gap-3 rounded-full bg-[#c7a45b] py-3 pl-4 pr-5 font-outfit text-xs font-semibold uppercase tracking-[.12em] text-[#0e302e] shadow-xl transition hover:bg-[#e2c88c]">
        {open ? <X size={18} /> : <MessageCircle size={18} />} <span className="hidden sm:block">Fale com um especialista</span><ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default LeadChat;
