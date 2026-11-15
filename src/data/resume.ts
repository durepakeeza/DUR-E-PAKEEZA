export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  technologies: string[];
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  id: 'frontend' | 'wordpress' | 'design' | 'tools' | 'soft';
  label: string;
  items: string[];
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const PROFILE = {
  name: 'DUR E PAKEEZA',
  monogram: 'DP',
  title: 'Frontend Developer | WordPress Developer',
  heroSummary:
    'Frontend and WordPress Developer with 3 years of experience designing, developing, and customizing responsive websites.',
  location: 'Sargodha, Pakistan',
  email: 'durepakeeza.web@gmail.com',
  linkedinLabel: 'linkedin.com/in/dure-pakeeza7',
  linkedinUrl: 'https://www.linkedin.com/in/dure-pakeeza7',
  behanceLabel: 'behance.net/pakeeza',
  behanceUrl: 'https://www.behance.net/pakeeza',
  languages: ['English', 'Urdu'],
};

export const ABOUT_CONTENT = {
  heading: 'Crafting Responsive, Purposeful Digital Interfaces',
  paragraphs: [
    'With 3 years of hands-on experience in Frontend Development and WordPress Development, I specialize in designing, building, and customizing responsive websites that balance clean visual hierarchy with dependable performance.',
    'My daily practice spans HTML5, CSS3, JavaScript, WordPress, Elementor, and Elementor Pro — shaping custom layouts, landing pages, and interactive components with disciplined attention to UI/UX clarity, cross-browser compatibility, and website performance optimization.',
  ],
  coreFocusAreas: [
    'Frontend Development',
    'WordPress Development',
    'Responsive Website Development',
    'Website Customization',
    'Elementor & Elementor Pro',
    'HTML5, CSS3 & JavaScript',
    'UI/UX Design',
    'Website Performance Optimization',
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'foxdev-studio',
    company: 'FoxDev Studio',
    role: 'WordPress Developer',
    period: 'Oct 2024 – Apr 2026',
    location: 'Remote',
    responsibilities: [
      'Developed and customized responsive WordPress websites using Elementor and Elementor Pro.',
      'Created modern website layouts with focus on usability, responsiveness and visual consistency.',
      'Customized pages, landing pages and website components according to project requirements.',
      'Optimized websites for desktop, tablet and mobile devices.',
    ],
  },
  {
    id: 'codehub',
    company: 'CodeHub',
    role: 'WordPress Developer',
    period: 'Aug 2022 – Apr 2024',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained WordPress websites based on project and client requirements.',
      'Customized website layouts and content using WordPress and Elementor.',
      'Implemented responsive designs across desktop, tablet and mobile devices.',
      'Worked on website customization, troubleshooting and frontend improvements.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ecommerce-website',
    index: '01',
    title: 'E-Commerce Website',
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro'],
    summary:
      'Developed a responsive e-commerce website using WordPress, WooCommerce and Elementor Pro.',
    details: [
      'Developed a responsive e-commerce website using WordPress, WooCommerce and Elementor Pro.',
      'Structured storefront product presentation, shopping navigation, and responsive layout flow across desktop, tablet, and mobile viewports.',
    ],
    image: '/images/ecommerce.webp',
    imageAlt: 'E-Commerce Website built with WordPress, WooCommerce, and Elementor Pro',
  },
  {
    id: 'personal-portfolio-website',
    index: '02',
    title: 'Personal Portfolio Website',
    technologies: ['WordPress', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Designed and developed a professional WordPress portfolio website using Elementor Pro.',
    details: [
      'Designed and developed a professional WordPress portfolio website using Elementor Pro.',
      'Built responsive web sections using HTML, CSS and JavaScript.',
      'Implemented responsive layouts for desktop, tablet and mobile devices using Visual Studio Code.',
    ],
    image: '/images/portfolio.webp',
    imageAlt: 'Personal Portfolio Website built with WordPress, Elementor Pro, HTML, CSS, and JavaScript',
  },
  {
    id: 'notes-taking-app',
    index: '03',
    title: 'Notes Taking App',
    technologies: ['Web Application', 'Clean UI'],
    summary:
      'Developed a simple notes-taking application with a clean and user-friendly interface.',
    details: [
      'Developed a simple notes-taking application with a clean and user-friendly interface.',
      'Focused on clear visual organization, intuitive note management, and distraction-free usability.',
    ],
    image: '/images/notes-app.webp',
    imageAlt: 'Notes Taking App featuring a clean and user-friendly interface',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Front-End Development',
      'Responsive Web Design',
    ],
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    items: [
      'WordPress Development',
      'Elementor',
      'Elementor Pro',
      'Website Development',
      'Website Customization',
      'Landing Page Development',
    ],
  },
  {
    id: 'design',
    label: 'Design & Optimization',
    items: [
      'UI/UX Design',
      'Basic SEO',
      'Website Performance Optimization',
      'Cross-Browser Compatibility',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    items: [
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Time Management',
      'Creativity',
      'Attention to Detail',
      'Critical Thinking',
      'Adaptability',
      'Quick Learning',
      'Project Management',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    index: '01',
    title: 'WordPress Website Development',
    description:
      'Complete WordPress websites structured around project goals, clean content hierarchy, and reliable maintainability.',
  },
  {
    index: '02',
    title: 'Elementor Website Development',
    description:
      'Custom-crafted pages and modular layouts built using Elementor and Elementor Pro with visual consistency.',
  },
  {
    index: '03',
    title: 'Frontend Web Development',
    description:
      'Clean, semantic front-end sections engineered with HTML5, CSS3, and JavaScript in Visual Studio Code.',
  },
  {
    index: '04',
    title: 'Responsive Web Design',
    description:
      'Adaptive layouts tested across desktop, tablet, and mobile viewports with cross-browser compatibility.',
  },
  {
    index: '05',
    title: 'Website Customization',
    description:
      'Tailored layout adjustments, component refinements, troubleshooting, and frontend improvements for existing sites.',
  },
  {
    index: '06',
    title: 'Landing Page Development',
    description:
      'Focused, conversion-ready landing pages designed for usability, clarity, and brand coherence.',
  },
  {
    index: '07',
    title: 'WooCommerce E-Commerce Development',
    description:
      'Responsive online storefronts built with WordPress, WooCommerce, and Elementor Pro.',
  },
  {
    index: '08',
    title: 'Website Performance Optimization',
    description:
      'Refining page structure, asset delivery, and basic SEO foundations for fast, dependable loading.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'bscs',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Sargodha, Pakistan',
    period: '2017 – 2021',
  },
  {
    id: 'ics',
    degree: 'ICS – Intermediate in Computer Science',
    institution: 'Punjab Group of Colleges, Pakistan',
    period: '2015 – 2017',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
