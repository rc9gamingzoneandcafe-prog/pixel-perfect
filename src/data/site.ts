/**
 * RC 9 business content.
 * Everything customer-facing (prices, hours, contact, copy) lives here so it
 * can be edited in one place without touching components.
 * Values marked as placeholders should be replaced with real details.
 */

export const site = {
  name: "RC 9",
  tagline: "Premium RC Racing Experience",
  description:
    "Race high-performance RC cars on purpose-built tracks at RC 9. Book your racing experience, birthday party, corporate event or group session.",
  phone: "+91 92811 98811",
  whatsapp: "919281198811",
  email: "rc9gamingzoneandcafe@gmail.com",
  address: {
    line1: "RC 9 Gaming Zone & Cafe",
    line2: "Panchasheel Enclave, Road No. 1, HT Road, Alwal",
    city: "Hyderabad",
    postcode: "",
  },
  /** Exact venue coordinates — resolved from the shared Google Maps link. */
  mapCoords: { lat: 17.5136166, lng: 78.4921341 },
  mapsUrl: "https://maps.app.goo.gl/BGstVFCquSAFzJB9A?g_st=aw",
  hours: [{ days: "Monday – Sunday", time: "11:00 AM – 11:00 PM" }],
  parking: "Free on-site parking for cars and two-wheelers.",
  social: {
    instagram: "https://www.instagram.com/rc9gamingzoneandcafe/",
  },
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
export const telLink = `tel:${site.phone.replace(/\s/g, "")}`;

export const stats = [
  { value: 5, suffix: "", label: "Experiences" },
  { value: 30, suffix: "+", label: "RC Cars" },
  { value: 60, suffix: " min", label: "Maximum Session" },
  { value: 100, suffix: "%", label: "Adrenaline" },
];

/** One price line, e.g. { label: "2 Persons", price: "₹99 / person" }. */
export type PriceOption = { label: string; price: string };
/** Prices for one session length, e.g. 30 MIN. */
export type PriceTier = { duration: string; options: PriceOption[] };

export type Experience = {
  slug: string;
  name: string;
  short: string;
  description: string;
  duration: string;
  /** Headline price shown on cards. */
  from: string;
  /** Full price list — the single source of truth for experience pricing. Empty = not yet published. */
  prices: PriceTier[];
  image: string;
  highlights: string[];
};

import highSpeedImg from "@/assets/exp-highspeed.jpg";
import constructionImg from "@/assets/exp-construction.jpg";
import crawlerImg from "@/assets/exp-crawler.jpg";
import driftImg from "@/assets/exp-drift.jpg";
import simulatorImg from "@/assets/exp-simulator.jpg";

/** Shown wherever an experience has no published price yet. */
export const designer = { name: "Siri Sandela", url: "https://www.linkedin.com/in/siri-sandela" };

export const PRICE_TBA = "Price to be updated";

export const experiences: Experience[] = [
  {
    slug: "re-construction",
    name: "RC Construction",
    short: "Dig, load and haul with scale RC construction machines.",
    description:
      "Take the controls of radio-controlled construction machines on a miniature work site. Dig, load and move material with precision and teamwork.",
    duration: "15 – 30 min",
    from: "₹59",
    prices: [
      {
        duration: "30 min",
        options: [
          { label: "1 Person", price: "₹199" },
          { label: "2 Persons", price: "₹99 / person" },
        ],
      },
      {
        duration: "15 min",
        options: [
          { label: "1 Person", price: "₹59" },
          { label: "2 Persons", price: "₹149" },
        ],
      },
    ],
    image: constructionImg,
    highlights: ["Scale construction machines", "Miniature work site", "Great for first-timers"],
  },
  {
    slug: "crawler",
    name: "RC Crawler",
    short: "Technical driving that rewards control and patience.",
    description:
      "A boulder course where throttle control beats raw speed. Articulated crawlers, steep climbs and lines you have to read before you drive them.",
    duration: "15 – 30 min",
    from: "₹99",
    prices: [
      {
        duration: "30 min",
        options: [
          { label: "1 Person", price: "₹149" },
          { label: "2 Persons", price: "₹299" },
        ],
      },
      {
        duration: "15 min",
        options: [
          { label: "1 Person", price: "₹99" },
          { label: "2 Persons", price: "₹149" },
        ],
      },
    ],
    image: crawlerImg,
    highlights: ["Rock course", "Scale crawlers", "Skill-based challenges"],
  },
  {
    slug: "high-speed",
    name: "RC High Speed",
    short: "High-speed racing designed for speed and precision.",
    description:
      "Our fastest on-road layout. Long straights, tight chicanes and a timing system that shows every hundredth of a second. Built for racers who want pace.",
    duration: "15 – 60 min",
    from: PRICE_TBA,
    prices: [],
    image: highSpeedImg,
    highlights: ["Timed laps", "On-road touring cars", "Race-line coaching"],
  },
  {
    slug: "drift",
    name: "RC Drift",
    short: "Master corners, slides and precision driving.",
    description:
      "A polished drift pad lit in blue and red. Learn counter-steer, link corners and chase style points with our instructors alongside you.",
    duration: "15 min",
    from: "₹99",
    prices: [
      {
        duration: "15 min",
        options: [
          { label: "1 Person", price: "₹99" },
          { label: "2 Persons", price: "₹149" },
        ],
      },
    ],
    image: driftImg,
    highlights: ["Drift pad", "RWD drift chassis", "Tandem runs"],
  },
  {
    slug: "simulator",
    name: "Racing Simulator Cockpit",
    short: "Strap into a full racing cockpit and chase the perfect lap.",
    description:
      "Settle into a racing seat with a steering wheel and pedals in front of immersive screens. Feel what it's like to drive a real race car, lap after lap.",
    duration: "30 min",
    from: "₹199",
    prices: [
      {
        duration: "30 min",
        options: [{ label: "Per person", price: "₹199 / person" }],
      },
    ],
    image: simulatorImg,
    highlights: ["Racing seat cockpit", "Steering wheel & pedals", "Immersive screens"],
  },
];

export type Plan = {
  name: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    duration: "15 min",
    price: "₹XXX",
    features: ["1 track", "RC car included", "Controller", "Safety briefing"],
    cta: "Book Starter",
  },
  {
    name: "Racer",
    duration: "30 min",
    price: "₹XXX",
    features: [
      "Multiple track access",
      "RC car included",
      "Controller",
      "Instructor assistance",
      "Lap timing",
    ],
    popular: true,
    cta: "Book Racer",
  },
  {
    name: "Pro",
    duration: "60 min",
    price: "₹XXX",
    features: [
      "Maximum track access",
      "Premium RC car",
      "Multiple races",
      "Instructor coaching",
      "Leaderboard eligibility",
    ],
    cta: "Book Pro",
  },
  {
    name: "Group",
    duration: "90 min",
    price: "₹XXX",
    features: [
      "Up to 8 racers",
      "Private track slot",
      "Tournament format",
      "Cafe seating area",
    ],
    cta: "Book Group",
  },
];

