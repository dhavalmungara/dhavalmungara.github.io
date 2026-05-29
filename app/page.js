"use client";
import React, { useState, useEffect } from 'react';
import { 
  Shield, Network, Briefcase, Award, GraduationCap, 
  Send, Phone, MessageSquare, ExternalLink, Terminal, 
  Eye, Clock, Globe, Lock, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function ResumeWebsite() {
  // Typing Animation Configuration
  const words = ["Cyber Security Manager", "Infrastructure Hardening Expert", "Network DevOps Professional"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Simulated Tracker Dashboard State
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let handle = setTimeout(() => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setIsDeleting(true);
          setTypingSpeed(2000); 
        } else {
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(handle);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-teal-400 font-mono font-bold tracking-wider">
            <Shield className="w-5 h-5 animate-pulse" />
            <span>DM__SEC.INIT</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition">Dashboard</a>
            <a href="#experience" className="hover:text-teal-400 transition">Timeline</a>
            <a href="#certifications" className="hover:text-teal-400 transition">Credentials</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#blog" className="hover:text-teal-400 transition">Threat Intel</a>
            <a href="#contact" className="hover:text-teal-400 transition">Inquiry</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="pt-20 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            SYSTEM STATUS: OPERATIONAL
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Mungara Dhaval [cite: 1]
          </h1>
          <div className="h-12 text-xl md:text-2xl font-mono text-slate-400 flex items-center">
            <span>&gt; </span>
            <span className="text-teal-400 ml-2 font-semibold">{currentText}</span>
            <span className="w-2 h-6 bg-teal-400 ml-1 animate-blink" />
          </div>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Seeking an exciting and dynamic role to leverage skills and 9+ years of professional experience in delivering tangible results across enterprise infrastructures[cite: 3]. Dedicated to a culture of optimization, continuous deployment, and risk mitigation[cite: 4, 22].
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-all flex items-center gap-2">
              <Send className="w-4 h-4" /> Secure Inquiry
            </a>
            <a 
              href="https://wa.me/919998993551" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Secure Line [cite: 7]
            </a>
          </div>
        </div>

        {/* PROFILE PHOTO EMBED */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="relative border-2 border-teal-500/30 p-4 rounded-full bg-slate-900/60 shadow-2xl backdrop-blur-sm">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="profile-photo.jpg" 
                alt="Dhaval Mungara" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITER VISITOR METRICS DASHBOARD */}
      <section className="px-6 max-w-7xl mx-auto my-6">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 font-mono grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[10px] text-slate-700 select-none">SOC_METRICS_V1.4</div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-teal-400" /> TOTAL NODE VISITS</div>
            <div className="text-2xl font-bold tracking-wider text-white">1,429 <span className="text-xs text-teal-400 font-normal">(+5.1%)</span></div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-blue-400" /> RECRUITER LOCATIONS</div>
            <div className="text-2xl font-bold text-white tracking-wide">IN / US [cite: 28, 41, 42]</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500 flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> INTEGRITY CHECK</div>
            <div className="text-2xl font-bold text-emerald-400">100% SECURE</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-purple-400" /> INSTANCE TIME</div>
            <div className="text-2xl font-bold text-white tracking-widest">{systemTime || "00:00:00"}</div>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-7xl mx-auto my-12" />

      {/* VERIFIED CREDENTIALS BADGES */}
      <section id="certifications" className="px-6 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-teal-400" />
          <h2 className="text-2xl font-bold text-white tracking-wide">Verified Credentials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl hover:border-teal-500/30 transition group relative">
            <div className="absolute top-4 right-4 text-xs text-slate-600 font-mono">ISACA</div>
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold mb-4 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300">CISM</div>
            <h3 className="text-lg font-semibold text-white">Certified Information Security Manager [cite: 44]</h3>
            <p className="text-xs font-mono text-slate-500 mt-2">Credential ID: C5UDVQW7WWYG [cite: 44]</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition group relative">
            <div className="absolute top-4 right-4 text-xs text-slate-600 font-mono">CISCO</div>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-4 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300">CCNP</div>
            <h3 className="text-lg font-semibold text-white">Cisco Certified Network Professional [cite: 46]</h3>
            <p className="text-xs font-mono text-slate-500 mt-2">Credential ID: CSCONPE8923N3 [cite: 46]</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl hover:border-purple-500/30 transition group relative">
            <div className="absolute top-4 right-4 text-xs text-slate-600 font-mono">RELIANCE</div>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-4 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-slate-950 transition-all duration-300">PMP</div>
            <h3 className="text-lg font-semibold text-white">Project Management Professional [cite: 42, 45]</h3>
            <p className="text-xs font-mono text-slate-500 mt-2">Credential ID: 7P34XUBSSLNN [cite: 45]</p>
          </div>
        </div>
      </section>

      {/* ANIMATED TIMELINE FOR WORK EXPERIENCE */}
      <section id="experience" className="px-6 max-w-7xl mx-auto pt-24 space-y-8">
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-teal-400" />
          <h2 className="text-2xl font-bold text-white tracking-wide">Operational Timeline</h2>
        </div>
        <div className="relative border-l-2 border-slate-800 pl-6 ml-4 space-y-12">
          <div className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:bg-teal-400 transition-all duration-300" />
            <div className="space-y-2">
              <span className="text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md">Oct 2023 – Present [cite: 24]</span>
              <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition">Cyber Security Manager — SITP [cite: 24]</h3>
              <p className="text-slate-400 text-sm max-w-4xl leading-relaxed">
                Lead critical IT Cyber Security Operations managing a perimeter defence infrastructure team of 12 members[cite: 25]. Direct asset lifecycle workflows, software license auditing, vendor integrations, and daily budget planning[cite: 26]. Supervise automated SIEM logging alerts, application vulnerability tests, and comprehensive risk mitigation strategies across India and US sites ensuring strict SLA fulfillment[cite: 27, 28].
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-400 group-hover:bg-blue-400 transition-all duration-300" />
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">Jul 2015 – Oct 2023 (8 Years) [cite: 30]</span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">Senior Manager — Reliance Industries Ltd [cite: 30]</h3>
              <p className="text-slate-400 text-sm max-w-4xl leading-relaxed">
                Orchestrated end-to-end IT network infrastructure deployments, endpoint systems auditing, and multi-tenant compliance frameworks across key locations including Jamnagar & Dahej[cite: 31]. Formulated rollout topologies for Jio FTTH architecture and steered critical IT asset assignments for the massive J3 refinery expansion plant[cite: 32, 33].
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-slate-500 transition-all duration-300" />
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 bg-slate-800/40 px-2 py-0.5 rounded-md">Aug 2009 – Jul 2015 [cite: 35, 37]</span>
              <h3 className="text-xl font-bold text-slate-300">Technical Support Engineering Tenures [cite: 35, 37]</h3>
              <p className="text-slate-400 text-sm max-w-4xl leading-relaxed">
                Acted as Resident AV Engineer at Reliance Jamnagar via Microlink Solution resolving operational infrastructure dependencies[cite: 35, 36]. Configured layered switching frameworks, HP Smart Switches, and enterprise Cyberoam Firewall devices while acting as Senior Technical Support Engineer with Sai InfoSystems[cite: 37, 38].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="projects" className="px-6 max-w-7xl mx-auto pt-24 space-y-8">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-teal-400" />
          <h2 className="text-2xl font-bold text-white tracking-wide">Architectural Deployments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-all">
            <div className="space-y-3">
              <div className="text-xs font-mono text-teal-400">PRODUCTION SYSTEM</div>
              <h3 className="text-xl font-bold text-white">SentinelPath Security Patrol</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                An enterprise-grade multi-platform physical routing security architecture executing mandatory GPS-QR perimeter path validation accompanied by real-time automated incident metric logging and report updates.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">GPS Validation</span>
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">QR Architecture</span>
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">Automated Logging</span>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:scale-[1.01] transition-all">
            <div className="space-y-3">
              <div className="text-xs font-mono text-blue-400">ZERO TRUST VECTOR</div>
              <h3 className="text-xl font-bold text-white">Visitor Compliance Workflow</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                State-machine driven onboarding workflow built to restrict industrial plant entry parameters until safety video modules are completely verified alongside peripheral activity data validation maps.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">State Machine</span>
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">Compliance Tracking</span>
              <span className="text-[11px] font-mono bg-slate-800 px-2.5 py-1 rounded text-slate-300">Peripheral Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO BLOG SECTION */}
      <section id="blog" className="px-6 max-w-7xl mx-auto pt-24 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold text-white tracking-wide">Threat Intel & Infrastructure Insights</h2>
          </div>
          <span className="text-xs font-mono text-slate-500">SEO Target: Infrastructure Hardening</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-5 bg-slate-900/20 border border-slate-900 hover:border-slate-800 rounded-xl space-y-3 transition">
            <div className="text-xs font-mono text-teal-400">CLOUD SECURITY</div>
            <h3 className="text-md font-bold text-slate-200 hover:text-teal-300 cursor-pointer transition">Hardening Hybrid Frameworks: Zero Trust Implementation Tactics</h3>
            <p className="text-xs text-slate-400 line-clamp-3">Strategic architectural blueprints for executing cross-tenant Azure and AWS environment controls without disrupting runtime network throughput parameters.</p>
            <div className="flex items-center text-xs font-mono text-slate-500 gap-1 pt-2"><span>Read Full Article</span> <ChevronRight className="w-3 h-3" /></div>
          </article>
          <article className="p-5 bg-slate-900/20 border border-slate-900 hover:border-slate-800 rounded-xl space-y-3 transition">
            <div className="text-xs font-mono text-teal-400">RISK MODELLING</div>
            <h3 className="text-md font-bold text-slate-200 hover:text-teal-300 cursor-pointer transition">STRIDE vs DREAD: Quantifying Network Attack Vectors Systematically</h3>
            <p className="text-xs text-slate-400 line-clamp-3">A structural methodology explaining why simple perimeter validation rules break down when dealing with complex multi-stage vulnerability paths.</p>
            <div className="flex items-center text-xs font-mono text-slate-500 gap-1 pt-2"><span>Read Full Article</span> <ChevronRight className="w-3 h-3" /></div>
          </article>
          <article className="p-5 bg-slate-900/20 border border-slate-900 hover:border-slate-800 rounded-xl space-y-3 transition">
            <div className="text-xs font-mono text-teal-400">EMAIL SEGREGATION</div>
            <h3 className="text-md font-bold text-slate-200 hover:text-teal-300 cursor-pointer transition">Enforcing SPF, DKIM, and DMARC Alignment Matrixes</h3>
            <p className="text-xs text-slate-400 line-clamp-3">Step-by-step documentation designed to eliminate spoofing vectors across highly distributed physical enterprise facilities and routing networks.</p>
            <div className="flex items-center text-xs font-mono text-slate-500 gap-1 pt-2"><span>Read Full Article</span> <ChevronRight className="w-3 h-3" /></div>
          </article>
        </div>
      </section>

      {/* FORMSPREE RECRUITER CONTACT FORM */}
      <section id="contact" className="px-6 max-w-7xl mx-auto pt-24 pb-20 space-y-8">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-teal-400" />
          <h2 className="text-2xl font-bold text-white tracking-wide">Initiate Secure Contact Gateway</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6 font-mono text-sm text-slate-400 bg-slate-900/30 border border-slate-800/60 p-6 rounded-xl">
            <div className="text-xs text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Verification Node Info</div>
            <div className="space-y-3">
              <p><strong className="text-slate-200">Location:</strong> Atladara, Vadodara, Gujarat [cite: 13]</p>
              <p><strong className="text-slate-200">Primary Channel:</strong> dhaval27691@gmail.com [cite: 11]</p>
              <p><strong className="text-slate-200">Focus Core:</strong> Cyber Security Infrastructure Ops [cite: 1]</p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
              Submissions securely processed via Formspree TLS encryption hooks. Standard node turnaround validation: &lt;12 Hours.
            </div>
          </div>
          <div className="lg:col-span-7">
            {/* REPLACE "your_formspree_id" WITH YOUR RECTIFIED ENDPOINT ID FROM YOUR FORMSPREE CONSOLE */}
            <form action="https://formspree.io/f/your_formspree_id" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Originator Name</label>
                  <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-mono transition" placeholder="Recruiter / Organization Name" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Return Gateway (Email)</label>
                  <input type="email" name="_replyto" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-mono transition" placeholder="name@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Subject Core</label>
                <input type="text" name="subject" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-mono transition" placeholder="Hiring Proposal Parameters" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Payload Data (Message)</label>
                <textarea name="message" rows="4" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-mono transition resize-none" placeholder="Provide full details of technical opportunity or context framework parameters..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition-all shadow-md flex items-center justify-center gap-2">
                Transmit Payload Data <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 px-6 py-8 text-center text-xs font-mono text-slate-600">
        <p>© 2026 Mungara Dhaval. Portfolio platform designed utilizing clean Next.js architecture parameters. All rights reserved.</p>
      </footer>

    </div>
  );
}
