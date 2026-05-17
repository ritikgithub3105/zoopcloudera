import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import servicesData from '../data/Services'

const ServicePage = ({ serviceId: propServiceId }) => {
  const { serviceId: paramServiceId } = useParams()
  const serviceId = propServiceId || paramServiceId
  const service = servicesData[serviceId]
  const heroUrl = service?.hero || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-16 text-center text-slate-100">
        <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <p className="text-slate-400 mb-6">The requested service page does not exist or the link is invalid.</p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:brightness-110"
          >
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-20 text-slate-100 transition-colors duration-500">
      <div className="relative overflow-hidden h-[50vh] md:h-[60vh] lg:h-[66vh]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 22%), url(${heroUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950/95" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[0.7fr_0.3fr] items-center">
            <div className="space-y-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200 shadow-sm shadow-cyan-500/10">
                Service Spotlight
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-cyan-200 leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#details" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] transition">
                  View Details
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-lg hover:bg-slate-900/90 transition">
                  See Pricing
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50 border border-slate-800">
            <h2 className="text-lg font-semibold text-slate-100 mb-4">What we deliver</h2>
            <ul className="space-y-3 text-slate-300">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-600 via-slate-900 to-slate-950 p-8 text-white shadow-2xl border border-cyan-500/10 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Business Outcomes</h2>
              <ul className="space-y-3 text-slate-100">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-white" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-3xl bg-slate-950/80 p-6 border border-white/10">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Ideal for enterprise teams</p>
              <p className="mt-3 text-2xl font-bold tracking-tight">Trusted by growing companies</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50 border border-slate-800">
            <h2 className="text-lg font-semibold text-slate-100 mb-4">Smart Support</h2>
            <p className="text-slate-300 leading-relaxed">
              Gain a dedicated team that proactively monitors systems, enforces policies, and resolves issues before they impact operations.
            </p>
            <div className="mt-6 space-y-3 text-slate-300">
              <div className="rounded-2xl bg-slate-950/80 p-4 border border-slate-800">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Response</p>
                <p className="font-semibold text-slate-100">Priority SLA with fast resolution</p>
              </div>
              <div className="rounded-2xl bg-slate-950/80 p-4 border border-slate-800">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Coverage</p>
                <p className="font-semibold text-slate-100">Remote and on-site support options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="details" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="rounded-3xl bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/60 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-4">Detailed service overview</h2>
            <p className="text-slate-300 leading-relaxed">Our approach combines strategic planning, corporate-grade implementation, and a customer-first support process to help your business stay secure, compliant, and future-ready.</p>
            <div className="mt-8 grid gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="rounded-3xl border border-slate-800 p-5 bg-slate-950/80">
                  <p className="font-semibold text-white">{feature}</p>
                  <p className="text-sm text-slate-400 mt-2">We create a tailored implementation plan around this capability to maximize uptime and efficiency.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-900 to-cyan-700 p-10 shadow-2xl text-white border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Why choose us</h2>
            <ul className="space-y-4 text-slate-100">
              <li className="rounded-3xl bg-slate-950/20 p-5">
                <p className="font-semibold">Corporate-grade governance</p>
                <p className="text-sm text-slate-200 mt-2">Structured processes, SLAs, and escalation paths ensure professionalism at every stage.</p>
              </li>
              <li className="rounded-3xl bg-slate-950/20 p-5">
                <p className="font-semibold">Clear ROI focus</p>
                <p className="text-sm text-slate-200 mt-2">We measure service success with uptime, user satisfaction, and reduced support costs.</p>
              </li>
              <li className="rounded-3xl bg-slate-950/20 p-5">
                <p className="font-semibold">Experienced delivery</p>
                <p className="text-sm text-slate-200 mt-2">A proven team delivering secure infrastructure and support for both startups and enterprises.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">Pricing tiers</p>
          <h2 className="text-4xl font-bold text-white mt-3">Flexible packages for every business stage</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {Object.values(service.pricing).map((tier, index) => (
            <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50 hover:border-cyan-400/30 transition">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold">{tier.name}</p>
                <p className="text-3xl font-bold text-white mt-4">{tier.price}</p>
              </div>
              <ul className="space-y-3 text-slate-300">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-2xl bg-cyan-500 px-6 py-3 text-slate-950 font-semibold hover:bg-cyan-400 transition">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicePage
