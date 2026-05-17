import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarConfig from "../data/Pages";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [quoteForm, setQuoteForm] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle states
  const toggleQuoteForm = () => {
    setQuoteForm(!quoteForm);
    setFormStatus("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdowns({});
  };

  const toggleDropdown = (pageName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [pageName]: !prev[pageName],
    }));
  };

  const closeDropdown = (pageName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [pageName]: false,
    }));
  };

  const openDropdown = (pageName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [pageName]: true,
    }));
  };

  // Formspree submission
  const handleQuoteSubmit = async (e) => {
    setFormStatus("Sending...");
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mblaydoa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setFormStatus("Network error. Please try later.");
    }
  };

  const { company, pages, ctaButton } = navbarConfig;

  const renderLink = (page, className) => (
    <Link
      key={page.name}
      to={page.route}
      onClick={() => {
        setIsMenuOpen(false);
        setOpenDropdowns({});
      }}
      className={className}
    >
      {page.name}
    </Link>
  );

  const handleScrollOrNavigate = (selector) => {
    if (location.pathname === "/") {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: selector } });
    }
  };

  return (
    <>
      {/* Quote Form Modal - Modern Design */}
      {quoteForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md transform animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-[Montserrat] font-bold text-gray-900">
                  Get a Quote
                </h2>
              </div>
              <button
                onClick={toggleQuoteForm}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleQuoteSubmit(e);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3 rounded-xl w-full transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3 rounded-xl w-full transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3 rounded-xl w-full transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3 rounded-xl w-full transition-all outline-none resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-[montserrat] font-bold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleQuoteForm}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-[montserrat] font-semibold py-3 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>

              {formStatus && (
                <div className={`mt-4 p-3 rounded-xl text-sm font-medium text-center ${
                  formStatus.includes("success") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}>
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Navbar with Glassmorphism */}
      <header className="w-full top-0 px-0 md:px-6 lg:px-12 fixed z-[999] pt-4">
        <nav className={`w-full mx-auto transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 rounded-3xl ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl border border-slate-800/70" 
            : "bg-slate-950/85 backdrop-blur-xl shadow-lg border border-slate-900/60"
        }`}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 h-full">
              <img
                src="/images/zoopcloudera.jpg"
                alt="logo"
                className="h-12 w-12 rounded-2xl object-cover shadow-lg shadow-cyan-500/20"
              />
              <h1 className="text-lg hidden lg:block font-bold text-white font-[montserrat] tracking-tight">
                {company.name}
              </h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {pages.map((page) => {
                if (page.subPages.length === 0) {
                  if (page.scroll) {
                    return (
                      <a
                        key={page.name}
                        onClick={() => handleScrollOrNavigate(page.scroll)}
                        className="cursor-pointer text-slate-200 font-[montserrat] hover:text-white font-semibold transition-colors relative group"
                      >
                        {page.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    );
                  } else {
                    return renderLink(
                      page,
                      "text-slate-200 font-[montserrat] hover:text-white font-semibold transition-colors relative group"
                    );
                  }
                }

                return (
                  <div
                    key={page.name}
                    className="relative"
                    onMouseEnter={() => openDropdown(page.name)}
                    onMouseLeave={() => closeDropdown(page.name)}
                  >
                    <div className="text-slate-200 cursor-pointer font-[montserrat] hover:text-white font-semibold flex items-center gap-1 transition-colors group">
                      <span>{page.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdowns[page.name] ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {openDropdowns[page.name] && (
                      <div className="absolute top-full left-0 pt-3 w-56 z-40 animate-fade-in">
                        <div className="bg-slate-950/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800/60 overflow-hidden">
                          <div className="py-2 flex flex-col gap-1 px-2">
                            {page.subPages.map((subPage) =>
                              renderLink(
                                subPage,
                                "block text-nowrap px-4 py-2.5 text-slate-200 hover:text-white font-semibold rounded-xl hover:bg-slate-800 transition-all transform hover:scale-105"
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/95 p-2 text-slate-100 hover:bg-slate-800 transition-all"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-100" />
                )}
              </button>

              <a
                onClick={toggleQuoteForm}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white px-6 py-2.5 cursor-pointer rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                {ctaButton.label}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-200 hover:text-white w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800/70 pt-4 mt-4 animate-slide-down bg-slate-950/95 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="space-y-1 px-2">
                {pages.map((page) =>
                  page.subPages.length === 0 ? (
                    page.scroll ? (
                      <a
                        key={page.name}
                        onClick={() => {
                          handleScrollOrNavigate(page.scroll);
                          setIsMenuOpen(false);
                          setOpenDropdowns({});
                        }}
                        className="block cursor-pointer text-slate-200 hover:text-white hover:bg-slate-800 font-semibold py-3 px-4 rounded-xl transition-all"
                      >
                        {page.name}
                      </a>
                    ) : (
                      renderLink(
                        page,
                        "block text-slate-200 hover:text-white hover:bg-slate-800 font-semibold py-3 px-4 rounded-xl transition-all"
                      )
                    )
                  ) : (
                    <div key={page.name} className="border-b border-slate-800/70 pb-2">
                      <button
                        onClick={() => toggleDropdown(page.name)}
                        className="flex items-center justify-between w-full text-slate-200 hover:text-white hover:bg-slate-800 font-semibold py-3 px-4 rounded-xl transition-all"
                      >
                        <span>{page.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdowns[page.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdowns[page.name] && (
                        <div className="ml-4 mt-2 space-y-1 animate-slide-down">
                          {page.subPages.map((subPage) =>
                            renderLink(
                              subPage,
                              "block text-slate-200 hover:text-white hover:bg-slate-800 py-2 px-4 rounded-lg transition-all"
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}

                <button
                  onClick={toggleTheme}
                  className="block w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-center hover:bg-slate-700 transition-all"
                  aria-label="Toggle dark mode"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>

                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenDropdowns({});
                    toggleQuoteForm();
                  }}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold text-center mt-4 transition-all transform active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  {ctaButton.label}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;