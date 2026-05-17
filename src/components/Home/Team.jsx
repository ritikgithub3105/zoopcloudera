import React from 'react'
import members from '../../data/Team'
import MemberCard from '../Team/MemberCard'

const Team = () => {
  return (
    <section id='team' className="relative bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.12) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with modern design */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full text-cyan-200 font-semibold text-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            Our Amazing Team
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[montserrat] leading-tight text-white">
            Meet The Minds
            <span className="block text-cyan-300 mt-2">Behind Innovation</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-[montserrat] leading-relaxed">
            A collective of passionate IT professionals dedicated to transforming ideas into exceptional digital experiences.
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team