import { Product } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';
import { createClient } from '@supabase/supabase-js';

export default async function ProductListingPage() {
  const page = searchParamsCache.get('page') || 1;
  const pageLimit = searchParamsCache.get('perPage') || 10;
  const offset = (page - 1) * pageLimit;

  // Використовуємо змінні оточення, які ми додали в Netlify
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Отримуємо дані безпосередньо з Supabase
  const { data, count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .range(offset, offset + pageLimit - 1);

  if (error) {
    console.error('Помилка Supabase:', error.message);
  }

  // Перетворюємо дані під формат таблиці
  const products: any = data || [];
  const totalProducts = count || 0;

  return (
    <ProductTable
      data={products}
      totalItems={totalProducts}
      columns={columns}
    />
  );
}
