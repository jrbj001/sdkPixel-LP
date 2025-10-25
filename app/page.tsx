"use client";

import { ArrowRight, Brain, Layers, MessageSquare, Network, Sparkles, Workflow, LineChart, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const Section = ({ id, title, kicker, children }:{
  id?: string; title: string; kicker?: string; children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id || '');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 section-fade-in ${isVisible ? 'visible' : ''}`}>
      {kicker && <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">{kicker}</p>}
      <h2 className="text-3xl md:text-5xl font-semibold mb-8">{title}</h2>
      <div className="text-slate-300 text-lg leading-relaxed">{children}</div>
    </section>
  );
};

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Parallax Background Elements */}
      <div className="parallax-bg">
        <div className="floating-element" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-pulse-cyan to-pulse-purple" />
            <span className="font-semibold tracking-wide">PixelPulse<span className="text-slate-400">Lab.dev</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        
        {/* Parallax Hero Elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pulse-cyan/20 to-pulse-purple/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pulse-purple/20 to-pulse-cyan/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
          <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-4">Web Summit Lisbon • 2025</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">
            The <span className="grad">Adaptive Layer</span> of Generative AI
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl">
            Adaptive cognition, delivered as code. A cognitive layer that learns your domain’s logic and evolves continuously — without manual retraining.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-medium">
              Get Early Access <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#blueprint" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/15 hover:bg-white/5 transition">
              Technical Blueprint
            </a>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="h-6 w-6"/>, title: "Hybrid RAG", desc: "Semantic retrieval + business rules for grounded answers." },
              { icon: <Workflow className="h-6 w-6"/>, title: "LoRA + DPO", desc: "Lightweight adaptation using synthetic preference feedback." },
              { icon: <Brain className="h-6 w-6"/>, title: "Continuous Loop", desc: "Self-improving cognition with traceable reasoning." }
            ].map((c, i) => (
              <div key={i} className="card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 text-pulse-cyan mb-3">
                  <div className="p-2 bg-pulse-cyan/10 rounded-lg">{c.icon}</div>
                  <span className="font-semibold text-lg">{c.title}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About the SDK" kicker="What it is">
        <p>
          The PixelPulse Adaptive Layer SDK is a <b>generative cognitive layer</b> designed to transform enterprise data into <b>explainable, contextual reasoning</b>.
          Unlike static models or agent chains, it <b>learns each domain’s logic</b> and <b>adjusts continuously via synthetic feedback</b>, with no manual retraining.
        </p>
      </Section>

      {/* ARCHITECTURE */}
      <Section id="architecture" title="Architecture — Three Layers" kicker="How it works">
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: <Network className="h-6 w-6"/>, title: "Dataset Layer", desc: "Data ingestion, normalization and semantic embeddings with vector indexing. Your data becomes meaning." },
            { icon: <Brain className="h-6 w-6"/>, title: "Adaptive Layer", desc: "Hybrid RAG + LoRA + DPO for lightweight, incremental learning and explainable reasoning." },
            { icon: <MessageSquare className="h-6 w-6"/>, title: "Application Layer", desc: "Conversational APIs and Insight Engine deliver decisions in natural language and dashboards." }
          ].map((layer, i) => (
            <div key={i} className="card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 text-pulse-cyan mb-4">
                <div className="p-3 bg-pulse-cyan/10 rounded-xl group-hover:bg-pulse-cyan/20 transition-colors">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-semibold">{layer.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* Feedback loop line */}
        <div className="mt-12 card p-8 hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 text-pulse-purple mb-4">
            <div className="p-3 bg-pulse-purple/10 rounded-xl">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold">Intelligent Feedback Loop</h4>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Every interaction is evaluated programmatically (precision, utility, grounding).
            The model adjusts via LoRA/DPO and vectors are refreshed, enabling continuous improvement without heavy retraining.
          </p>
        </div>
      </Section>

      {/* HOW (TECH DNA) */}
      <Section id="blueprint" title="Technical Blueprint" kicker="Serverless by design">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            { category: "Core", tech: "Python + FastAPI (async)" },
            { category: "Deploy", tech: "Vercel Edge (frontend/APIs leves) + GCP Cloud Run (GPU on-demand)" },
            { category: "Vector DB", tech: "Pinecone (HNSW, 768-d)" },
            { category: "Data & Auth", tech: "Supabase (Postgres + JWT)" },
            { category: "RAG", tech: "LangChain + LlamaIndex" },
            { category: "Models", tech: "Llama 3.1 8B / Mistral 7B; Embeddings mpnet-base-v2" },
            { category: "Tuning", tech: "LoRA (PEFT) + DPO (TRL)" },
            { category: "Observability", tech: "MLflow + Weights & Biases + Evidently" }
          ].map((item, i) => (
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="px-3 py-1 bg-pulse-cyan/10 rounded-lg text-pulse-cyan text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <p className="mt-3 text-slate-300">{item.tech}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* USE CASES */}
      <Section id="use-cases" title="Multi-Vertical, One Adaptive Core" kicker="Use cases">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: <Shield className="h-6 w-6"/>, title:"Fintech & Payments", desc:"Credit propensity, adaptive risk, cashback intelligence."},
            { icon: <LineChart className="h-6 w-6"/>, title:"Healthcare & Clinics", desc:"Operational insights, occupancy forecasts, explainable recommendations."},
            { icon: <Network className="h-6 w-6"/>, title:"Logistics & Mobility", desc:"Route optimization, delay prediction, cost anomalies."},
            { icon: <Sparkles className="h-6 w-6"/>, title:"Retail & E-commerce", desc:"Personalization, dynamic pricing, churn signals."},
            { icon: <Workflow className="h-6 w-6"/>, title:"Fiscal & Compliance", desc:"Fiscal audit, anomaly detection, structured evidence."},
            { icon: <MessageSquare className="h-6 w-6"/>, title:"Education & Energy", desc:"Adaptive tutoring; demand & maintenance predictions."}
          ].map((useCase, i)=>(
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 text-pulse-cyan mb-3">
                <div className="p-2 bg-pulse-cyan/10 rounded-lg group-hover:bg-pulse-cyan/20 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="font-semibold text-lg">{useCase.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPARISON */}
      <Section title="Agents vs Adaptive Layer">
        <div className="overflow-x-auto mt-8">
          <div className="card p-8">
            <table className="w-full text-left">
              <thead className="text-slate-400 text-sm">
                <tr>
                  <th className="px-6 py-4 font-semibold">Dimension</th>
                  <th className="px-6 py-4 font-semibold">Agents / Automation</th>
                  <th className="px-6 py-4 font-semibold">PixelPulse Adaptive Layer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose","Execute tasks","Learn patterns and decide"],
                  ["Input","Prompts + APIs","Data + context (embeddings)"],
                  ["Logic","Deterministic flows","Adaptive reasoning (RAG/LoRA/DPO)"],
                  ["Output","Task execution","Explainable insights & recommendations"],
                  ["Horizon","Short-term","Long-term intelligence"],
                  ["Success","Time saved","Accuracy, margin, risk reduction"]
                ].map((row, i)=>(
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-pulse-cyan">{row[0]}</td>
                    <td className="px-6 py-4 text-slate-300">{row[1]}</td>
                    <td className="px-6 py-4 text-slate-100 font-medium">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ROADMAP */}
      <Section id="roadmap" title="Roadmap 2025" kicker="Build path">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {phase:"v0.1", title:"Core SDK", desc:"RAG + Embeddings + LoRA (foundation)", color:"from-pulse-cyan to-blue-500"},
            {phase:"v0.2", title:"Feedback Loop", desc:"DPO + synthetic evaluation", color:"from-blue-500 to-purple-500"},
            {phase:"v0.3", title:"Insight Engine", desc:"Narrative dashboards + APIs", color:"from-purple-500 to-pulse-purple"},
            {phase:"v1.0", title:"SaaS SDK", desc:"Multitenant + billing + packs", color:"from-pulse-purple to-pink-500"}
          ].map((r,i)=>(
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300 group">
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${r.color} rounded-lg text-white text-sm font-mono mb-4`}>
                {r.phase}
              </div>
              <h4 className="text-xl font-semibold mb-3">{r.title}</h4>
              <p className="text-slate-300 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" title="Meet us @ Web Summit Lisbon">
        <div className="card p-12 text-center hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6">Ready to build adaptive intelligence into your data?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@pixelpulselab.dev" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-semibold hover:shadow-lg hover:shadow-pulse-cyan/25 transition-all duration-300">
              Request Access <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#blueprint" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300">
              Download Technical Blueprint
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-sm">© 2025 PixelPulseLab.dev — Adaptive cognition, delivered as code.</p>
        </div>
      </Section>
    </main>
  );
}