export const benefits = [
  {
    icon: "gauge",
    title: "Performance",
    text: "High-performance RC cars maintained for serious fun, not toy-shop speeds.",
  },
  {
    icon: "route",
    title: "Purpose-Built Tracks",
    text: "Layouts designed for speed, control and genuine competition.",
  },
  {
    icon: "graduation",
    title: "Beginner Friendly",
    text: "No previous RC experience required. We brief you before you drive.",
  },
  {
    icon: "users",
    title: "For Everyone",
    text: "Kids, adults, families, friends and corporate groups.",
  },
  {
    icon: "trophy",
    title: "Real Competition",
    text: "Timed laps, head-to-head races and a live leaderboard.",
  },
  {
    icon: "sparkles",
    title: "Premium Experience",
    text: "A professional environment from booking to chequered flag.",
  },
];

export const steps = [
  { no: "01", title: "Pick Your Experience", text: "Choose the track and session that suits you." },
  { no: "02", title: "Pick Your Car", text: "Our team helps you choose the right RC car." },
  { no: "03", title: "Learn The Controls", text: "Quick briefing before you hit the track." },
  { no: "04", title: "Hit The Track", text: "Race, compete and chase the fastest lap." },
];

export const occasions = [
  { title: "Friends", text: "Challenge your friends.", to: "/experiences" },
  { title: "Families", text: "Fun for kids and adults.", to: "/experiences" },
  { title: "Birthdays", text: "Turn birthdays into race days.", to: "/birthday-parties" },
  { title: "Corporate", text: "Team challenges and corporate events.", to: "/corporate-events" },
  { title: "Groups", text: "Bring your crew and compete.", to: "/corporate-events" },
] as const;

