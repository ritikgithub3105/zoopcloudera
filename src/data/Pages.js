const navbarConfig = {
  company: {
    name: "ZoopCloudera IT Solutions"
  },
  
  pages: [
    { name: "Home", route: "/", subPages: [] },
    { name: "About", scroll: "#about", subPages: [] },
    {
      name: "Services",
      scroll: "#services",
      subPages: [
        { name: "Hardware & Networking", route: "/services/hardware-networking" },
        { name: "Network Infrastructure", route: "/services/network-infrastructure" },
        { name: "CCTV Solutions", route: "/services/cctv-solutions" },
        { name: "Marketplace & Rentals", route: "/services/marketplace-rentals" },
        { name: "Corporate IT Systems", route: "/services/corporate-systems" },
        { name: "System Security", route: "/services/system-security" },
      ]
    },
    { name: "Our Team", scroll: "#team", subPages: [] },
    { name: "Contact", scroll: "#contact", subPages: [] },
  ],
  
  ctaButton: {
    label: "Get Quote",
    route: "/quote"
  }
};

export default navbarConfig;
