export type Locale = "en" | "fr";

export type Game = {
  slug: "lock-on" | "signal-garden";
  number: string;
  name: string;
  qualifier?: string;
  status: string;
  genre: string;
  summary: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  direction: string[];
};

export const copy = {
  en: {
    langName: "Français",
    langHref: "/fr",
    skip: "Skip to content",
    navLabel: "Primary navigation",
    games: "Games",
    collaborate: "Work with the studio",
    about: "About",
    navContact: "Studio contact",
    share: "Share an idea",
    back: "Back to Pafuli Studio",
    eyebrow: "Independent game studio · Montréal",
    titleBefore: "Games with a",
    titleEmphasis: "point of view.",
    intro:
      "Original worlds, precise systems, and releases made with care. Pafuli Studio creates its own games and collaborates on selected playable ideas.",
    index: "In the studio",
    indexYear: "Now",
    gameLink: "Explore the game",
    originalLabel: "Pafuli Studio original",
    conceptArt: "Concept art — not gameplay",
    gamesEyebrow: "Games in progress",
    gamesTitle: "Two different rhythms. One attentive studio.",
    gamesIntro:
      "Our projects begin with a feeling worth returning to. Platform links, trailers, and release information will live with each game as soon as they are confirmed.",
    platformsPending: "Platforms to be announced",
    workEyebrow: "Work with the studio",
    workTitle: "Bring the idea, the build, or the missing piece.",
    workIntro:
      "We take on selected collaborations where a clear creative premise and a practical next step can be shaped together.",
    services: [
      {
        number: "01",
        title: "Game creation & co-development",
        body: "Define the core loop, test the premise, and shape a scoped path from concept or unfinished build toward something playable.",
      },
      {
        number: "02",
        title: "Player & backend systems",
        body: "Onboarding, player identity, saves, leaderboards, progression data, and lightweight backend services—built or integrated around the game.",
      },
      {
        number: "03",
        title: "Release & publishing support",
        body: "Technical release planning, store and platform preparation, build handoff, and launch coordination for selected mobile, PC, and web projects.",
      },
    ],
    systemsEyebrow: "Shared systems",
    systemsTitle: "The parts around the game still shape the experience.",
    systemsBody:
      "A welcome flow, a fair leaderboard, a dependable save, and a quiet backend can determine whether a player stays. We design or integrate these systems as part of the whole—not as an afterthought.",
    systemList: ["Onboarding", "Player identity", "Cloud saves", "Leaderboards", "Progression data", "Lightweight backends"],
    aboutEyebrow: "About Pafuli Studio",
    aboutTitle: "An atelier for play, systems, and atmosphere.",
    aboutBody:
      "Pafuli Studio is the games and interactive practice of Studio Pafuli Inc. Each project is shaped by a focused team, with specialized collaborators brought in when the work calls for them.",
    principleOne: "Original work",
    principleOneBody: "A clear premise and a reason for the game to exist beyond its feature list.",
    principleTwo: "Thoughtful scope",
    principleTwoBody: "A playable next step that respects the project, the team, and the release path.",
    contactEyebrow: "A next playable step",
    contactTitle: "Share the premise. We’ll help shape what comes next.",
    contactBody:
      "Send the idea, prototype, unfinished build, or system you need. We will begin by deciding whether there is a clear piece of work we can responsibly take on together.",
    contactPending: "Studio contact details are being prepared.",
    contactButton: "Studio email coming soon",
    parentLink: "Visit Pafuli",
    legal: "Pafuli Studio is a games and interactive practice operated by Studio Pafuli Inc.",
    privacy: "Privacy",
    accessibility: "Accessibility",
    updated: "Content reviewed September 3, 2026",
  },
  fr: {
    langName: "English",
    langHref: "/",
    skip: "Passer au contenu",
    navLabel: "Navigation principale",
    games: "Jeux",
    collaborate: "Collaborer avec le studio",
    about: "À propos",
    navContact: "Coordonnées du studio",
    share: "Partager une idée",
    back: "Retour à Pafuli Studio",
    eyebrow: "Studio de jeux indépendant · Montréal",
    titleBefore: "Des jeux avec un",
    titleEmphasis: "point de vue.",
    intro:
      "Des univers originaux, des mécaniques précises et des sorties réalisées avec soin. Pafuli Studio crée ses propres jeux et collabore à des idées jouables choisies.",
    index: "Dans le studio",
    indexYear: "Maintenant",
    gameLink: "Découvrir le jeu",
    originalLabel: "Création originale de Pafuli Studio",
    conceptArt: "Art conceptuel — pas le jeu",
    gamesEyebrow: "Jeux en cours",
    gamesTitle: "Deux rythmes différents. Un même regard attentif.",
    gamesIntro:
      "Nos projets commencent par une sensation à laquelle on souhaite revenir. Les liens vers les plateformes, bandes-annonces et renseignements de sortie accompagneront chaque jeu dès leur confirmation.",
    platformsPending: "Plateformes à annoncer",
    workEyebrow: "Collaborer avec le studio",
    workTitle: "Apportez l’idée, le prototype ou la pièce manquante.",
    workIntro:
      "Nous choisissons des collaborations où une prémisse créative claire et une prochaine étape réalisable peuvent être définies ensemble.",
    services: [
      {
        number: "01",
        title: "Création et codéveloppement de jeux",
        body: "Définir la boucle centrale, éprouver la prémisse et tracer un chemin réaliste du concept ou d’une version inachevée vers quelque chose de jouable.",
      },
      {
        number: "02",
        title: "Systèmes de jeu et infrastructure",
        body: "Parcours d’accueil, profils de joueur, sauvegardes, classements, données de progression et infrastructure légère — conçus ou intégrés autour du jeu.",
      },
      {
        number: "03",
        title: "Soutien à la sortie et à la publication",
        body: "Planification technique, préparation des boutiques et plateformes, remise des versions et coordination du lancement pour certains projets mobiles, PC et web.",
      },
    ],
    systemsEyebrow: "Systèmes partagés",
    systemsTitle: "Ce qui entoure le jeu façonne aussi l’expérience.",
    systemsBody:
      "Un parcours d’accueil clair, un classement équitable, une sauvegarde fiable et une infrastructure discrète peuvent faire toute la différence dans l’envie de revenir. Nous concevons ou intégrons ces systèmes comme une partie du tout.",
    systemList: ["Parcours d’accueil", "Profils de joueur", "Sauvegardes infonuagiques", "Classements", "Données de progression", "Infrastructure légère"],
    aboutEyebrow: "À propos de Pafuli Studio",
    aboutTitle: "Un atelier consacré au jeu, aux systèmes et à l’atmosphère.",
    aboutBody:
      "Pafuli Studio est la pratique de jeux et d’expériences interactives de Studio Pafuli Inc. Chaque projet est façonné par une équipe ciblée, avec des collaborateurs spécialisés lorsque le travail l’exige.",
    principleOne: "Travail original",
    principleOneBody: "Une prémisse claire et une raison d’exister au-delà d’une liste de fonctions.",
    principleTwo: "Portée réfléchie",
    principleTwoBody: "Une prochaine étape jouable qui respecte le projet, l’équipe et le chemin vers la sortie.",
    contactEyebrow: "Une prochaine étape jouable",
    contactTitle: "Partagez la prémisse. Façonnons la suite ensemble.",
    contactBody:
      "Présentez l’idée, le prototype, la version inachevée ou le système requis. Nous commencerons par déterminer s’il existe un travail clair que nous pouvons prendre en charge ensemble de façon responsable.",
    contactPending: "Les coordonnées du studio sont en préparation.",
    contactButton: "Adresse du studio bientôt disponible",
    parentLink: "Visiter Pafuli",
    legal: "Pafuli Studio est une pratique de jeux et d’expériences interactives exploitée par Studio Pafuli Inc.",
    privacy: "Confidentialité",
    accessibility: "Accessibilité",
    updated: "Contenu révisé le 3 septembre 2026",
  },
} as const;

