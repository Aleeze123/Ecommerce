import { NextResponse } from 'next/server';
import { products } from '@/app/data/products';

export async function GET() {
  return NextResponse.json(products);
}
