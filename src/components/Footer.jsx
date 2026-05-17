import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="rounded-4xl relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
          <div>
            <h2 className="text-2xl font-bold text-slate-100 font-[montserrat] mb-4">
              ZoopCloudera IT Solutions
            </h2>
            <p className="text-slate-300">
              Reliable IT support and infrastructure services to keep your
              business secure, efficient, and future-ready.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-100 font-[montserrat] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                +91 96506 41731
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a className="text-slate-300 hover:text-white" href="mailto:zoopclouderaitsolutions@gmail.com">zoopclouderaitsolutions@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                First Floor, Plot no 91A,<br />
                Sainik Vihar, Mohan Garden,<br />
                Dwarka Mor, New Delhi – 110059
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-100 font-[montserrat] mb-4">
              Find Us
            </h3>
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.724260386484!2d77.02772397550098!3d28.638025175661706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE2LjkiTiA3N8KwMDEnNDkuMSJF!5e0!3m2!1sen!2sin!4v1756549134920!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZoopCloudera Location"
              ></iframe>
            </div>
          </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm font-semibold md:flex md:items-center md:justify-between md:px-6 md:text-md">
        <h2>© {new Date().getFullYear()} ZoopCloudera IT Solutions. All rights reserved.</h2>
        <h2>Delivering enterprise IT services with trust, speed, and clarity.</h2>
      </div>
    </footer>
  );
};

export default Footer;
