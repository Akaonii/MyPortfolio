export const langs = ["fr", "en"] as const;
export type Lang = (typeof langs)[number];

export const isLang = (value: string): value is Lang =>
  (langs as readonly string[]).includes(value);

export const siteUrl = "https://myportfolio-mbrucale.vercel.app";

export const links = {
  email: "maxime.brucale@edu.ece.fr",
  linkedin: "https://www.linkedin.com/in/maxime-brucale-b77041294/",
  github: "https://github.com/Akaonii",
  repo: "https://github.com/Akaonii/MyPortfolio",
  rootme: "https://www.root-me.org/Zeruel734",
  letsdefend: "https://app.letsdefend.io/user/zeruel734",
  formspree: "https://formspree.io/f/xgoyjrwr",
  bureau: "https://ece-webtech-102.vercel.app",
};

export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  points: string[];
  tags?: string[];
};

export type Figure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  active: boolean;
  context: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  image: Figure;
  live?: { href: string; label: string };
  repo?: string;
  video?: string;
  codeNote?: string;
  problem: string;
  approach: string;
  highlights: { title: string; text: string }[];
  gallery: Figure[];
};

export type ArchiveItem = {
  name: string;
  description: string;
  stack: string;
  image: string;
  repo: string;
  video?: string;
};

export type Content = {
  meta: { title: string; description: string; locale: string };
  nav: {
    label: string;
    skip: string;
    journey: string;
    projects: string;
    skills: string;
    contact: string;
    cv: string;
    menuOpen: string;
    menuClose: string;
    switchLang: string;
  };
  cvFile: string;
  hero: {
    eyebrow: string;
    line1: string;
    line2Start: string;
    line2Accent: string;
    intro: string;
    statusLabel: string;
    status: string;
    statusDetail: string;
    targetsLabel: string;
    targets: string;
    ctaProjects: string;
    ctaCv: string;
    hudLabel: string;
    hudHint: string;
    hudHintTouch: string;
    hudDone: string;
    closedLabel: string;
  };
  proof: { value: string; label: string }[];
  journey: {
    title: string;
    intro: string;
    experienceLabel: string;
    experience: TimelineItem[];
    educationLabel: string;
    education: TimelineItem[];
    activitiesLabel: string;
    activities: TimelineItem[];
    certificationsLabel: string;
    inProgress: string;
    certifications: { title: string; org: string; href?: string; inProgress?: boolean }[];
    languagesLabel: string;
    languages: { name: string; level: string }[];
  };
  projects: {
    title: string;
    intro: string;
    list: Project[];
    readCase: string;
    viewCode: string;
    viewDemo: string;
    closeVideo: string;
    backToProjects: string;
    problemLabel: string;
    approachLabel: string;
    highlightsLabel: string;
    galleryLabel: string;
    demoLabel: string;
    stackLabel: string;
    nextLabel: string;
    ctaTitle: string;
    ctaButton: string;
    archiveLabel: string;
    archiveColumns: { name: string; description: string; stack: string };
    archive: ArchiveItem[];
  };
  demo: {
    title: string;
    hint: string;
    prompt: string;
    browser: string;
    columns: { time: string; request: string; detected: string };
    response: string;
    empty: string;
  };
  skills: {
    title: string;
    groups: { label: string; items: string[] }[];
    practiceLabel: string;
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      send: string;
      note: string;
    };
  };
  footer: { code: string; curious: string; cv: string };
  decoy: {
    metaTitle: string;
    label: string;
    title: string;
    text: string;
    rows: { time: string; path: string; agent: string; tool: string };
    unknownTool: string;
    browserTool: string;
    back: string;
    seeProject: string;
  };
};

const size = {
  honeylink: { src: "/projects/honeylink.png", width: 1302, height: 747 },
  honeylinkHome: { src: "/projects/honeylink-intrusions.png", width: 1596, height: 951 },
  honeylinkTests: { src: "/projects/honeylink-tests.png", width: 1600, height: 565 },
  honeylinkIstio: { src: "/projects/honeylink-istio.png", width: 1303, height: 352 },
  bureauIntro: { src: "/projects/bureau-des-failles-intro.png", width: 1531, height: 748 },
  bureauDesk: { src: "/projects/bureau-des-failles.png", width: 1485, height: 767 },
  bureauQuest: { src: "/projects/bureau-des-failles-quest.png", width: 950, height: 632 },
  cvefix: { src: "/projects/cveFix.png", width: 1900, height: 1372 },
  iptool: { src: "/projects/IpTool.png", width: 2314, height: 1218 },
};

