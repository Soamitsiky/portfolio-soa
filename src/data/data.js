export const profile = {
  name: "Soa Razakamboly",
  title: "Étudiante en BUT Réseaux & Systèmes",
  subtitle: "Cloud Computing · Administration Systèmes & Réseaux · DevOps",
  presentation: "Bienvenue sur mon portfolio, je partage ici mes projets, mes compétences clés et les outils que j'utilise au quotidien.",
  disponibilite: "Recherche Alternance - dès Septembre 2026",
  email: "mitsikyraza@gmail.com",
  //phone: "07 81 04 52 87",
  location: "France",
  linkedin: "https://www.linkedin.com/in/soa-razakamboly-7016b0327/",
  photo: "photosoa.jpg",
  softSkills: ["Rigoureuse", "Sociable", "Communication efficace", "Engagée", "Esprit d'équipe", "Forte de proposition", "Adaptabilité"],
  hobbies: ["🏊 Natation", "🎨 Dessin & Peinture", "🎸 Guitare"],
  objectif: "",
  languages: [
    { name: "Français", level: "Courant",},
    { name: "Anglais", level: "Courant",  },
    { name: "Malgache", level: "Natif", },
  ],
};

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "#38BDF8",
    items: ["Microsoft 365", "Defender", "Exchange", "Intune", "SharePoint", "Entra ID", "PureView", "Microsoft Azure", "Google Cloud"],
  },
  {
    category: "Automatisation & DevOps",
    icon: "⚙️",
    color: "#818CF8",
    items: ["Bash", "PowerShell", "Kubernetes", "Docker", "CI/CD GitLab", "Ansible"],
  },
  {
    category: "Réseaux & Télécom",
    icon: "🌐",
    color: "#34D399",
    items: ["Architecture réseau", "Services & protocoles", "Fibre optique", "Hyper-V", "pfSense", "Aruba"],
  },
  {
    category: "Systèmes & Administration",
    icon: "🖥️",
    color: "#FB923C",
    items: ["Linux", "Windows Server", "LDAP", "Active Directory", "Virtualisation"],
  },
  {
    category: "Langages",
    icon: "💻",
    color: "#F472B6",
    items: ["Python", "C", "C++"],
  },
   {
    category: "Méthodes de travail",
    color: "#34D399",
    icon: "⚙️",
    items: ["ITIL", "Agile", "Scrum"],
  },
];

export const experiences = [
  {
    id: "anywr-alternance",
    title: "Alternante Administratrice Systèmes",
    company: "Anywr Group",
    period: "Sept 2025 – Août 2026",
    type: "Alternance",
    color: "#38BDF8",
    summary: "Administration du cloud Microsoft 365, automatisation et infrastructure réseau.",
    missions: [
      {
        title: "Administration du cloud Microsoft 365",
        tasks: [
          "Gestion des utilisateurs ",
          "Sécurité ",
          "Gestion des boîtes mail ",
          "Administration des appareils ",
          "Gestion des accès ",
        ],
      },
      {
        title: "Automatisation & Scripting PowerShell",
        tasks: [
          "Scripts de détection et mise à jour des navigateurs et applications",
          "Sauvegarde automatisée des tickets Jira",
         
        ],
      },
      {
        title: "Projet de virtualisation",
        tasks: [
          "Architecture Active Directory sous Hyper-V",
          "Réseau virtuel avec intégration de PfSense",
          "Configuration d'un VPN d'entreprise",
        ],
      },
      {
        title: "Administration réseau",
        tasks: [
          "Maintenance de l'infrastructure réseau (switchs, câblage, fibre optique)",
          "Gestion des points d'accès Wi-Fi (réseau interne et invité)",
          "Support technique via Jira en anglais",
        ],
      },
    ],
    technologies: ["Microsoft Azure", "Microsoft 365 administration", "Exchange", "Defender", "Intune", "SharePoint", "PowerShell", "Jira", "Confluence", "Hyper-V", "Snipe-IT"],
  },
  {
    id: "anywr-stage",
    title: "Stagiaire Support Informatique",
    company: "Anywr Group",
    period: "Avr 2025 – Juil 2025",
    type: "Stage",
    color: "#818CF8",
    summary: "Support technique, gestion des incidents et maintenance réseau.",
    missions: [
      {
        title: "Support technique & gestion des incidents",
        tasks: [
          "Résolution de tickets (incidents et demandes hardware/software) via Jira",
          "Support aux utilisateurs en anglais, ~7 tickets/jour",
        ],
      },
      {
        title: "Documentation",
        tasks: [
          "Rédaction et mise à jour de documentations techniques (Confluence)",
          "Rédaction de procédures internes",
        ],
      },
      {
        title: "Gestion du parc informatique",
        tasks: [
          "Préparation et configuration des postes de travail",
          "Gestion des applications via Intune et Snipe-IT",
        ],
      },
    ],
    technologies: ["Intune", "Snipe-IT", "Jira", "Confluence", "AnyDesk"],
  },
  {
    id: "ichtus-stage",
    title: "Stagiaire Déploiement d'Application",
    company: "Ichtus IT",
    period: "Avr 2024 – Juin 2024",
    type: "Stage",
    color: "#34D399",
    summary: "Conteneurisation et déploiement de l'application Eatzee avec Docker.",
    missions: [
      {
        title: "Conteneurisation & Déploiement",
        tasks: [
          
          "Création des Dockerfiles et docker-compose.yml (backend, frontend, BDD)",
          
          "Structuration des environnements pour la reproductibilité des déploiements",
        ],
      },
    ],
    technologies: ["Docker", "Docker Compose", "VS Code","Git"],
  },
];

