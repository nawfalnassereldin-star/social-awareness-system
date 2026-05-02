"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  Users, 
  Target,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- UI COMPONENTS ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Problem', 'Solution', 'How it works', 'Pricing', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-tighter text-white">
          SOCIAL<span className="text-blue-500">AWARENESS</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a href="#apply" className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">
          Apply Now
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsOpen(false)} className="text-lg text-gray-300">
              {item}
            </a>
          ))}
          <a href="#apply" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white p-3 rounded-xl text-center font-bold">Apply Now</a>
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
    <div className={`h-1 w-20 bg-blue-600 ${centered ? 'mx-auto' : ''} mb-6`}></div>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// --- MAIN PAGE ---

export default function LandingPage() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      <Nav />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              1-on-1 Personalized Coaching
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Stop Overthinking Conversations & Build <span className="text-blue-500">Real Confidence</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A structured system for shy men (16–25) to stop freezing in social situations and master communication in just 14 days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={20} />
              </a>
              <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
                Contact Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section id="problem" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="The Social Trap" subtitle="Most people stay stuck because they lack a system, not because they lack personality." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Freezing when talking to people",
              "Replaying conversations for hours",
              "Anxiety over 'seen' messages",
              "Feeling socially 'behind' your peers",
              "Struggling to find the right words",
              "Overthinking every single interaction"
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-950 border border-white/5 rounded-2xl">
                <XCircle className="text-red-500 mt-1 shrink-0" size={20} />
                <span className="text-gray-300 font-medium">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section id="solution" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="The Social Awareness System" centered={false} />
              <p className="text-gray-400 text-lg mb-8">
                We don't do "pick-up lines." We build a core foundation of social intelligence so you can be yourself, without the fear.
              </p>
              <ul className="space-y-4">
                {[
                  "Understand social behavior in real-time",
                  "Natural responses without scripts",
                  "Confidence in texting and DMs",
                  "1-on-1 feedback on your interactions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-blue-500" size={24} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 relative">
              <Zap className="absolute -top-6 -left-6 text-blue-500 bg-gray-950 p-2 rounded-lg" size={48} />
              <h3 className="text-2xl font-bold mb-4 italic text-blue-400">"The 14-Day Shift"</h3>
              <p className="text-gray-300 leading-relaxed italic">
                "I went from staring at my phone for 10 minutes trying to think of a text reply to actually enjoying the conversation. The freezing just stopped."
              </p>
              <p className="mt-4 font-bold text-white">— Former Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Step-by-Step Evolution" />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnosis", desc: "We find your specific triggers and social blocks." },
              { step: "02", title: "Awareness", desc: "Learn the hidden mechanics of human behavior." },
              { step: "03", title: "Response", desc: "Master what to say in real-time and over text." },
              { step: "04", title: "Practice", desc: "Apply with real feedback and live correction." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 bg-gray-950 border border-white/5 rounded-2xl">
                <span className="text-4xl font-black text-blue-900/30 absolute top-4 right-6">{s.step}</span>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl">
              <Users className="text-blue-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-4">This IS for you if:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• You are 16–25 and feel "stuck"</li>
                <li>• You're a beginner to social growth</li>
                <li>• You want real, long-term confidence</li>
              </ul>
            </div>
            <div className="p-8 bg-red-900/10 border border-red-500/20 rounded-3xl">
              <Target className="text-red-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-4">This is NOT for:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Advanced "pickup" seekers</li>
                <li>• People looking for "magic pill" tricks</li>
                <li>• Those unwilling to do the practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto bg-gray-950 border-2 border-blue-600 rounded-3xl p-10 text-center shadow-2xl shadow-blue-500/10">
            <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Full Program</h3>
            <div className="text-5xl font-black text-white mb-6">$300 - $500</div>
            <p className="text-gray-400 mb-8 font-medium">1-on-1 Personal Guidance, Feedback, and Real Conversation Correction.</p>
            <a href="#apply" className="block w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all">
              Claim Your Spot
            </a>
          </div>
        </div>
      </section>

      {/* 7. APPLICATION & CONTACT */}
      <section id="apply" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <SectionHeading title="Apply for Coaching" centered={false} />
            {formStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center">
                <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-white">Application Sent!</h3>
                <p className="text-gray-400 mt-2">I will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-white" />
                <input required type="number" placeholder="Your Age" className="w-full bg-gray-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-white" />
                <textarea required placeholder="What is your biggest struggle in social situations?" rows="4" className="w-full bg-gray-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-white"></textarea>
                <input required type="text" placeholder="Contact Info (Instagram or Phone)" className="w-full bg-gray-900 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-all text-white" />
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-all">Submit Application</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div id="contact" className="space-y-8">
            <SectionHeading title="Contact Directly" centered={false} />
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-gray-900 rounded-2xl group-hover:bg-blue-600/20 transition-all">
                  <MessageCircle className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-white font-medium">+961 70 499 882</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-gray-900 rounded-2xl group-hover:bg-blue-600/20 transition-all">
                  <Mail className="text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-medium">nawfalnassereldin@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <a 
                href="https://wa.me/96170499882?text=Hey%20I%20want%20help%20with%20social%20confidence" 
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg transition-all"
              >
                <MessageCircle size={24} /> Chat on WhatsApp
              </a>
              <a 
                href="mailto:nawfalnassereldin@gmail.com" 
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-bold transition-all"
              >
                <Mail size={24} /> Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Social Awareness System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}