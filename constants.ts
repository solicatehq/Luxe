import { Brand, Project, RatePackage, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Rates', href: '#rates' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Morning Skincare Routine',
    category: 'UGC Reel',
    // Aesthetic bathroom sink/skincare
    thumbnailUrl: 'https://images.unsplash.com/photo-1556228720-19de75252874?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Summer Outfit Haul',
    category: 'Lifestyle',
    // Fashion/mirror selfie vibe
    thumbnailUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Product Unboxing: Serum',
    category: 'Product Demo',
    // Minimalist product shot
    thumbnailUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Aesthetic Coffee Shop',
    category: 'Lifestyle Integration',
    // Coffee shop interior
    thumbnailUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Jewelry Closeup',
    category: 'Aesthetic Shots',
    // Jewelry detail
    thumbnailUrl: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Night Routine Voiceover',
    category: 'Voiceover',
    // Cozy bed/book
    thumbnailUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop',
  },
];

export const BRANDS: Brand[] = [
  { name: 'Dot & Key', type: 'Domestic' },
  { name: 'Foxtale', type: 'Domestic' },
  { name: 'Swiss Beauty', type: 'Domestic' },
  { name: 'Rudementary', type: 'Domestic' },
  { name: 'Lascent', type: 'Domestic' },
  { name: 'BellaVita', type: 'Domestic' },
  { name: 'Glossier (Collab)', type: 'International' },
  { name: 'CeraVe (Collab)', type: 'International' },
  { name: 'The Ordinary (Collab)', type: 'International' },
];

export const RATES: RatePackage[] = [
  {
    title: 'Collaboration Reel',
    price: '₹2,000',
    features: ['1 Instagram Reel (30-60s)', 'Story Mention', 'Product Integration', 'Rights: Organic usage'],
  },
  {
    title: 'Non-Collaboration Reel',
    price: '₹5,000',
    features: ['1 High-Quality Reel', 'Story Mention', 'Scripting & Editing', 'Rights: Organic usage'],
    isHighlight: true,
  },
  {
    title: 'Ad Usage Rights',
    price: '₹500',
    features: ['Per Month', 'Paid Ad Usage', 'Whitelisting Available'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Marketing Manager @ Foxtale',
    platform: 'WhatsApp',
    text: 'The video quality was amazing! Exactly the aesthetic we were looking for. High conversion on this one.',
  },
  {
    id: '2',
    author: 'Founder @ Rudementary',
    platform: 'Instagram',
    text: 'Loved how natural the integration felt. You really understood the brand vibe perfectly.',
  },
  {
    id: '3',
    author: 'Agency Partner',
    platform: 'WhatsApp',
    text: 'Super professional to work with. Timely delivery and minimal edits needed. Will book again!',
  },
  {
    id: '4',
    author: 'Social Lead @ Swiss Beauty',
    platform: 'Instagram',
    text: 'The best UGC creator we have worked with this quarter. The lighting was impeccable.',
  },
];