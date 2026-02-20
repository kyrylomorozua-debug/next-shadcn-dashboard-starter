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
    url: '/dashboard', // ЗАМІНЕНО href НА url
    icon: 'dashboard',
    label: 'dashboard'
  },
  {
    title: 'Клієнти',
    url: '/dashboard/user', // ЗАМІНЕНО href НА url
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Замовлення (Склад)',
    url: '/dashboard/employee', // ЗАМІНЕНО href НА url
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Товари',
    url: '/dashboard/product', // ЗАМІНЕНО href НА url
    icon: 'kanban',
    label: 'product'
  },
  {
    title: 'Профіль',
    url: '/dashboard/profile', // ЗАМІНЕНО href НА url
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Вихід',
    url: '/', // ЗАМІНЕНО href НА url
    icon: 'login',
    label: 'login'
  }
];
