import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export const users: User[] = [];

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

// Це дані для списку останніх продажів на головній
export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Олександр М.',
    email: 'olexandr@email.com',
    amount: '+₴1,999.00',
    image: '',
    initials: 'ОМ'
  },
  {
    id: 2,
    name: 'Тетяна Л.',
    email: 'tanya.l@email.com',
    amount: '+₴390.00',
    image: '',
    initials: 'ТЛ'
  },
  {
    id: 3,
    name: 'Іван Н.',
    email: 'ivan.n@email.com',
    amount: '+₴2,900.00',
    image: '',
    initials: 'ІН'
  }
];

export const navItems: NavItem[] = [
  {
    title: 'Аналітика',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Аналітика'
  },
  {
    title: 'Склад (Взуття)',
    href: '/dashboard/product',
    icon: 'kanban',
    label: 'Склад'
  },
  {
    title: 'Клієнти',
    href: '/dashboard/user',
    icon: 'user',
    label: 'Клієнти'
  },
  {
    title: 'Замовлення',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'Замовлення'
  },
  {
    title: 'Профіль',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'Профіль'
  }
];