export const games: Record<Locale, Game[]> = {
  en: [
    {
      slug: "lock-on",
      number: "01",
      name: "Lock On",
      status: "Coming soon",
      genre: "Endless flight",
      summary: "An endless-flight game about reading the space ahead and holding your line for one more run.",
      longDescription:
        "Lock On explores the clean concentration of continuous flight: distant forms becoming immediate decisions, a line held through an environment that keeps unfolding, and the pull of one more attempt.",
      image: "lock-on-concept",
      imageAlt: "A small aircraft flying through immense curved stone-like forms in warm mist.",
      direction: ["Continuous forward flight", "Sculptural spaces that reshape the line", "A run-based rhythm built around distance and momentum", "A restrained visual world without cockpit clutter"],
    },
    {
      slug: "signal-garden",
      number: "02",
      name: "Signal Garden",
      qualifier: "Working title",
      status: "In development",
      genre: "Contemplative idle game",
      summary: "Tend a small centre, improve the systems inside it, and watch a quiet network take on a life of its own.",
      longDescription:
        "Signal Garden is an idle systems game about patient improvement. A modest centre gains new capabilities, reaches farther, and gradually turns a quiet signal into a living network.",
      image: "signal-garden-concept",
      imageAlt: "A warm terraced garden of small structures connected by delicate points of light at dusk.",
      direction: ["A small centre that changes visibly over time", "Interlocking improvements instead of constant tapping", "A network that grows outward through considered choices", "A calm pace with space to observe the system"],
    },
  ],
  fr: [
    {
      slug: "lock-on",
      number: "01",
      name: "Lock On",
      status: "Bientôt disponible",
      genre: "Vol sans fin",
      summary: "Un jeu de vol sans fin où il faut lire l’espace à venir et tenir sa trajectoire pour une tentative de plus.",
      longDescription:
        "Lock On explore la concentration pure du vol continu : des formes lointaines qui deviennent des décisions immédiates, une trajectoire tenue dans un environnement qui se déploie sans cesse et l’envie d’essayer encore une fois.",
      image: "lock-on-concept",
      imageAlt: "Un petit aéronef traverse d’immenses formes courbes semblables à de la pierre dans une brume chaude.",
      direction: ["Vol continu vers l’avant", "Espaces sculpturaux qui transforment la trajectoire", "Rythme par tentative fondé sur la distance et l’élan", "Univers visuel épuré sans surcharge de cockpit"],
    },
    {
      slug: "signal-garden",
      number: "02",
      name: "Signal Garden",
      qualifier: "Titre de travail",
      status: "En développement",
      genre: "Progression contemplative (idle)",
      summary: "Prenez soin d’un petit centre, améliorez ses systèmes et regardez un réseau discret prendre vie.",
      longDescription:
        "Signal Garden est un jeu de systèmes à progression passive consacré à l’amélioration patiente. Un centre modeste acquiert de nouvelles capacités, étend sa portée et transforme peu à peu un signal discret en réseau vivant.",
      image: "signal-garden-concept",
      imageAlt: "Un jardin chaud en terrasses, composé de petites structures reliées par de délicats points de lumière au crépuscule.",
      direction: ["Un petit centre qui change visiblement avec le temps", "Des améliorations imbriquées plutôt que des gestes constants", "Un réseau qui s’étend par des choix réfléchis", "Un rythme calme qui laisse observer le système"],
    },
  ],
};

export function gameHref(locale: Locale, slug: string) {
  return locale === "fr" ? `/fr/jeux/${slug}` : `/games/${slug}`;
}
