export const siteNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Schedule", href: "/schedule" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
  { label: "FAQs", href: "/#faqs" },
];

export const siteFooterColumns = [
  {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Schedule", href: "/schedule" },
    ],
  },
  {
    items: [
      { label: "Speakers", href: "/speakers" },
      { label: "Team", href: "/team" },
      { label: "FAQs", href: "/#faqs" },
    ],
  },
];

export const siteContact = {
  address:
    "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru - 560078",
  email: "tedxdsce@gmail.com.in",
  phone: "Ph +91 80888 74805",
};

export const siteSocials = [
  {
    label: "Instagram",
    href: "https://instagram.com/tedxdsce",
    icon: "/assets/svgs/instagram.svg",
  },
];

export const siteCopyright = "© 2026";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_MED =
  "TEDxDSCE 2026 brings together innovators, thinkers, and creators to explore ideas that inspire change and shape the future. Join us for a day of powerful talks and meaningful conversations.";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const eventInfo = {
  name: "TEDxDSCE 2026",
  theme: "The Idea Effect",
  date: "Thursday , 30 April 2026",
  /** ISO date used by the countdown (event start in IST). */
  dateIso: "2026-04-30T09:00:00+05:30",
  venue: "DSCE Auditorium, Bengaluru",
};

export const heroCopy = {
  eyebrow: "TEDx DSCE · 2026",
  title: "The Idea Effect",
  lede: LOREM_MED,
  primaryCta: "Register Interest",
  secondaryCta: "Stay Updated",
};

export const aboutCopy = {
  eyebrow: "About",
  title: "Lorem ipsum dolor sit amet",
  paragraphs: [LOREM_LONG, LOREM_MED],
  stats: [
    { value: "12+", label: "Speakers" },
    { value: "8", label: "Sessions" },
    { value: "500+", label: "Attendees" },
  ],
};

export const aboutPageContent = {
  sections: [
    {
      eyebrow: "About TED",
      title: "Ideas change everything",
      body: [
        "TED is a global platform devoted to spreading ideas that matter. Through powerful talks across technology, entertainment, design, and beyond, TED brings together thinkers and doers who challenge perspectives and inspire action.",
        "From groundbreaking innovations to deeply human stories, TED Talks have influenced millions worldwide by making knowledge accessible and impactful.",
      ],
    },
    {
      eyebrow: "What is TEDx",
      title: "Independently organized TED events",
      body: [
        "TEDx events are independently organized gatherings that bring people together to share a TED-like experience. While each event is unique, all TEDx events aim to spark meaningful conversations and connect communities through ideas worth spreading.",
        "Organized under a free license granted by TED, TEDx events maintain the spirit of curiosity, innovation, and inspiration at a local level.",
      ],
    },
    {
      eyebrow: "About TEDxDSCE",
      title: "Our chapter at Dayananda Sagar",
      body: [
        "TEDxDSCE is the official TEDx chapter of Dayananda Sagar College of Engineering, Bengaluru. It is a student-driven initiative that creates a platform for innovators, creators, and leaders to share their journeys and ideas.",
        "Through carefully curated talks and performances, TEDxDSCE aims to inspire young minds, foster creativity, and build a community driven by curiosity and change.",
      ],
    },
    {
      eyebrow: "2026 Theme",
      title: "The Idea Effect",
      body: [
        "At TEDxDSCE 2026, we explore The Idea Effect — how a single idea can spark change, influence minds, and create lasting impact. Join us for a day of powerful talks, bold perspectives, and transformative stories.",
        "From innovation and entrepreneurship to personal growth and storytelling, this theme celebrates the courage to think differently and the drive to turn ideas into action.",
      ],
    },
  ],
};

export type Speaker = {
  slug: string;
  name: string;
  role: string;
  oneLiner: string;
  bio: string;
};

export const speakers: Speaker[] = [
  {
    slug: "vrinda-dinesh",
    name: "Vrinda Dinesh",
    role: "Cricketer, Women’s Premier League",
    oneLiner: "A promising young talent known for her composed batting style.",
    bio: "Vrinda Dinesh is an emerging cricketer in the Women’s Premier League, recognized for her calm presence at the crease and consistent performances. She has rapidly progressed through domestic cricket to earn her place among top-tier players.",
  },
  {
    slug: "surabhi-yelsangikar",
    name: "Surabhi Yelsangikar",
    role: "Co-Founder, Tvarita Arts Collective India",
    oneLiner: "Connecting indigenous artists’ cultural heritage with diverse audiences.",
    bio: "Surabhi Yelsangikar is the co-founder of Tvarita Arts Collective India, where she works to bridge traditional art forms with contemporary audiences. She previously managed entrepreneurship programs at NSRCEL, contributing to the growth of India’s startup ecosystem.",
  },
  {
    slug: "yash-agarwal",
    name: "Yash Agarwal",
    role: "Co-founder, The Binge Town",
    oneLiner: "Revolutionizing how India celebrates and experiences events.",
    bio: "Yash Agarwal is the co-founder of The Binge Town, a platform redefining celebrations and experiences across India. Featured on Shark Tank India, he has facilitated over 1.5 lakh+ celebrations across major cities.",
  },
  {
    slug: "nishant-jayant",
    name: "Dr. Nishant Jayant",
    role: "Founder & Director, Peritum Production House",
    oneLiner: "Building global marketing ecosystems with over a decade of experience.",
    bio: "Dr. Nishant Jayant leads Peritum Production House and has built a global marketing presence across India and the Middle East. With over 12 years of experience, he is also a multi-award winner, including recognition for his work with The Times of India.",
  },
  {
    slug: "ananth-shroff",
    name: "Ananth Shroff",
    role: "Founder & CEO, DPDzero",
    oneLiner: "Reimagining debt collections with AI and human empathy.",
    bio: "Ananth Shroff is the founder and CEO of DPDzero, where he focuses on transforming debt collection systems using AI-driven intelligence. He was also part of the founding team at Setu, contributing to India’s fintech innovation landscape.",
  },
];

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  kind: "session" | "break";
};