const fr: Content = {
  meta: {
    title: "Maxime Brucale · Élève ingénieur en cybersécurité",
    description:
      "Élève ingénieur en cybersécurité à l'ECE Paris : SOC chez Selencia, modélisation des menaces chez HSBC, CompTIA Security+ et SC-200 en cours. Stage recherché du 19 avril à fin août 2027.",
    locale: "fr_FR",
  },
  nav: {
    label: "Navigation principale",
    skip: "Aller au contenu",
    journey: "Parcours",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    cv: "CV",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    switchLang: "Read this site in English",
  },
  cvFile: "/Maxime_Brucale_CV_FR.pdf",
  hero: {
    eyebrow: "Élève ingénieur en cybersécurité · ECE Paris",
    line1: "Je traite les alertes.",
    line2Start: "Je code ",
    line2Accent: "les outils.",
    intro:
      "En 4e année à l'ECE Paris, majeure cybersécurité. Quatre stages chez Selencia et HSBC, du SOC à la modélisation des menaces, et des outils de sécurité déployés et testés.",
    statusLabel: "Stage recherché",
    status: "Du 19 avril à fin août 2027",
    statusDetail: "4 à 5 mois · Paris ou Île-de-France",
    targetsLabel: "Domaines visés",
    targets: "Sécurité cloud, GRC, Blue Team",
    ctaProjects: "Voir les projets",
    ctaCv: "Télécharger le CV",
    hudLabel: "Alertes qualifiées",
    hudHint: "Passez la souris sur une alerte orange",
    hudHintTouch: "Touchez une alerte orange",
    hudDone: "Belle détection. On en parle ?",
    closedLabel: "qualifiée",
  },
  proof: [
    { value: "4", label: "stages en cybersécurité, chez HSBC et Selencia" },
    { value: "SOC", label: "Microsoft Sentinel, KQL et Cortex en conditions réelles" },
    { value: "2", label: "certifications en cours : CompTIA Security+ et Microsoft SC-200" },
    { value: "885", label: "au TOEIC, sur 990" },
  ],
  journey: {
    title: "Parcours",
    intro: "Du centre opérationnel de sécurité à l'analyse des risques en banque.",
    experienceLabel: "Stages",
    experience: [
      {
        date: "Janv. – févr. 2026",
        title: "Assistant analyste SOC",
        org: "Selencia, Paris",
        points: [
          "Surveillance en temps réel sur le SIEM Microsoft Sentinel avec des requêtes KQL : analyse et qualification des alertes.",
          "Traitement d'incidents de sécurité avec des solutions EDR/XDR (Cortex).",
          "Conception et développement de CVE Fix Redirector.",
        ],
        tags: ["Microsoft Sentinel", "KQL", "Cortex", "Python"],
      },
      {
        date: "Janv. – févr. 2025",
        title: "Assistant analyste, modélisation des menaces cyber",
        org: "HSBC Continental Europe, Paris",
        points: [
          "Identification des actifs critiques à protéger dans le système d'information.",
          "Analyse des vulnérabilités potentielles.",
          "Conception de stratégies de réduction des risques identifiés.",
        ],
        tags: ["Modélisation des menaces", "Gestion des risques"],
      },
      {
        date: "Juin – juil. 2024",
        title: "Assistant analyste SOC",
        org: "Selencia, Paris",
        points: [
          "Découverte de la surveillance réseau, de la détection des menaces et de la réponse aux incidents au sein du SOC.",
        ],
      },
      {
        date: "Juil. 2023",
        title: "Stage découverte, risque et cybersécurité",
        org: "HSBC Continental Europe, Paris",
        points: [
          "Protection des données de la banque et de ses clients, usage de l'IA et lutte contre la cybercriminalité.",
        ],
      },
    ],
    educationLabel: "Formation",
    education: [
      {
        date: "2023 – 2028",
        title: "Cycle ingénieur, majeure cybersécurité",
        org: "ECE Paris",
        points: ["Actuellement en 4e année."],
      },
      {
        date: "Août – déc. 2025",
        title: "Semestre d'échange, Software and Computer Engineering",
        org: "Ajou University, Corée du Sud",
        points: [],
      },
    ],
    activitiesLabel: "Engagements",
    activities: [
      {
        date: "Depuis mai 2026",
        title: "Responsable formation et projet, volet quantique",
        org: "EQCE, ECE",
        points: [
          "Conception et animation de formations sur les fondamentaux du quantique, pilotage de projets étudiants.",
        ],
      },
      {
        date: "2024 – 2025",
        title: "Vice-président",
        org: "Bureau des Sports, ECE Lyon",
        points: [
          "Événements sportifs inter-écoles, encadrement de bénévoles, budget et partenariats.",
        ],
      },
    ],
    certificationsLabel: "Certifications",
    inProgress: "En cours",
    certifications: [
      { title: "CompTIA Security+", org: "CompTIA", inProgress: true },
      { title: "SC-200 : Microsoft Security Operations Analyst", org: "Microsoft", inProgress: true },
      {
        title: "CISO Leadership: Managing a Cybersecurity Program",
        org: "LinkedIn Learning · janv. 2025",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:edc7e80a-72e1-4b08-9b48-ca76fc9cfe3b",
      },
      { title: "Cybersecurity Awareness: Cloud Security", org: "LinkedIn Learning" },
      {
        title: "Data Analysis",
        org: "DataScientest · déc. 2024",
        href: "/certs/datascientest-data-analysis.pdf",
      },
      {
        title: "Programming for Data Science",
        org: "DataScientest · nov. 2024",
        href: "/certs/datascientest-programming.pdf",
      },
    ],
    languagesLabel: "Langues",
    languages: [
      { name: "Français", level: "langue maternelle" },
      { name: "Anglais", level: "avancé, TOEIC 885/990" },
      { name: "Espagnol", level: "intermédiaire" },
      { name: "Italien", level: "notions" },
    ],
  },
  projects: {
    title: "Projets",
    intro: "Le problème, la réponse, et la preuve que ça tourne.",
    readCase: "Lire l'étude de cas",
    viewCode: "Voir le code",
    viewDemo: "Voir la démo",
    closeVideo: "Fermer la vidéo",
    backToProjects: "Tous les projets",
    problemLabel: "Le problème",
    approachLabel: "La réponse",
    highlightsLabel: "Ce qui fait la différence",
    galleryLabel: "En images",
    demoLabel: "La démo",
    stackLabel: "Stack",
    nextLabel: "Projet suivant",
    ctaTitle: "Ce projet vous parle ?",
    ctaButton: "Parlons-en",
    list: [
      {
        slug: "honeylink",
        name: "HoneyLink",
        status: "Déployé · code public fin 2026",
        active: true,
        context: "Projet DevOps d'équipe, ECE · 2026",
        headline: "Un faux lien suffit à démasquer un intrus.",
        summary:
          "HoneyLink sème des URL leurres que personne n'a de raison d'ouvrir. Dès qu'un intrus tombe dessus, sa visite est enregistrée, son outil identifié (curl, nmap, sqlmap…) et un pic d'intrusions déclenche une alerte Grafana. Lui ne voit qu'un 404 banal.",
        metrics: [
          { value: "61", label: "tests automatisés" },
          { value: "99,6 %", label: "de couverture de code" },
          { value: "3", label: "alertes Grafana déclenchées pour de vrai" },
          { value: "mTLS", label: "strict entre tous les pods" },
        ],
        tags: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes", "Istio", "Helm", "GitHub Actions", "Trivy", "Ansible", "Prometheus", "Grafana"],
        image: {
          ...size.honeylink,
          alt: "Tableau de bord Grafana de HoneyLink : pods en ligne, intrusions par minute et par outil, trafic par version.",
        },
        codeNote: "Code public fin 2026",
        problem:
          "Un attaquant déjà entré dans un réseau ressemble à un utilisateur normal, et les alertes classiques noient les analystes sous les faux positifs. Un honeytoken inverse la logique : personne de légitime n'a de raison d'ouvrir ce lien, donc chaque visite est un signal fiable.",
        approach:
          "Une API FastAPI et Redis crée des leurres avec une durée de vie. La route piège enregistre l'heure, l'IP et le User-Agent, puis répond exactement comme une page inexistante. Le tout est livré par une chaîne DevOps complète, du commit jusqu'à Kubernetes.",
        highlights: [
          {
            title: "Un piège qui ne se trahit pas",
            text: "La route /t/{id} renvoie le même 404 qu'une route inconnue : rien ne prévient l'intrus. Les User-Agent, contrôlés par l'attaquant, sont échappés et couverts par une CSP, pour que la page d'analyse ne devienne pas elle-même une faille XSS.",
          },
          {
            title: "La sécurité dès la CI",
            text: "Chaque push passe par ruff, pytest avec un vrai Redis, puis un scan Trivy. La CI échoue sous 80 % de couverture ou sur toute vulnérabilité critique corrigeable. Seule une image testée et scannée atteint Docker Hub, puis Render.",
          },
          {
            title: "Des mises en production maîtrisées",
            text: "Istio bascule le trafic de la v1 à la v2 par paliers (10 %, 50 %, 100 %), avec mTLS strict entre les pods. Un chart Helm installe l'ensemble en une commande et permet le retour arrière.",
          },
          {
            title: "Une supervision qui sonne vraiment",
            text: "Prometheus et Grafana suivent les pods, Redis et les intrusions. Trois alertes évaluées toutes les 10 secondes : pic d'intrusions, Redis hors service, application hors service. Toutes ont été déclenchées en conditions réelles.",
          },
          {
            title: "Une infrastructure reproductible",
            text: "Vagrant et Ansible reconstruisent la VM de zéro, et des manifestes Kubernetes numérotés déploient chaque brique dans le bon ordre.",
          },
        ],
        gallery: [
          {
            ...size.honeylinkHome,
            alt: "Page d'accueil de HoneyLink avec les leurres actifs et les dernières intrusions.",
            caption: "Leurres et intrusions, avec l'outil détecté. Un User-Agent <script> reste du simple texte.",
          },
          {
            ...size.honeylinkTests,
            alt: "Terminal : 61 tests pytest réussis et 99,6 % de couverture.",
            caption: "61 tests verts et 99,6 % de couverture. La CI échoue sous 80 %.",
          },
          {
            ...size.honeylinkIstio,
            alt: "Graphe Kiali : le trafic passe par la passerelle Istio puis se répartit entre les versions v1 et v2.",
            caption: "Istio répartit le trafic entre la v1 et la v2, vu dans Kiali.",
          },
        ],
      },
      {
        slug: "bureau-des-failles",
        name: "Le Bureau des Failles",
        status: "En ligne · code public fin 2026",
        active: true,
        context: "Projet Web d'équipe, ECE · 2026",
        headline: "Apprendre à sécuriser un site en le piratant d'abord.",
        summary:
          "Un jeu d'enquête façon Root-Me sur un bureau Windows 98 : des clients confient leur site, on trouve la faille, on l'exploite pour la prouver, puis on la répare. Tout tourne dans le navigateur, sur une vraie base PostgreSQL, sans jamais toucher au vrai web.",
        metrics: [
          { value: "6", label: "affaires jouables" },
          { value: "6", label: "phases, du briefing au patch" },
          { value: "590+", label: "tests automatisés" },
          { value: "WASM", label: "PostgreSQL dans le navigateur" },
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "PGlite", "Web Workers", "Vitest"],
        image: {
          ...size.bureauIntro,
          alt: "Intro du Bureau des Failles : un bureau de détective en 3D pixelisée, avec un vieil ordinateur, une lampe et un tableau d'enquête.",
        },
        live: { href: links.bureau, label: "Jouer en ligne" },
        codeNote: "Code public fin 2026",
        problem:
          "La sécurité web s'apprend mal dans un cours : lire qu'une injection SQL existe ne donne pas le réflexe de la voir. Et s'entraîner sur de vrais sites est illégal. Il faut un terrain où l'on peut tout casser, avec une histoire qui donne envie de continuer.",
        approach:
          "Chaque affaire est une enquête en six phases : briefing, reconnaissance, exploit, constat, patch, débrief. Les sites sont faux, mais leur code s'exécute vraiment, sur de vraies requêtes SQL et de vraies règles d'accès.",
        highlights: [
          {
            title: "PostgreSQL dans le navigateur",
            text: "PGlite fait tourner une vraie base en WebAssembly : vraies requêtes, vrais rôles, vraies politiques RLS. Une copie neuve, repartie du schéma d'origine, sert à vérifier chaque correctif.",
          },
          {
            title: "Un bac à sable qu'on peut tuer",
            text: "Le code du site tourne dans un Web Worker court et jetable : s'il boucle, il est tué sans figer le jeu. La base vit dans un second worker, relié par un MessageChannel.",
          },
          {
            title: "Des failles réelles, des correctifs vérifiés",
            text: "Mots de passe, injection SQL, contrôle d'accès, XSS : le joueur exploite la faille, puis son correctif est testé contre l'attaque. Une requête paramétrée doit vraiment arrêter l'injection pour que l'affaire soit classée.",
          },
          {
            title: "Une authentification complète",
            text: "Supabase avec OAuth GitHub et e-mail, confirmation, réinitialisation, ancien mot de passe redemandé avant tout changement, et mode invité pour jouer sans compte.",
          },
          {
            title: "Des données cloisonnées",
            text: "La Row Level Security limite chaque joueur à sa propre progression. Le classement public passe par une fonction dédiée qui n'expose que le pseudo et le score.",
          },
        ],
        gallery: [
          {
            ...size.bureauDesk,
            alt: "Bureau Windows 98 avec la fenêtre Affaires, le bureau du détective en pixel art et l'armoire à dossiers.",
            caption: "Le bureau BrècheOS et l'armoire à dossiers : chaque client arrive avec son affaire.",
          },
          {
            ...size.bureauQuest,
            alt: "Dialogue avec Madame Brèche au début d'une affaire, à côté de l'ordinateur encore éteint.",
            caption: "L'enquête commence par le client, avant d'allumer le PC.",
          },
        ],
      },
      {
        slug: "cve-fix",
        name: "CVE Fix Redirector",
        status: "Terminé · 2026",
        active: false,
        context: "Conçu pendant mon stage SOC chez Selencia",
        headline: "D'un numéro de CVE au correctif officiel, sans détour.",
        summary:
          "Face à une CVE, le temps se perd à chercher le bon lien. Cette application interroge directement l'API du NIST, affiche la description, le score CVSS et la gravité, puis range les liens utiles : patch, avis de l'éditeur, avis tiers.",
        metrics: [
          { value: "NVD", label: "API officielle du NIST" },
          { value: "CVSS", label: "score et gravité normalisée" },
          { value: "3", label: "types de liens triés : patch, éditeur, tiers" },
        ],
        tags: ["Python", "FastAPI", "JavaScript", "Tailwind", "API NVD"],
        image: {
          ...size.cvefix,
          alt: "CVE Fix Redirector : recherche de la CVE-2026-23497, description, score CVSS, liens vers le patch et sources.",
        },
        repo: "https://github.com/Akaonii/CVE-Fix",
        video: "/videos/cvefix-demo.mp4",
        problem:
          "Au SOC, une CVE arrive souvent sous la forme d'un simple identifiant. Retrouver le correctif officiel oblige à passer par plusieurs sites, alors que la vraie question est immédiate : est-ce grave, et comment corriger ?",
        approach:
          "Un backend FastAPI interroge l'API NVD et normalise la réponse. Une interface en HTML, JavaScript et Tailwind donne tout sur un seul écran, avec l'historique et l'autocomplétion.",
        highlights: [
          {
            title: "La source officielle",
            text: "Les données viennent directement de la National Vulnerability Database du NIST, pas d'un agrégateur.",
          },
          {
            title: "Une gravité lisible",
            text: "Le score CVSS et une gravité normalisée de LOW à CRITICAL, compréhensibles d'un coup d'œil.",
          },
          {
            title: "Les bons liens d'abord",
            text: "Les références sont triées automatiquement : Patch, Vendor Advisory, Third Party Advisory.",
          },
          {
            title: "Pensé pour un usage répété",
            text: "L'historique et l'autocomplétion rendent immédiat le retour sur une CVE déjà consultée.",
          },
        ],
        gallery: [],
      },
      {
        slug: "ip-tool",
        name: "Ip-Tool",
        status: "Terminé · 2026",
        active: false,
        context: "Outil en ligne de commande · open source, licence MIT",
        headline: "Une IP suspecte, trois sources, un verdict.",
        summary:
          "Analyser une IP oblige à jongler entre les onglets. Ip-Tool réunit tout dans le terminal : réputation sur VirusTotal et AbuseIPDB, géolocalisation et fournisseur via ip-api, liste noire locale et extraction d'adresses depuis un fichier HTML.",
        metrics: [
          { value: "3", label: "API interrogées" },
          { value: "2", label: "scores de réputation croisés" },
          { value: "MIT", label: "code ouvert" },
        ],
        tags: ["Python", "API VirusTotal", "API AbuseIPDB", "ip-api", "OSINT"],
        image: {
          ...size.iptool,
          alt: "Ip-Tool dans un terminal : menu principal et ajout d'une adresse IP à la liste noire.",
        },
        repo: "https://github.com/Akaonii/Ip-Tool",
        video: "/videos/iptool-demo.mp4",
        problem:
          "Devant une connexion douteuse, un analyste vérifie la réputation de l'IP, sa localisation et son fournisseur, puis note sa décision quelque part. Ces allers-retours coûtent du temps à chaque alerte.",
        approach:
          "Un outil Python à menu interactif valide l'adresse, interroge les API et affiche le résultat aussitôt. Les clés restent hors du code, dans un fichier .env.",
        highlights: [
          {
            title: "Une réputation croisée",
            text: "Le nombre de détections malveillantes sur VirusTotal et le score de suspicion d'AbuseIPDB, pour ne pas dépendre d'une seule source.",
          },
          {
            title: "Le contexte en plus",
            text: "Pays, ville, fournisseur et coordonnées GPS via ip-api.",
          },
          {
            title: "Une liste noire propre",
            text: "Ajout à blacklist.txt avec détection automatique des doublons.",
          },
          {
            title: "Du fichier à la liste",
            text: "Extraction de toutes les IPv4 valides d'un fichier HTML vers une liste à traiter.",
          },
        ],
        gallery: [],
      },
    ],
    archiveLabel: "Autres projets",
    archiveColumns: { name: "Projet", description: "En bref", stack: "Stack" },
    archive: [
      {
        name: "OmnesBNB",
        description:
          "Plateforme de location full stack développée de zéro, avec authentification et surveillance défensive.",
        stack: "PHP, MySQL",
        image: "/projects/omnesbnb.jpg",
        repo: "https://github.com/Akaonii/OmnesBNB-Showcase",
      },
      {
        name: "Drawbot",
        description: "Robot autonome qui transforme un dessin numérique en tracé sur papier.",
        stack: "C++, Arduino",
        image: "/projects/Drawbot.jpeg",
        repo: "https://github.com/Akaonii/Drawbot---Showcase",
        video: "/videos/drawbot-demo.mp4",
      },
      {
        name: "ECECooked",
        description: "Jeu en C sur le thème des Jeux olympiques.",
        stack: "C, Allegro",
        image: "/projects/EceCooked.png",
        repo: "https://github.com/Akaonii/ECECooked---Showcase",
        video: "/videos/ececooked-demo.mp4",
      },
    ],
  },
  demo: {
    title: "Essayez le piège",
    hint: "Simulation dans votre navigateur : rien n'est envoyé.",
    prompt: "Visiter le leurre avec",
    browser: "navigateur",
    columns: { time: "Heure", request: "Requête", detected: "Outil détecté" },
    response: "404",
    empty: "Choisissez un outil pour déclencher le leurre.",
  },
  skills: {
    title: "Compétences",
    groups: [
      {
        label: "Défense",
        items: [
          "Microsoft Sentinel",
          "KQL",
          "EDR/XDR (Cortex)",
          "gestion des incidents",
          "analyse de vulnérabilités",
        ],
      },
      { label: "Risque", items: ["Modélisation des menaces", "gestion des risques"] },
      {
        label: "Cloud et DevOps",
        items: ["Docker", "Kubernetes", "Helm", "Istio", "GitHub Actions", "Trivy", "Ansible", "Prometheus", "Grafana"],
      },
      {
        label: "Développement",
        items: ["Python", "FastAPI", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "C/C++", "Java", "PHP"],
      },
      { label: "Environnements", items: ["Kali Linux", "Exegol", "Git", "Bash", "PowerShell"] },
    ],
    practiceLabel: "Je m'entraîne sur",
  },
  contact: {
    title: "Parlons-en.",
    intro:
      "Je cherche un stage en cybersécurité du 19 avril à fin août 2027, à Paris ou en Île-de-France. Sécurité cloud, gouvernance et risques, sécurité opérationnelle : écrivez-moi.",
    emailLabel: "E-mail",
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@entreprise.com",
      messagePlaceholder: "Bonjour Maxime,",
      send: "Envoyer",
      note: "Votre message transite par Formspree, qui me le transmet par e-mail.",
    },
  },
  footer: {
    code: "Code du site",
    curious: "Curieux ? Lisez robots.txt.",
    cv: "CV",
  },
  decoy: {
    metaTitle: "Administration",
    label: "Leurre déclenché",
    title: "Il n'y a pas d'admin ici.",
    text: "Cette page est un leurre, comme ceux de HoneyLink. Sur un vrai déploiement, votre visite serait enregistrée comme une intrusion. Ici, rien n'est envoyé ni stocké : tout reste dans votre navigateur.",
    rows: { time: "Heure", path: "Chemin", agent: "User-Agent", tool: "Outil détecté" },
    unknownTool: "inconnu",
    browserTool: "navigateur",
    back: "Retour au site",
    seeProject: "Voir HoneyLink",
  },
};

