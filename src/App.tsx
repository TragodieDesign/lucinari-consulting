import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeadChat from "@/components/LeadChat";
import { Footer, Header } from "@/components/SiteShell";
import { ArchivePage, ArticlePage, GlossaryPage } from "./pages/ContentPages";
import DetailPage from "./pages/DetailPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><BrowserRouter><div className="flex min-h-screen flex-col"><Header /><div className="flex-1"><Routes><Route path="/" element={<Index />} /><Route path="/solucoes/:slug" element={<DetailPage />} /><Route path="/treinamentos/:slug" element={<DetailPage />} /><Route path="/blog" element={<ArchivePage kind="blog" />} /><Route path="/conhecimentos" element={<ArchivePage kind="conhecimento" />} /><Route path="/cases" element={<ArchivePage kind="case" />} /><Route path="/glossario" element={<GlossaryPage />} /><Route path="/:kind/:slug" element={<ArticlePage />} /><Route path="*" element={<NotFound />} /></Routes></div><Footer /><LeadChat /></div></BrowserRouter></TooltipProvider></QueryClientProvider>;

export default App;
