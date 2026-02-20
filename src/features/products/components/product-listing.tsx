import { Product } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';
import { createClient } from '@supabase/supabase-js';

export default async function ProductListingPage() {
  const page = searchParamsCache.get('page') || 1;
  const pageLimit = searchParamsCache.get('perPage') || 10;
  const offset = (page - 1) * pageLimit;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data, count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .range(offset, offset + pageLimit - 1);

  if (error) {
    console.error('Supabase fetch error:', error.message);
  }

  // Обробляємо дані, щоб вони гарантовано підходили для таблиці
  const products = (data || []).map((item: any) => ({
    ...item,
    id: item.id?.toString() || Math.random().toString(), // Таблиця любить рядкові ID
    price: Number(item.price) || 0,
    created_at: item.created_at ? new Date(item.created_at).toISOString() : new Date().toISOString()
  }));

  const totalProducts = count || 0;

  return (
    <ProductTable
      data={products}
      totalItems={totalProducts}
      columns={columns}
    />
  );
}
