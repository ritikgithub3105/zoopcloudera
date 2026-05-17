
const services = {
  'hardware-networking': {
    id: 'hardware-networking',
    title: 'Hardware & Networking',
    subtitle: 'Hardware Deployment, Maintenance & Network Engineering',
    hero: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'A single hardware and networking service for building, maintaining, and optimizing your IT infrastructure with strong connectivity and reliable equipment.',
    features: [
      'Hardware Procurement & Installation',
      'Network Design & Configuration',
      'Preventive Maintenance',
      'Structured Cabling',
      'Performance Monitoring',
      'On-site Support'
    ],
    benefits: [
      'Simplified Infrastructure Management',
      'Improved Connectivity',
      'Fewer Vendor Handoffs',
      'Reduced Downtime'
    ],
    pricing: {
      basic: { name: 'Managed Hardware', price: '₹40,000', features: ['Hardware Setup', 'Basic Network Configuration', 'Standard Support'] },
      premium: { name: 'Hardware + Network', price: '₹95,000', features: ['Advanced Setup', 'Network Optimization', 'Priority Maintenance'] },
      enterprise: { name: 'Corporate Infrastructure', price: 'Custom Pricing', features: ['Full Hardware Lifecycle', 'Network Engineering', 'Dedicated Support'] }
    }
  },
  'cloud-solutions': {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Scalable Cloud Migration & Managed Services',
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'Cloud solutions for modern enterprises, including migration, management, and secure hybrid infrastructure for high availability.',
    features: [
      'Cloud Migration Strategy',
      'Managed Cloud Operations',
      'Public & Private Cloud Design',
      'Virtualization Services',
      'Disaster Recovery',
      'Cloud Cost Optimization'
    ],
    benefits: [
      'Greater Scalability',
      'Improved Resilience',
      'Operational Transparency',
      'Lower Infrastructure Risk'
    ],
    pricing: {
      basic: { name: 'Cloud Starter', price: '₹20,000', features: ['Assessment', 'Migration Plan', 'Basic Setup'] },
      premium: { name: 'Cloud Growth', price: '₹55,000', features: ['Managed Operations', 'Monitoring', 'Performance Tuning'] },
      enterprise: { name: 'Cloud Enterprise', price: 'Custom Pricing', features: ['Hybrid Cloud', 'Disaster Recovery', 'Dedicated Support'] }
    }
  },
  'software-development': {
    id: 'software-development',
    title: 'Software Development',
    subtitle: 'Custom Software & DevOps Engineering',
    hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description: 'Custom software development and DevOps engineering that helps businesses automate processes, deliver faster, and maintain secure application lifecycles.',
    features: [
      'Custom Application Design',
      'DevOps Automation',
      'API & Integration Services',
      'Secure Deployment',
      'Mobile & Web Development',
      'Ongoing Support'
    ],
    benefits: [
      'Faster Time-to-Market',
      'Higher Reliability',
      'Improved Workflow Efficiency',
      'Secure Delivery'
    ],
    pricing: {
      basic: { name: 'MVP Build', price: '₹65,000', features: ['Requirement Analysis', 'Prototype', 'Core Development'] },
      premium: { name: 'Growth Product', price: '₹150,000', features: ['Full Product', 'Testing', 'Deployment'] },
      enterprise: { name: 'Enterprise Product', price: 'Custom Pricing', features: ['Large-Scale Delivery', 'Dedicated Team', 'Ongoing Support'] }
    }
  },
  'network-infrastructure': {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    subtitle: 'Enterprise-Grade Network Infrastructure',
    hero: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
    description: 'Build robust network infrastructure that scales with your business needs and ensures reliable connectivity.',
    features: [
      'Structured Cabling',
      'Data Center Setup',
      'Server Room Design',
      'Fiber Optic Installation',
      'Network Rack Organization',
      'Infrastructure Documentation'
    ],
    benefits: [
      'Scalable Architecture',
      'High Reliability',
      'Future-Proof Design',
      'Professional Installation'
    ],
    pricing: {
      basic: { name: 'Basic Setup', price: '₹50,000', features: ['Small Office Setup', 'Basic Cabling', 'Standard Documentation'] },
      premium: { name: 'Advanced Setup', price: '₹150,000', features: ['Enterprise Setup', 'Fiber Installation', 'Complete Documentation'] },
      enterprise: { name: 'Data Center', price: 'Custom Pricing', features: ['Full Data Center', 'Redundant Systems', 'Maintenance Contract'] }
    }
  },
  'cctv-solutions': {
    id: 'cctv-solutions',
    title: 'CCTV Solutions',
    subtitle: 'Advanced Security Camera Systems',
    hero: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive CCTV solutions for enhanced security with high-definition cameras and intelligent monitoring systems.',
    features: [
      'HD Security Cameras',
      'Night Vision Technology',
      'Remote Monitoring',
      'Motion Detection',
      'Cloud Storage Options',
      'Mobile App Access'
    ],
    benefits: [
      '24/7 Security Monitoring',
      'Crime Prevention',
      'Remote Access',
      'Evidence Recording'
    ],
    pricing: {
      basic: { name: 'Home Security', price: '₹25,000', features: ['4 HD Cameras', 'Basic Recording', 'Mobile App'] },
      premium: { name: 'Business Security', price: '₹75,000', features: ['16 HD Cameras', 'Advanced Recording', 'Cloud Storage'] },
      enterprise: { name: 'Enterprise Security', price: 'Custom Pricing', features: ['Unlimited Cameras', 'AI Analytics', 'Professional Monitoring'] }
    }
  },
  'marketplace-rentals': {
    id: 'marketplace-rentals',
    title: 'Marketplace & Rentals',
    subtitle: 'Purchase, Lease, and Scale IT Equipment Easily',
    hero: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description: 'A combined marketplace and rental service for businesses that need both procurement and flexible equipment leasing under one partnership.',
    features: [
      'Hardware & Software Procurement',
      'Server & Laptop Rentals',
      'Networking Equipment Leasing',
      'Flexible Rental Terms',
      'Warranty & Support',
      'Bulk Discounts'
    ],
    benefits: [
      'Single Supplier Experience',
      'Faster Deployment',
      'Lower Upfront Cost',
      'Flexible Scalability'
    ],
    pricing: {
      basic: { name: 'Procurement', price: 'Retail & Contract Pricing', features: ['Standard Procurement', 'Basic Warranty', 'Support Options'] },
      premium: { name: 'Rental', price: 'From ₹3,000/week', features: ['Short-Term Rentals', 'Delivery & Setup', 'Technical Support'] },
      enterprise: { name: 'Hybrid', price: 'Custom Pricing', features: ['Procurement + Rental', 'Dedicated Account', 'Priority Support'] }
    }
  },
  'corporate-systems': {
    id: 'corporate-systems',
    title: 'Corporate IT Systems',
    subtitle: 'Enterprise IT Infrastructure Solutions',
    hero: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive corporate IT systems design and implementation to streamline your business operations.',
    features: [
      'Enterprise Resource Planning',
      'Database Management',
      'Business Intelligence',
      'Workflow Automation',
      'Integration Solutions',
      'Performance Analytics'
    ],
    benefits: [
      'Improved Efficiency',
      'Better Decision Making',
      'Streamlined Processes',
      'Scalable Solutions'
    ],
    pricing: {
      basic: { name: 'Small Business', price: '₹100,000', features: ['Basic ERP', 'Standard Integration', 'Email Support'] },
      premium: { name: 'Medium Business', price: '₹300,000', features: ['Advanced ERP', 'Custom Integration', 'Phone Support'] },
      enterprise: { name: 'Enterprise', price: 'Custom Pricing', features: ['Full Enterprise Suite', 'Complete Integration', 'Dedicated Support'] }
    }
  },
  'system-security': {
    id: 'system-security',
    title: 'System Security',
    subtitle: 'Comprehensive Cybersecurity Solutions',
    hero: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80',
    description: 'Protect your business with advanced cybersecurity solutions including threat detection, prevention, and response.',
    features: [
      'Firewall Configuration',
      'Antivirus Solutions',
      'Intrusion Detection',
      'Security Audits',
      'Employee Training',
      'Incident Response'
    ],
    benefits: [
      'Data Protection',
      'Threat Prevention',
      'Compliance Assurance',
      'Peace of Mind'
    ],
    pricing: {
      basic: { name: 'Basic Security', price: '₹8,000/month', features: ['Basic Firewall', 'Antivirus', 'Monthly Reports'] },
      premium: { name: 'Advanced Security', price: '₹20,000/month', features: ['Advanced Firewall', 'Threat Detection', 'Security Training'] },
      enterprise: { name: 'Enterprise Security', price: 'Custom Pricing', features: ['Complete Security Suite', '24/7 Monitoring', 'Incident Response'] }
    }
  }
};

export default services;