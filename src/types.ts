export interface Product {
  id: string;
  title: string;
  engTitle?: string;
  type: 'قالب' | 'افزونه' | 'ابزار' | 'کتابخانه';
  price: number | 'رایگان';
  description: string;
  image: string;
  size?: string;
  tags: string[];
  rating: number;
  featured?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  items: { number: string; name: string; ext: string; badge?: string }[];
  priceLabel: string;
  actionLabel: string;
}

export interface Course {
  id: string;
  title: string;
  duration?: string;
  description: string;
  progress: number;
  rating?: number;
  badge?: string;
  badge2?: string;
  image: string;
  status?: string;
}

export interface Review {
  id: string;
  avatar: string;
  username: string;
  rating: number;
  text: string;
}

export interface ChangelogItem {
  version: string;
  codename: string;
  date: string;
  changes: string[];
}

export interface SavedAsset {
  id: string;
  title: string;
  size: string;
  date: string;
  image: string;
}

export interface ActivityLog {
  id: string;
  text: string;
  time: string;
  type: 'download' | 'update' | 'course';
}
