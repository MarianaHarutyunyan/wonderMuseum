import type { CurrencyPackConfig, ShopOfferConfig } from '@/types/shop.types';

export const SHOP_OFFERS: readonly ShopOfferConfig[] = [
  { id: 'starter-pack', title: 'Starter Pack', subtitle: '150 coins + 50 gems', price: '$2.99', currency: 'real', icon: 'gift', featured: true },
  { id: 'remove-ads', title: 'Remove Ads', subtitle: 'No ads forever!', price: '$3.99', currency: 'real', icon: 'star' },
] as const;

export const COIN_PACKS: readonly CurrencyPackConfig[] = [
  { id: 'coins-small', currency: 'coins', amount: 500, price: '$0.99', icon: 'coin' },
  { id: 'coins-medium', currency: 'coins', amount: 2000, price: '$2.99', icon: 'coin' },
  { id: 'coins-large', currency: 'coins', amount: 6000, price: '$6.99', icon: 'coin' },
] as const;

export const GEM_PACKS: readonly CurrencyPackConfig[] = [
  { id: 'gems-small', currency: 'gems', amount: 100, price: '$0.99', icon: 'gem' },
  { id: 'gems-medium', currency: 'gems', amount: 300, price: '$1.99', icon: 'gem' },
  { id: 'gems-large', currency: 'gems', amount: 700, price: '$3.99', icon: 'gem' },
] as const;
