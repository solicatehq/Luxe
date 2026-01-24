import { Brand, Project, RatePackage, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Rates', href: '#rates' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  // VIDEOS
  {
    id: '1',
    title: 'Morning Skincare Routine',
    category: 'UGC Reel',
    thumbnailUrl: '/luxephoto1.jpeg',
    videoUrl: '/luxevideo1.mp4',
    type: 'video',
  },
  {
    id: '2',
    title: 'Summer Outfit Haul',
    category: 'Lifestyle',
    thumbnailUrl: '/luxephoto2.jpeg',
    videoUrl: '/luxevideo2.mp4',
    type: 'video',
  },
  {
    id: '3',
    title: 'Product Unboxing: Serum',
    category: 'Product Demo',
    thumbnailUrl: '/luxephoto3.jpeg',
    videoUrl: '/luxevideo3.mp4',
    type: 'video',
  },
  {
    id: '4',
    title: 'Aesthetic Coffee Shop',
    category: 'Lifestyle Integration',
    thumbnailUrl: '/luxephoto4.jpeg',
    videoUrl: '/luxevideo4.mp4',
    type: 'video',
  },
  {
    id: '5',
    title: 'Jewelry Closeup',
    category: 'Aesthetic Shots',
    thumbnailUrl: '/luxephoto1.jpeg',
    videoUrl: '/luxevideo5.mp4',
    type: 'video',
  },
  // IMAGES
  {
    id: '6',
    title: 'Minimalist Decor',
    category: 'Photography',
    thumbnailUrl: '/luxephoto1.jpeg',
    type: 'image',
  },
  {
    id: '7',
    title: 'Fashion Editorial',
    category: 'Photography',
    thumbnailUrl: '/luxephoto2.jpeg',
    type: 'image',
  },
  {
    id: '8',
    title: 'Product Stylized',
    category: 'Photography',
    thumbnailUrl: '/luxephoto3.jpeg',
    type: 'image',
  },
  {
    id: '9',
    title: 'Café Vibes',
    category: 'Photography',
    thumbnailUrl: '/luxephoto4.jpeg',
    type: 'image',
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
    title: 'Non-Collaboration Package',
    price: '₹5,000',
    features: ['One Reel (Non-Collab)', 'One Carousel', 'One Story'],
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
    author: 'radiome',
    platform: 'Instagram',
    text: 'It was a really nice experience working with you Ayesha',
  },
  {
    id: '2',
    author: 'N4N',
    platform: 'Instagram',
    text: 'content with creativity in barter collab is so impressive will contact you for further collaborations❤️',
  },
  {
    id: '3',
    author: 'ossa perfume',
    platform: 'Instagram',
    text: 'We truly appreciate the effort you put into creating this amazing reel for our brand.It was wonderful collaborating with you!',
  },
  {
    id: '4',
    author: 'lascent perfume',
    platform: 'Instagram',
    text: 'Thank you so much for the wonderful collaboration. I’m really happy with the way you showcased my perfume-the content was creative, elegant, and perfectly aligned with the brand. The response has been very positive, and I truly appreciate the effort and professionalism you put into this project. Looking forward to working together again in the future 🌹✨',
  },
  {
    id: '5',
    author: 'Glow Alchemist',
    platform: 'Instagram',
    text: 'The aesthetic of the shots was exactly what we envisioned. Your attention to detail is unmatched. Loved working with you!',
  },
  {
    id: '6',
    author: 'Aurelia',
    platform: 'Instagram',
    text: 'Incredible turnaround time and stunning visuals. You perfectly captured the essence of our collection. Can\'t wait for the next campaign.',
  },
];