export const schedule: ScheduleItem[] = [
  { 
    time: "09:00", 
    title: "Registration & Check-in", 
    description: "Welcome to TEDxDSCE 2026. Get registered and settle in for a day of ideas worth spreading.", 
    kind: "break" 
  },

  { 
    time: "10:00", 
    title: "Opening Address", 
    description: "Introducing the theme: The Idea Effect.", 
    kind: "session" 
  },

  // Speaker Block 1
  { 
    time: "10:15", 
    title: "Vrinda Dinesh", 
    description: "Cricketer, Women’s Premier League", 
    kind: "session" 
  },
  { 
    time: "10:35", 
    title: "Surabhi Yelsangikar", 
    description: "Co-Founder, Tvarita Arts Collective India", 
    kind: "session" 
  },

  { 
    time: "10:55", 
    title: "Coffee Break", 
    description: "Refreshments and networking.", 
    kind: "break" 
  },

  // Speaker Block 2
  { 
    time: "11:15", 
    title: "Yash Agarwal", 
    description: "Co-founder, The Binge Town", 
    kind: "session" 
  },
  { 
    time: "11:35", 
    title: "Dr. Nishant Jayant", 
    description: "Founder & Director, Peritum Production House", 
    kind: "session" 
  },

  { 
    time: "11:55", 
    title: "Musical Performance", 
    description: "A live musical act to energize the audience.", 
    kind: "session" 
  },

  { 
    time: "12:30", 
    title: "Lunch Break", 
    description: "Lunch and networking.", 
    kind: "break" 
  },

  // Speaker Block 3
  { 
    time: "14:00", 
    title: "Ananth Shroff", 
    description: "Founder & CEO, DPDzero", 
    kind: "session" 
  },
  { 
    time: "14:20", 
    title: "Speaker 1 ", 
    description: "", 
    kind: "session" 
  },

  { 
    time: "14:40", 
    title: "Flute Performance", 
    description: "A calming flute performance.", 
    kind: "session" 
  },

  { 
    time: "15:00", 
    title: "Tea Break", 
    description: "Short refreshment break.", 
    kind: "break" 
  },

  // Speaker Block 4
  { 
    time: "15:20", 
    title: "Speaker 2 ", 
    description: "", 
    kind: "session" 
  },
  { 
    time: "15:40", 
    title: "Speaker 3", 
    description: "", 
    kind: "session" 
  },

  { 
    time: "16:00", 
    title: "Dance Performance", 
    description: "A vibrant dance performance to conclude the sessions.", 
    kind: "session" 
  },

  { 
    time: "16:30", 
    title: "Closing & Networking", 
    description: "Final remarks and networking.", 
    kind: "break" 
  },
];

export type TeamMember = {
  name: string;
  role: string;
  group: "Organizers" | "Heads" | "Volunteers";
};

export const team: TeamMember[] = [
  // Organizers
  { name: "Vidhi", role: "Curator", group: "Organizers" },
  { name: "Satwik Rao", role: "Co-Curator", group: "Organizers" },
  { name: "Ganesh", role: "Licensee", group: "Organizers" },

  // Heads
  { name: "Rohit", role: "Event Management Head", group: "Heads" },
  { name: "Nishi ", role: "Design Head", group: "Heads" },
  { name: "Snehal", role: "Marketing Head", group: "Heads" },
  { name: "Anirudh", role: "Sponsorship Head", group: "Heads" },
  { name: "Ujjwal", role: "Content Head", group: "Heads" },
  { name: "Abhik", role: "Volunteers Head", group: "Heads" },

  // Volunteers
  { name: "HariPreetham", role: "Volunteer", group: "Volunteers" },
  { name: "Devansh", role: "Volunteer", group: "Volunteers" },
  { name: "Rasha", role: "Volunteer", group: "Volunteers" },
  { name: "Asim", role: "Volunteer", group: "Volunteers" },
  { name: "Twarita", role: "Volunteer", group: "Volunteers" },
];

export const sponsors = [
  { name: "Decathlon", tier: "Title" },

  { name: "Pizza One", tier: "Gold" },
  { name: "Protein Bowl", tier: "Gold" },
  { name: "Broffels", tier: "Gold" },
  { name: "WOW Momos", tier: "Gold" },
  { name: "Vani Villas", tier: "Gold" },
];
export const faqs = [
  { 
    question: "What is TEDxDSCE?", 
    answer: "TEDxDSCE is an independently organized TED event hosted at Dayananda Sagar College of Engineering. It brings together thinkers, innovators, and storytellers to share ideas worth spreading." 
  },
  { 
    question: "What is the theme for TEDxDSCE 2026?", 
    answer: "The theme for TEDxDSCE 2026 is 'The Idea Effect', focusing on how a single idea can create a ripple of impact and inspire meaningful change." 
  },
  { 
    question: "When and where will the event take place?", 
    answer: "TEDxDSCE 2026 will be held at the DSCE Auditorium on 30th April 2026." 
  },
  { 
    question: "How can I attend the event?", 
    answer: "You can attend by registering through our official website once ticket registrations open. Stay tuned for updates!" 
  },
  { 
    question: "Who are the speakers at the event?", 
    answer: "Our speakers include innovators, entrepreneurs, artists, and leaders from diverse fields. Speaker announcements will be updated on the website regularly." 
  },
  { 
    question: "How can I stay updated about TEDxDSCE?", 
    answer: "Follow our social media channels and website for the latest updates, speaker announcements, and event details." 
  },
];