export const projects = [
  {
    id: "kodolike",
    title: "KodoLike",
    image: "/kodolike.jpg", 
    subtitle: "Startup Week IUT Lille",
    emoji: "🚀",
    color: "#38BDF8",
    status: "Terminé",
    demo: "https://kodo.startupweek.fr",
    summary: "Application web de type swipe appliquée à l'apprentissage du code.",
    description: "Projet réalisé en équipe durant la Startup Week de l'IUT de Lille Nord de France. KodoLike est une application web de type \"swipe\" appliquée à l'apprentissage du code, permettant aux étudiants de s'entraîner sur des snippets de code de manière ludique et interactive.",
    myRole: "J'ai assuré la liaison entre les développeurs front/back et l'infrastructure, en garantissant que chaque push sur la branche main déclenche automatiquement le déploiement en production.",
    methodology: "Agile Scrum — Sprint planning quotidien, revue de sprint, rétrospective, branches GitLab et merge requests.",
    devopsDetails: [
      "Mise en place de l'environnement de production sur un VPS Debian",
      "Dockerfiles multi-stage (React/Nginx front, Maven/JRE Alpine back)",
      "docker-compose.yml orchestrant 3 services (front, back, BDD)",
      "Reverse proxy Nginx pour deux applications sur la même IP",
      "HTTPS avec certificat SSL Let's Encrypt",
      "CI/CD GitLab complète : test, build Docker, push registry, deploy SSH",
      "Authentification OAuth GitLab et GitHub côté infrastructure",
    ],
    stack: {
      "Front-end": ["React 19", "TypeScript", "Vite", "TailwindCSS", "Shadcn/ui", "Framer Motion"],
      "Back-end": ["Spring Boot 4", "Java 21", "Spring Security", "JWT", "JPA/Hibernate"],
      "Base de données": ["PostgreSQL 16"],
      "Infrastructure": ["Docker", "Docker Compose", "Nginx", "GitLab CI/CD", "VPS OVH Debian", "Let's Encrypt"],
    },
  },
  {
    id: "vps-portfolio",
    title: "VPS Hébergeur de Portfolio",
    subtitle: "Projet personnel",
    emoji: "🖥️",
    color: "#818CF8",
    status: "En cours",
    demo: null,
    summary: "Création d'un VPS personnel pour héberger son portfolio.",
    description: "Projet personnel visant à créer et configurer un VPS dédié à l'hébergement de portfolio. Configuration de l'infrastructure, sécurisation et automatisation du déploiement.",
    myRole: "Conception, configuration et administration complète du serveur.",
    devopsDetails: [],
    stack: {},
  },
  {
    id: "infra-anywr",
    title: "Infrastructure Virtualisée",
    subtitle: "Anywr Group — pfSense & Active Directory",
    emoji: "🛡️",
    color: "#34D399",
    status: "Terminé",
    demo: null,
    summary: "Architecture réseau virtualisée complète sous Hyper-V.",
    description: "Mise en place d'une infrastructure réseau virtualisée complète sous Hyper-V incluant un pare-feu pfSense pour le routage et la sécurité réseau, couplé à un annuaire Active Directory pour la gestion des identités et des accès.",
    myRole: "Conception et déploiement de l'architecture complète.",
    devopsDetails: [
      "Conception de l'architecture Active Directory sous Hyper-V",
      "Création d'un réseau virtuel avec intégration de PfSense",
      "Configuration d'un VPN d'entreprise",
    ],
    stack: {
      "Virtualisation": ["Hyper-V"],
      "Réseau & Sécurité": ["pfSense", "VPN"],
      "Administration": ["Active Directory", "LDAP"],
    },
  },
];

