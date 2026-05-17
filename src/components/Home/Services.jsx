import React from "react";
import services from "../../data/Services";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-100">
            Our <span className="text-cyan-300">Services</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-400">
            Market-ready IT service cards with strong visuals, clear benefits, and a working action link.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(services).map((service) => (
            <article
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/95 shadow-2xl shadow-slate-950/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 min-h-[520px] md:min-h-[480px]"
            >
              <div className="relative overflow-hidden rounded-t-[2rem]">
                <img
                  src={service.hero}
                  alt={service.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex h-full flex-col gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300 min-h-[6rem]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/services/${service.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
