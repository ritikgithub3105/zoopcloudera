import {
  Shield,
  Laptop,
  Server,
  Camera,
  Wrench,
  Network,
  ShoppingCart,
  Monitor,
  Lock,
  Headphones,
} from "lucide-react";

const services = [
  {
    name: "IT Support & Maintenance",
    description:
      "24/7 monitoring, expert troubleshooting, and comprehensive hardware & software maintenance with rapid response times.",
    icon: Headphones,
    route: "/services/it-support",
  },
  {
    name: "Cloud Solutions",
    description:
      "Professional cloud migration, server setup, virtualization, and high-performance network infrastructure implementation.",
    icon: Server,
    route: "/services/cloud-solutions",
  },
  {
    name: "Software Development & DevOps",
    description:
      "Custom software development, CI/CD pipeline implementation, and secure deployment practices for modern businesses.",
    icon: Network,
    route: "/services/software-development",
  },
  {
    name: "CCTV & Security Solutions",
    description:
      "Advanced CCTV systems, access control, 24/7 monitoring, and comprehensive security infrastructure with preventive maintenance.",
    icon: Camera,
    route: "/services/cctv-solutions",
  },
  {
    name: "Network Infrastructure",
    description:
      "End-to-end network design and implementation with high-availability architecture and performance optimization.",
    icon: Monitor,
    route: "/services/network-infrastructure",
  },
  {
    name: "System Security",
    description:
      "Enterprise-grade security solutions including firewall setup, threat monitoring, and data protection systems.",
    icon: Lock,
    route: "/services/system-security",
  },
  {
    name: "Hardware Solutions",
    description:
      "Professional hardware procurement, configuration, maintenance, and lifecycle management services.",
    icon: Wrench,
    route: "/services/hardware-solutions",
  },
  {
    name: "IT Equipment Rentals",
    description:
      "Flexible rental services for laptops, workstations, servers, and networking equipment with technical support.",
    icon: Laptop,
    route: "/services/rentals",
  },
  {
    name: "IT Marketplace",
    description:
      "One-stop shop for enterprise IT hardware, software licensing, and accessories with expert consultation.",
    icon: ShoppingCart,
    route: "/services/marketplace",
  },
];

export default services;