/** Mock leaderboard — shaped so a real database can replace it directly. */
export type LapRecord = { position: number; racer: string; time: string; track: string };

export const leaderboard: LapRecord[] = [
  { position: 1, racer: "Racer Name", time: "24.82s", track: "RC High Speed" },
  { position: 2, racer: "Racer Name", time: "25.14s", track: "RC High Speed" },
  { position: 3, racer: "Racer Name", time: "25.91s", track: "RC High Speed" },
  { position: 4, racer: "Racer Name", time: "26.40s", track: "RC Crawler" },
  { position: 5, racer: "Racer Name", time: "26.88s", track: "RC Crawler" },
];

export const testimonials = [
  {
    name: "Aarav S.",
    rating: 5,
    text: "Came for 15 minutes, stayed two hours. The high-speed track is properly quick and the staff actually coach you.",
  },
  {
    name: "Priya M.",
    rating: 5,
    text: "Booked it for my son's birthday. The kids were glued to the controllers and the party area made it effortless for us.",
  },
  {
    name: "Rohan K.",
    rating: 5,
    text: "Our team offsite ended in a tournament. Way better than another escape room — everyone raced, nobody sat out.",
  },
  {
    name: "Neha T.",
    rating: 4,
    text: "Never touched an RC car before and was drifting by the end of the session. Clean venue, good cafe.",
  },
];

export const faqs = [
  {
    q: "Do I need previous RC experience?",
    a: "No. Every session starts with a short briefing and our marshals stay with you on track until you're comfortable.",
  },
  {
    q: "What age can participate?",
    a: "Most racers from around 6 years upwards can drive with assistance. There is no upper age limit.",
  },
  {
    q: "Do I need to bring my own RC car?",
    a: "No. Cars, controllers and batteries are included. Experienced racers are welcome to bring their own chassis.",
  },
  {
    q: "What is included in the booking?",
    a: "Track time, an RC car, a controller, safety briefing and marshal support. Premium cars are included in the Pro session.",
  },
  {
    q: "How long is a session?",
    a: "Sessions run from 15 to 60 minutes. Group and event slots run up to 90 minutes.",
  },
  {
    q: "Can I book for a group?",
    a: "Yes. Group slots cover up to 8 racers with a private track window; larger groups are arranged on request.",
  },
  {
    q: "Do you host birthday parties?",
    a: "Yes. Birthday packages combine racing with a party area, cafe food and group races.",
  },
  {
    q: "Do you host corporate events?",
    a: "Yes. Team races, tournaments and fully private sessions are available on weekdays and weekends.",
  },
  {
    q: "What should I wear?",
    a: "Anything comfortable. Closed shoes are recommended, especially around the tracks.",
  },
  {
    q: "Can I walk in without booking?",
    a: "Walk-ins are welcome when slots are free, but weekends fill quickly — booking ahead is safer.",
  },
  {
    q: "How early should I arrive?",
    a: "Arrive about 10 minutes before your slot so your briefing doesn't cut into track time.",
  },
  {
    q: "What happens if I am late?",
    a: "We hold your slot for 10 minutes. After that your session may be shortened if the next booking is due.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, with at least 24 hours' notice, subject to availability.",
  },
  { q: "Is parking available?", a: site.parking },
];
