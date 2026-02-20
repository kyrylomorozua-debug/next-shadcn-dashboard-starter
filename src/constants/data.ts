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

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Олександр К.',
    email: 'olex.k@email.com',
    amount: '+₴1,900.00',
    image: '',
    initials: 'ОК'
  },
  {
    id: 2,
    name: 'Марія Д.',
    email: 'mariya@email.com',
    amount: '+₴3,500.00',
    image: '',
    initials: 'МД'
  },
  {
    id: 3,
    name: 'Ігор П.',
    email: 'igor.p@email.com',
    amount: '+₴2,200.00',
    image: '',
    initials: 'ІП'
  },
  {
    id: 4,
    name: 'Олена В.',
    email: 'olena.v@email.com',
    amount: '+₴1,100.00',
    image: '',
    initials: 'ОВ'
  },
  {
    id: 5,
    name: 'Андрій С.',
    email: 'andriy.s@email.com',
    amount: '+₴4,000.00',
    image: '',
    initials: 'АС'
  }
];

export const navItems: NavItem[] = [
  {
    title: 'Аналітика',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'dashboard'
  },
  {
    title: 'Клієнти',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Замовлення (Склад)',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Товари',
    href: '/dashboard/product',
    icon: 'kanban',
    label: 'product'
  },
  {
    title: 'Профіль',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Вихід',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
