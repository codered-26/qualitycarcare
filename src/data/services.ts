import {
  Wrench,
  Sparkles,
  Wind,
  Shield,
  Zap,
  Settings,
  Paintbrush,
  Package,
  Droplets,
  Circle,
  Star,
  Battery,
  AlertTriangle,
  Sun,
  DollarSign,
  Home,
  Hammer,
  FileText,
  type LucideIcon
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  category: 'Repair' | 'Detailing' | 'Electrical' | 'More';
}

export const services: Service[] = [
  {
    id: 'mechanical',
    title: 'Mechanical Work',
    description: 'Expert engine diagnostics and mechanical repairs.',
    icon: Wrench,
    image: '/car-mechanical-work.webp',
    category: 'Repair'
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    description: 'Premium paint protection for a lasting mirror finish.',
    icon: Sparkles,
    image: '/cermaic-coating.jpg',
    category: 'Detailing'
  },
  {
    id: 'ac-service',
    title: 'A/C Service',
    description: 'Complete cooling system maintenance and gas refill.',
    icon: Wind,
    image: '/Car-Ac-Service.jpg',
    category: 'Repair'
  },
  {
    id: 'anti-rust',
    title: 'Anti-Rust Coating',
    description: 'Underbody protection against corrosion and rust.',
    icon: Shield,
    image: '/anti-rust-coating.jpg',
    category: 'Detailing'
  },
  {
    id: 'electrical',
    title: 'Electrical Work',
    description: 'Precision troubleshooting for all electrical systems.',
    icon: Zap,
    image: '/electrical-work.jpg',
    category: 'Electrical'
  },
  {
    id: 'modification',
    title: 'Car Modification',
    description: 'Custom upgrades to make your car truly unique.',
    icon: Settings,
    image: '/car-modification.jpeg',
    category: 'More'
  },
  {
    id: 'painting',
    title: 'Tinkering & Painting',
    description: 'Expert body work and factory-finish paint jobs.',
    icon: Paintbrush,
    image: '/car-tinkering.jpg',
    category: 'Repair'
  },
  {
    id: 'accessories',
    title: 'Car Accessories',
    description: 'High-quality add-ons for comfort and style.',
    icon: Package,
    image: '/car-accessories.webp',
    category: 'More'
  },
  {
    id: 'wash',
    title: 'Water & Foam Wash',
    description: 'Thorough cleaning for that showroom-fresh look.',
    icon: Droplets,
    image: '/car-foam-wash.avif',
    category: 'Detailing'
  },
  {
    id: 'tyres',
    title: 'Tyres & Puncture',
    description: 'Quick puncture repairs and tyre replacement.',
    icon: Circle,
    image: '/tyre-puncture.png',
    category: 'Repair'
  },
  {
    id: 'polishing',
    title: 'Car Polishing',
    description: 'Restore your cars original shine and brilliance.',
    icon: Star,
    image: '/car-polishing.webp',
    category: 'Detailing'
  },
  {
    id: 'batteries',
    title: 'Batteries Repair',
    description: 'Battery testing, charging, and replacement.',
    icon: Battery,
    image: '/car-battery-repaire.webp',
    category: 'Electrical'
  },
  {
    id: 'breakdown',
    title: 'Breakdown Service',
    description: '24/7 roadside assistance when you need it most.',
    icon: AlertTriangle,
    image: '/car-breackdown.webp',
    category: 'More'
  },
  {
    id: 'sunfilm',
    title: 'Sun Film',
    description: 'High-quality heat protection for your windows.',
    icon: Sun,
    image: '/car-sunflim.jpg',
    category: 'More'
  },
  {
    id: 'buying-selling',
    title: 'Buying & Selling',
    description: 'Trusted platform for used car transactions.',
    icon: DollarSign,
    image: '/car-buy-sell.jpg',
    category: 'More'
  },
  {
    id: 'interior',
    title: 'Interior Cleaning',
    description: 'Deep cleaning for a hygienic and fresh cabin.',
    icon: Home,
    image: '/interior-cleaning.jpg',
    category: 'Detailing'
  },
  {
    id: 'denting',
    title: 'Denting & Painting',
    description: 'Seamless dent removal and paint matching.',
    icon: Hammer,
    image: '/Denting-Painting.webp',
    category: 'Repair'
  },
  {
    id: 'insurance',
    title: 'Insurance & More',
    description: 'Hassle-free insurance claims and paperwork.',
    icon: FileText,
    image: '/insurence.jpg',
    category: 'More'
  }
];