const en: Content = {
  meta: {
    title: "Maxime Brucale · Cybersecurity engineering student",
    description:
      "Cybersecurity engineering student at ECE Paris: SOC work at Selencia, threat modeling at HSBC, CompTIA Security+ and SC-200 in progress. Looking for an internship from April 19 to the end of August 2027.",
    locale: "en_US",
  },
  nav: {
    label: "Main navigation",
    skip: "Skip to content",
    journey: "Journey",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    cv: "Resume",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLang: "Lire ce site en français",
  },
  cvFile: "/Maxime_Brucale_CV_EN.pdf",
  hero: {
    eyebrow: "Cybersecurity engineering student · ECE Paris",
    line1: "I triage the alerts.",
    line2Start: "I build ",
    line2Accent: "the tools.",
    intro:
      "Fourth year at ECE Paris, cybersecurity major. Four internships at Selencia and HSBC, from the SOC to threat modeling, plus security tools that are tested and deployed.",
    statusLabel: "Looking for an internship",
    status: "April 19 to end of August 2027",
    statusDetail: "4 to 5 months · Paris area",
    targetsLabel: "Target fields",
    targets: "Cloud security, GRC, Blue Team",
    ctaProjects: "See the projects",
    ctaCv: "Download my resume",
    hudLabel: "Alerts triaged",
    hudHint: "Hover over an orange alert",
    hudHintTouch: "Tap an orange alert",
    hudDone: "Nice detection. Shall we talk?",
    closedLabel: "triaged",
  },
  proof: [
    { value: "4", label: "cybersecurity internships, at HSBC and Selencia" },
    { value: "SOC", label: "Microsoft Sentinel, KQL and Cortex on real operations" },
    { value: "2", label: "certifications in progress: CompTIA Security+ and Microsoft SC-200" },
    { value: "885", label: "on the TOEIC, out of 990" },
  ],
  journey: {
    title: "Journey",
    intro: "From the security operations center to risk analysis in banking.",
    experienceLabel: "Internships",
    experience: [
      {
        date: "Jan – Feb 2026",
        title: "SOC Analyst Intern",
        org: "Selencia, Paris",
        points: [
          "Real-time monitoring on the Microsoft Sentinel SIEM with KQL queries: alert analysis and triage.",
          "Security incident handling with EDR/XDR solutions (Cortex).",
          "Designed and built CVE Fix Redirector.",
        ],
        tags: ["Microsoft Sentinel", "KQL", "Cortex", "Python"],
      },
      {
        date: "Jan – Feb 2025",
        title: "Cyber Threat Modeling Analyst Intern",
        org: "HSBC Continental Europe, Paris",
        points: [
          "Identified the critical assets to protect within the information system.",
          "Analysed potential vulnerabilities.",
          "Designed strategies to reduce the identified risks.",
        ],
        tags: ["Threat modeling", "Risk management"],
      },
      {
        date: "Jun – Jul 2024",
        title: "SOC Analyst Intern",
        org: "Selencia, Paris",
        points: [
          "Introduction to network monitoring, threat detection and incident response within the SOC.",
        ],
      },
      {
        date: "Jul 2023",
        title: "Risk and Cybersecurity Discovery Intern",
        org: "HSBC Continental Europe, Paris",
        points: [
          "Introduction to bank and customer data protection, the use of AI and the fight against cybercrime.",
        ],
      },
    ],
    educationLabel: "Education",
    education: [
      {
        date: "2023 – 2028",
        title: "Master's-level engineering degree, cybersecurity major",
        org: "ECE Paris",
        points: ["Currently in my fourth year."],
      },
      {
        date: "Aug – Dec 2025",
        title: "Exchange semester, Software and Computer Engineering",
        org: "Ajou University, South Korea",
        points: [],
      },
    ],
    activitiesLabel: "Activities",
    activities: [
      {
        date: "Since May 2026",
        title: "Training and project lead, quantum computing track",
        org: "EQCE, ECE",
        points: [
          "Designing and running training sessions on quantum fundamentals, leading student projects.",
        ],
      },
      {
        date: "2024 – 2025",
        title: "Vice-president",
        org: "Sports Office, ECE Lyon",
        points: ["Inter-school sports events, managing volunteers, budget and partnerships."],
      },
    ],
    certificationsLabel: "Certifications",
    inProgress: "In progress",
    certifications: [
      { title: "CompTIA Security+", org: "CompTIA", inProgress: true },
      { title: "SC-200: Microsoft Security Operations Analyst", org: "Microsoft", inProgress: true },
      {
        title: "CISO Leadership: Managing a Cybersecurity Program",
        org: "LinkedIn Learning · Jan 2025",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:edc7e80a-72e1-4b08-9b48-ca76fc9cfe3b",
      },
      { title: "Cybersecurity Awareness: Cloud Security", org: "LinkedIn Learning" },
      {
        title: "Data Analysis",
        org: "DataScientest · Dec 2024",
        href: "/certs/datascientest-data-analysis.pdf",
      },
      {
        title: "Programming for Data Science",
        org: "DataScientest · Nov 2024",
        href: "/certs/datascientest-programming.pdf",
      },
    ],
    languagesLabel: "Languages",
    languages: [
      { name: "French", level: "native" },
      { name: "English", level: "advanced, TOEIC 885/990" },
      { name: "Spanish", level: "intermediate" },
      { name: "Italian", level: "basic" },
    ],
  },
  projects: {
    title: "Projects",
    intro: "The problem, the answer, and proof that it runs.",
    readCase: "Read the case study",
    viewCode: "View the code",
    viewDemo: "Watch the demo",
    closeVideo: "Close the video",
    backToProjects: "All projects",
    problemLabel: "The problem",
    approachLabel: "The answer",
    highlightsLabel: "What makes the difference",
    galleryLabel: "In pictures",
    demoLabel: "The demo",
    stackLabel: "Stack",
    nextLabel: "Next project",
    ctaTitle: "Does this project speak to you?",
    ctaButton: "Let's talk",
    list: [
      {
        slug: "honeylink",
        name: "HoneyLink",
        status: "Deployed · code public by end of 2026",
        active: true,
        context: "Team DevOps project, ECE · 2026",
        headline: "One fake link is all it takes to expose an intruder.",
        summary:
          "HoneyLink plants decoy URLs that nobody has a reason to open. As soon as an intruder lands on one, the visit is recorded, the tool identified (curl, nmap, sqlmap…) and a spike in intrusions fires a Grafana alert. All the intruder sees is a plain 404.",
        metrics: [
          { value: "61", label: "automated tests" },
          { value: "99.6%", label: "code coverage" },
          { value: "3", label: "Grafana alerts fired for real" },
          { value: "mTLS", label: "strict between all pods" },
        ],
        tags: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes", "Istio", "Helm", "GitHub Actions", "Trivy", "Ansible", "Prometheus", "Grafana"],
        image: {
          ...size.honeylink,
          alt: "HoneyLink Grafana dashboard: pods online, intrusions per minute and per tool, traffic per version.",
        },
        codeNote: "Code public by end of 2026",
        problem:
          "An attacker already inside a network looks like a normal user, and classic alerts bury analysts in false positives. A honeytoken flips the logic: nobody legitimate has a reason to open that link, so every visit is a reliable signal.",
        approach:
          "A FastAPI and Redis API creates decoys with a lifetime. The trap route records the time, IP and User-Agent, then answers exactly like a page that doesn't exist. It all ships through a full DevOps chain, from commit to Kubernetes.",
        highlights: [
          {
            title: "A trap that never gives itself away",
            text: "The /t/{id} route returns the same 404 as an unknown route, so nothing warns the intruder. User-Agents are attacker-controlled, so they are escaped and covered by a CSP: the analysis page can't become an XSS hole itself.",
          },
          {
            title: "Security from the CI onward",
            text: "Every push goes through ruff, pytest with a real Redis, then a Trivy scan. The CI fails below 80% coverage or on any fixable critical vulnerability. Only a tested and scanned image reaches Docker Hub, then Render.",
          },
          {
            title: "Controlled releases",
            text: "Istio shifts traffic from v1 to v2 in steps (10%, 50%, 100%), with strict mTLS between pods. A Helm chart installs everything with one command and allows rollbacks.",
          },
          {
            title: "Monitoring that actually rings",
            text: "Prometheus and Grafana track pods, Redis and intrusions. Three alerts are evaluated every 10 seconds: intrusion spike, Redis down, app down. All three were fired under real conditions.",
          },
          {
            title: "Reproducible infrastructure",
            text: "Vagrant and Ansible rebuild the VM from scratch, and numbered Kubernetes manifests deploy each piece in the right order.",
          },
        ],
        gallery: [
          {
            ...size.honeylinkHome,
            alt: "HoneyLink home page with active decoys and the latest intrusions.",
            caption: "Decoys and intrusions, with the detected tool. A <script> User-Agent stays plain text.",
          },
          {
            ...size.honeylinkTests,
            alt: "Terminal: 61 passing pytest tests and 99.6% coverage.",
            caption: "61 green tests and 99.6% coverage. The CI fails below 80%.",
          },
          {
            ...size.honeylinkIstio,
            alt: "Kiali graph: traffic goes through the Istio gateway, then splits between versions v1 and v2.",
            caption: "Istio splits traffic between v1 and v2, seen in Kiali.",
          },
        ],
      },
      {
        slug: "bureau-des-failles",
        name: "Le Bureau des Failles",
        status: "Live · code public by end of 2026",
        active: true,
        context: "Team web project, ECE · 2026",
        headline: "Learn to secure a website by hacking it first.",
        summary:
          "A Root-Me style detective game on a Windows 98 desktop: clients hand over their site, you find the flaw, exploit it to prove it, then fix it. It all runs in the browser, on a real PostgreSQL database, without ever touching the real web.",
        metrics: [
          { value: "6", label: "playable cases" },
          { value: "6", label: "phases, from briefing to patch" },
          { value: "590+", label: "automated tests" },
          { value: "WASM", label: "PostgreSQL in the browser" },
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "PGlite", "Web Workers", "Vitest"],
        image: {
          ...size.bureauIntro,
          alt: "Bureau des Failles intro: a pixelated 3D detective desk with an old computer, a lamp and an investigation board.",
        },
        live: { href: links.bureau, label: "Play online" },
        codeNote: "Code public by end of 2026",
        problem:
          "Web security is hard to learn from a lecture: reading that SQL injection exists doesn't teach you to spot it. And practicing on real sites is illegal. You need a place where you can break everything, with a story that makes you want to keep going.",
        approach:
          "Each case is an investigation in six phases: briefing, reconnaissance, exploit, report, patch, debrief. The sites are fake, but their code really runs, on real SQL queries and real access rules.",
        highlights: [
          {
            title: "PostgreSQL in the browser",
            text: "PGlite runs a real database in WebAssembly: real queries, real roles, real RLS policies. A fresh copy, reset to the original schema, is used to check every fix.",
          },
          {
            title: "A sandbox you can kill",
            text: "The site's code runs in a short-lived, disposable Web Worker: if it loops, it gets killed without freezing the game. The database lives in a second worker, connected through a MessageChannel.",
          },
          {
            title: "Real flaws, verified fixes",
            text: "Passwords, SQL injection, access control, XSS: players exploit the flaw, then their fix is tested against the attack. A parameterized query has to actually stop the injection before the case closes.",
          },
          {
            title: "Complete authentication",
            text: "Supabase with GitHub OAuth and email, confirmation, password reset, the old password required before any change, and a guest mode to play without an account.",
          },
          {
            title: "Isolated data",
            text: "Row Level Security limits each player to their own progress. The public leaderboard goes through a dedicated function that only exposes the username and the score.",
          },
        ],
        gallery: [
          {
            ...size.bureauDesk,
            alt: "Windows 98 desktop with the Cases window, the pixel art detective office and the filing cabinet.",
            caption: "The BrècheOS desktop and its filing cabinet: every client arrives with a case.",
          },
          {
            ...size.bureauQuest,
            alt: "Dialogue with Madame Brèche at the start of a case, next to the computer that is still off.",
            caption: "The investigation starts with the client, before the PC is switched on.",
          },
        ],
      },
      {
        slug: "cve-fix",
        name: "CVE Fix Redirector",
        status: "Finished · 2026",
        active: false,
        context: "Built during my SOC internship at Selencia",
        headline: "From a CVE ID to the official fix, with no detour.",
        summary:
          "When a CVE lands, time gets lost hunting for the right link. This application queries the NIST API directly, shows the description, CVSS score and severity, then sorts the useful links: patch, vendor advisory, third-party advisory.",
        metrics: [
          { value: "NVD", label: "official NIST API" },
          { value: "CVSS", label: "score and normalized severity" },
          { value: "3", label: "link types sorted: patch, vendor, third party" },
        ],
        tags: ["Python", "FastAPI", "JavaScript", "Tailwind", "NVD API"],
        image: {
          ...size.cvefix,
          alt: "CVE Fix Redirector: lookup of CVE-2026-23497 with its description, CVSS score, patch links and sources.",
        },
        repo: "https://github.com/Akaonii/CVE-Fix",
        video: "/videos/cvefix-demo.mp4",
        problem:
          "In a SOC, a CVE often arrives as a bare identifier. Finding the official fix means going through several sites, when the real question is immediate: how bad is it, and how do we fix it?",
        approach:
          "A FastAPI backend queries the NVD API and normalizes the response. An HTML, JavaScript and Tailwind interface puts everything on one screen, with search history and autocomplete.",
        highlights: [
          {
            title: "The official source",
            text: "The data comes straight from NIST's National Vulnerability Database, not from an aggregator.",
          },
          {
            title: "Severity at a glance",
            text: "The CVSS score and a normalized severity from LOW to CRITICAL, readable in one look.",
          },
          {
            title: "The right links first",
            text: "References are sorted automatically: Patch, Vendor Advisory, Third Party Advisory.",
          },
          {
            title: "Built for repeat use",
            text: "History and autocomplete make it instant to come back to a CVE you've already looked up.",
          },
        ],
        gallery: [],
      },
      {
        slug: "ip-tool",
        name: "Ip-Tool",
        status: "Finished · 2026",
        active: false,
        context: "Command-line tool · open source, MIT license",
        headline: "One suspicious IP, three sources, one verdict.",
        summary:
          "Checking an IP means juggling browser tabs. Ip-Tool brings it all into the terminal: reputation from VirusTotal and AbuseIPDB, geolocation and provider from ip-api, a local blacklist, and address extraction from HTML files.",
        metrics: [
          { value: "3", label: "APIs queried" },
          { value: "2", label: "cross-checked reputation scores" },
          { value: "MIT", label: "open source" },
        ],
        tags: ["Python", "VirusTotal API", "AbuseIPDB API", "ip-api", "OSINT"],
        image: {
          ...size.iptool,
          alt: "Ip-Tool in a terminal: main menu and an IP address being added to the blacklist.",
        },
        repo: "https://github.com/Akaonii/Ip-Tool",
        video: "/videos/iptool-demo.mp4",
        problem:
          "Faced with a dubious connection, an analyst checks the IP's reputation, location and provider, then writes the decision down somewhere. That back and forth costs time on every alert.",
        approach:
          "An interactive Python tool validates the address, queries the APIs and shows the result right away. API keys stay out of the code, in a .env file.",
        highlights: [
          {
            title: "Cross-checked reputation",
            text: "The number of malicious detections on VirusTotal and the AbuseIPDB suspicion score, so the verdict never relies on a single source.",
          },
          {
            title: "Added context",
            text: "Country, city, provider and GPS coordinates from ip-api.",
          },
          {
            title: "A clean blacklist",
            text: "Addresses go into blacklist.txt with automatic duplicate detection.",
          },
          {
            title: "From file to list",
            text: "Extracts every valid IPv4 address from an HTML file into a list to process.",
          },
        ],
        gallery: [],
      },
    ],
    archiveLabel: "Other projects",
    archiveColumns: { name: "Project", description: "In short", stack: "Stack" },
    archive: [
      {
        name: "OmnesBNB",
        description:
          "Full-stack rental platform built from scratch, with authentication and defensive monitoring.",
        stack: "PHP, MySQL",
        image: "/projects/omnesbnb.jpg",
        repo: "https://github.com/Akaonii/OmnesBNB-Showcase",
      },
      {
        name: "Drawbot",
        description: "Autonomous robot that turns a digital drawing into a line on paper.",
        stack: "C++, Arduino",
        image: "/projects/Drawbot.jpeg",
        repo: "https://github.com/Akaonii/Drawbot---Showcase",
        video: "/videos/drawbot-demo.mp4",
      },
      {
        name: "ECECooked",
        description: "A game written in C, themed around the Olympic Games.",
        stack: "C, Allegro",
        image: "/projects/EceCooked.png",
        repo: "https://github.com/Akaonii/ECECooked---Showcase",
        video: "/videos/ececooked-demo.mp4",
      },
    ],
  },
  demo: {
    title: "Try the trap",
    hint: "Simulated in your browser: nothing is sent.",
    prompt: "Visit the decoy with",
    browser: "browser",
    columns: { time: "Time", request: "Request", detected: "Detected tool" },
    response: "404",
    empty: "Pick a tool to trigger the decoy.",
  },
  skills: {
    title: "Skills",
    groups: [
      {
        label: "Defense",
        items: [
          "Microsoft Sentinel",
          "KQL",
          "EDR/XDR (Cortex)",
          "incident handling",
          "vulnerability analysis",
        ],
      },
      { label: "Risk", items: ["Threat modeling", "risk management"] },
      {
        label: "Cloud and DevOps",
        items: ["Docker", "Kubernetes", "Helm", "Istio", "GitHub Actions", "Trivy", "Ansible", "Prometheus", "Grafana"],
      },
      {
        label: "Development",
        items: ["Python", "FastAPI", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "C/C++", "Java", "PHP"],
      },
      { label: "Environments", items: ["Kali Linux", "Exegol", "Git", "Bash", "PowerShell"] },
    ],
    practiceLabel: "I practice on",
  },
  contact: {
    title: "Let's talk.",
    intro:
      "I'm looking for a cybersecurity internship from April 19 to the end of August 2027, in the Paris area. Cloud security, governance and risk, security operations: get in touch.",
    emailLabel: "Email",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Hello Maxime,",
      send: "Send",
      note: "Your message goes through Formspree, which forwards it to me by email.",
    },
  },
  footer: {
    code: "Site code",
    curious: "Curious? Read robots.txt.",
    cv: "Resume",
  },
  decoy: {
    metaTitle: "Administration",
    label: "Decoy triggered",
    title: "There's no admin here.",
    text: "This page is a decoy, like the ones in HoneyLink. On a real deployment, your visit would be recorded as an intrusion. Here, nothing is sent or stored: it all stays in your browser.",
    rows: { time: "Time", path: "Path", agent: "User-Agent", tool: "Detected tool" },
    unknownTool: "unknown",
    browserTool: "browser",
    back: "Back to the site",
    seeProject: "See HoneyLink",
  },
};

export const content: Record<Lang, Content> = { fr, en };

export function guessTool(userAgent: string): "curl" | "nmap" | "sqlmap" | "browser" | "unknown" {
  const agent = userAgent.toLowerCase();
  if (agent.includes("sqlmap")) return "sqlmap";
  if (agent.includes("nmap")) return "nmap";
  if (agent.includes("curl")) return "curl";
  if (agent.includes("mozilla")) return "browser";
  return "unknown";
}
