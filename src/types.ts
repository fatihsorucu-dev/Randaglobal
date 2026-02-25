import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  features?: string[];
  specs?: Record<string, string>;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}
