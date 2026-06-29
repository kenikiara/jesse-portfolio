export type Category = "Residential" | "Commercial";

export interface Project {
  id: string;
  index: string;
  title: string;
  location: string;
  blurb: string;
  tags: string[];
  category: Category;
  image: string; // file in /public/real
  href?: string; // page on his live site
}

// Real built work, sourced from architectjesse.co.ke
export const projects: Project[] = [
  {
    id: "tatu-city",
    index: "01",
    title: "Residential Maisonette",
    location: "Tatu City, Kiambu",
    blurb:
      "An elegant neoclassical mansion with grand columns, stone cladding and expansive glazing.",
    tags: ["Neoclassical", "Maisonette", "Stone"],
    category: "Residential",
    image: "port-8",
    href: "https://architectjesse.co.ke/tatu-city.html",
  },
  {
    id: "stunning-mansion",
    index: "02",
    title: "Stunning Mansion",
    location: "Nairobi Metro",
    blurb:
      "A modern mansion fusing contemporary and classic elements — a stone-clad chimney and sweeping balconies.",
    tags: ["Contemporary", "Mansion"],
    category: "Residential",
    image: "port-22",
    href: "https://architectjesse.co.ke/mansion.html",
  },
  {
    id: "membley-flats",
    index: "03",
    title: "Commercial Flats",
    location: "Membley, Ruiru",
    blurb:
      "A modern mixed-use tower — retail at street level with multiple balconied residential floors above.",
    tags: ["Mixed-use", "Retail", "High-rise"],
    category: "Commercial",
    image: "port-28",
    href: "https://architectjesse.co.ke/membley.html",
  },
  {
    id: "minimalist-maisonette",
    index: "04",
    title: "5-Bedroom Minimalist Maisonette",
    location: "Nairobi Metro",
    blurb:
      "A modern multi-level villa with a restrained minimalist language and open rooftop terraces.",
    tags: ["Minimalist", "Multi-level"],
    category: "Residential",
    image: "port-35",
    href: "https://architectjesse.co.ke/villa.html",
  },
  {
    id: "seven-bed-maisonette",
    index: "05",
    title: "Luxurious 7-Bedroom Maisonette",
    location: "Nairobi Metro",
    blurb:
      "A contemporary residence with large glazed openings, layered terraces and a paved arrival court.",
    tags: ["Luxury", "Contemporary"],
    category: "Residential",
    image: "port-46",
    href: "https://architectjesse.co.ke/villa.html",
  },
  {
    id: "home-office",
    index: "06",
    title: "Modern Home-Office Retreat",
    location: "Nairobi Metro",
    blurb:
      "A live-work retreat with expansive glass, crisp white volumes and elegant stone accents.",
    tags: ["Live-work", "Modern"],
    category: "Residential",
    image: "port-48",
    href: "https://architectjesse.co.ke/home-office.html",
  },
  {
    id: "mugutha-bungalow",
    index: "07",
    title: "Bungalows at Mugutha",
    location: "Mugutha, Kiambu",
    blurb:
      "A minimalist bungalow with full-height glazing, stone-clad piers and a rooftop terrace set in lawn.",
    tags: ["Bungalow", "Minimalist"],
    category: "Residential",
    image: "port-40",
    href: "https://architectjesse.co.ke/mugutha.html",
  },
];

export const categories: ("All" | Category)[] = ["All", "Residential", "Commercial"];

export const SITE_URL = "https://architectjesse.co.ke";
