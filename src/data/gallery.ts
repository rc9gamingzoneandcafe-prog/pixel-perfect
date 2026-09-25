import hero from "@/assets/hero-drift.jpg";
import highspeed from "@/assets/exp-highspeed.jpg";
import offroad from "@/assets/exp-offroad.jpg";
import crawler from "@/assets/exp-crawler.jpg";
import drift from "@/assets/exp-drift.jpg";
import venue from "@/assets/venue-wide.jpg";
import birthday from "@/assets/birthday.jpg";
import corporate from "@/assets/corporate.jpg";
import cafe from "@/assets/cafe.jpg";
import pit from "@/assets/gallery-pit.jpg";
import winner from "@/assets/gallery-winner.jpg";

export const galleryImages = [
  { src: venue, alt: "The main RC 9 indoor track with drivers on the stand", tall: false },
  { src: pit, alt: "RC cars and controllers lined up in the RC 9 pit area", tall: true },
  { src: hero, alt: "An RC race car drifting through a corner at dusk", tall: false },
  { src: winner, alt: "A young racer celebrating on the RC 9 podium", tall: true },
  { src: offroad, alt: "An off-road RC buggy airborne over a dirt jump", tall: false },
  { src: drift, alt: "An RC drift car sliding across the lit drift pad", tall: false },
  { src: corporate, alt: "A corporate group racing together at RC 9", tall: false },
  { src: birthday, alt: "Children cheering at a birthday race day", tall: false },
  { src: highspeed, alt: "A blue and white RC touring car on the high-speed track", tall: false },
  { src: crawler, alt: "An RC crawler climbing the technical rock course", tall: false },
  { src: cafe, alt: "The RC 9 cafe seating area", tall: false },
];

export { hero, venue, birthday, corporate, cafe, winner, pit };
