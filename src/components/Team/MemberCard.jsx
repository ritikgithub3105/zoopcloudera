import React, { useState } from 'react'

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative min-h-[420px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full bg-slate-900/95 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 border border-slate-800">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56,189,248,0.12) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />
            </div>

            {/* Gradient orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative h-full flex flex-col items-center justify-center p-6 gap-5 sm:p-8 sm:p-8">
              {/* Image with glassmorphism effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent z-10" />
                  <img
                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=e3f2fd&color=1e40af&size=144`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  ✦
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-white font-[montserrat]">
                  {member.name}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.roles.slice(0, 2).map((role, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-1.5 text-xs font-bold text-blue-600 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="pt-4 flex items-center justify-center gap-2 text-blue-500 text-sm font-medium opacity-60">
                  <span>Hover to learn more</span>
                  <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-slate-950 via-cyan-950 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-6 sm:p-8 flex flex-col justify-between border border-cyan-500/10">
            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10 space-y-4 w-full text-center">
              <div className="space-y-2 flex-col gap-2 text-center w-full">
                <h3 className="text-2xl font-bold text-white font-[montserrat]">
                  {member.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {member.roles.map((role, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold text-blue-600 bg-white/90 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/90 leading-relaxed text-sm font-[montserrat]">
                {member.description}
              </p>
            </div>

            {member.link && (
              <a 
                href={member.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="relative z-10 flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-slate-950 bg-cyan-300 rounded-2xl hover:bg-cyan-200 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <span>View Full Profile</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default MemberCard