import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 font-[montserrat] mb-6">
            About <span className="text-cyan-300">ZoopCloudera</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mx-auto font-[montserrat] max-w-4xl">
            ZoopCloudera IT Solutions combines corporate-grade process discipline with fast, attentive service. Our team delivers secure IT operations, scalable infrastructure, and reliable support for businesses that need trusted technology partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-6 bg-slate-900/85 rounded-3xl shadow-2xl shadow-slate-950/40 border border-white/10 transition-shadow">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Enterprise Standards</h3>
            <p className="text-slate-300">Structured processes, SLA-driven delivery, and measurable outcomes for every engagement.</p>
          </div>

          <div className="p-6 bg-slate-900/85 rounded-3xl shadow-2xl shadow-slate-950/40 border border-white/10 transition-shadow">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zM4 18h16M4 22h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Proven Delivery</h3>
            <p className="text-slate-300">Experienced engineers and operations specialists deliver secure infrastructure across domains.</p>
          </div>

          <div className="p-6 bg-slate-900/85 rounded-3xl shadow-2xl shadow-slate-950/40 border border-white/10 transition-shadow">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3zM6 16v5h12v-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">24/7 Support</h3>
            <p className="text-slate-300">Always-on monitoring and support for fast issue resolution and uninterrupted operations.</p>
          </div>

          <div className="p-6 bg-slate-900/85 rounded-3xl shadow-2xl shadow-slate-950/40 border border-white/10 transition-shadow">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12M9 6h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Secure Design</h3>
            <p className="text-slate-300">Robust IT architecture with risk-aware security, monitoring, and compliance controls.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-300 leading-relaxed mx-auto font-[montserrat] max-w-4xl">
            Our team brings corporate IT experience, fast execution, and a sharp focus on operational excellence. We help businesses reduce risk, optimize workflows, and deliver reliable, scalable technology services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
