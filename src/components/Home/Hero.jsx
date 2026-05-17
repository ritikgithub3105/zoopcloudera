import React, { useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
  const CTA = useRef(null)

  useGSAP(() => {
    gsap.from('.heading', {
      y: 50,
      stagger: 0.2,
      opacity: 0,
      rotateY: '20deg',
      scale: 0.9,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    })

    gsap.from('.stat-card', {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.8,
      delay: 1.2,
      ease: 'back.out(1.7)'
    })
  })

  return (
    <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen overflow-hidden bg-slate-950 text-slate-100 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-10 right-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_18%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="fade-in inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300 shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-300 mr-2" />
              Trusted IT Services for Growing Companies
            </div>

            <div className="space-y-6">
              <h1 className="heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
                Transforming <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text">IT Challenges</span> into seamless solutions
              </h1>
              <p className="fade-in max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed">
                We deliver modern IT infrastructure, secure networking, and managed support with a premium enterprise look and feel.
              </p>
            </div>

            <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                ref={CTA}
                onClick={() => {
                  const element = document.querySelector('#services');
                  element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Zap className="relative z-10 w-5 h-5 mr-2" />
                <span className="relative z-10">Explore Services</span>
              </button>

              <button className="group relative rounded-2xl border border-white/10 bg-slate-900/80 px-8 py-4 text-base font-bold text-slate-100 shadow-xl shadow-slate-950/50 transition-all duration-300 hover:bg-slate-900 hover:-translate-y-1">
                <Shield className="relative z-10 w-5 h-5 text-cyan-300 mr-2" />
                <span className="relative z-10">Learn More</span>
              </button>
            </div>

            <div className="fade-in grid gap-4 sm:grid-cols-3">
              <div className="stat-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/40 transition-all duration-500 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Enterprise</p>
                <p className="mt-3 text-3xl font-bold text-white">Premium</p>
              </div>
              <div className="stat-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/40 transition-all duration-500 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Secure</p>
                <p className="mt-3 text-3xl font-bold text-white">24/7 Support</p>
              </div>
              <div className="stat-card rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/40 transition-all duration-500 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Scale</p>
                <p className="mt-3 text-3xl font-bold text-white">Growth Ready</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/50 min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="IT operations team at work"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
              <span className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Copyright-safe hero image</span>
              <h3 className="mt-3 text-2xl font-semibold text-white">Strategic infrastructure for modern businesses</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">A visual that reflects high-end IT delivery and a premium corporate service brand.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