export const education = [
  {
    degree: "BUT 3 Réseaux & Systèmes",
    school: "IUT A Villeneuve-d'Ascq",
    year: "2025 – 2026",
    icon: "🎓",
    color: "#38BDF8",
  },
  {
    degree: "DEUST Infrastructures Numériques",
    school: "Université de Lille",
    year: "2023 – 2025",
    note: "Mention Bien",
    icon: "🏅",
    color: "#818CF8",
  },
  {
    degree: "Baccalauréat Général",
    school: "Madagascar",
    year: "2023",
    note: "Spécialités : NSI & PC",
    icon: "📜",
    color: "#34D399",
  },
];

export const recommendations = [
  {
    name: "Zied Omrani",
    role: "Administrateur Cloud",
    company: "Anywr Group",
    date: "06/03/2026",
    email: "zied.omrani@anywr-group.com",
    text: "Soa s'est distinguée par son sérieux, sa rigueur et sa forte capacité d'apprentissage. Elle a démontré un excellent esprit d'analyse, une autonomie progressive dans la résolution de problèmes et une bonne capacité de travail en équipe. Son implication et sa curiosité intellectuelle lui ont permis de progresser rapidement.",
    initials: "ZO",
    color: "#38BDF8",
  },
  {
    name: "Francisco De La Peña",
    role: "Maître de conférences",
    company: "Université de Lille",
    date: "11/02/2025",
    email: "francisco.de-la-penamanchon@univ-lille.fr",
    text: "Soa s'est distinguée par son sérieux, son assiduité et son travail acharné. Elle a obtenu la meilleure note de sa promotion en Linux et BASH, et s'est classée deuxième en Python dans le 82e percentile. Sa capacité à assimiler rapidement des concepts complexes témoigne de son potentiel.",
    initials: "FP",
    color: "#818CF8",
  },
  {
    name: "Gaétan Tirmont",
    role: "Enseignant en Réseaux & Administrateur Systèmes",
    company: "Université de Lille",
    date: "14/02/2025",
    email: "gaetan.tirmont@univ-lille.fr",
    text: "Soa a fait preuve d'une grande rigueur intellectuelle et d'un excellent sens du travail en équipe. Elle s'est distinguée par ses capacités en réseaux informatiques, sa curiosité, sa persévérance et son esprit d'initiative.",
    initials: "GT",
    color: "#34D399",
  },
  {
    name: "Stéphane Bailleux",
    role: "Responsable de formation DEUST",
    company: "Université de Lille",
    date: "02/06/2025",
    email: "",
    text: "Au cours de sa formation en DEUST, Soa a toujours fait preuve d'assiduité, de ponctualité, et d'investissement. Compte tenu de sa motivation à poursuivre une formation dans le domaine des réseaux de communication, je suis convaincu de sa capacité à poursuivre des études supérieures.",
    initials: "SB",
    color: "#FB923C",
  },
];

export const alternance = {
  recherche: "Alternance en Systèmes & Réseaux, Cloud Computing ou Cybersécurité",
  disponibilite: "Septembre 2026",
  rythme: "À confirmer",
  mobilite: "France",
  domaines: ["Cloud Computing", "Administration Systèmes & Réseaux", "Cybersécurité", "Télécommunication", "DevOps"],
  videoMotivation: "https://youtu.be/-W6us3iee7E?si=h2FvmYlc-jvXStpR",
  motivation: "Passionnée par les infrastructures cloud et la cybersécurité, je souhaite approfondir mes compétences dans un environnement professionnel stimulant. Mon expérience chez Anywr Group m'a permis de développer une solide maîtrise des outils Microsoft 365, de l'automatisation PowerShell et de l'administration réseau. Je suis prête à m'investir pleinement dans une nouvelle alternance pour continuer à progresser.",
};
