import type { EmojiToken } from '@theme';

export type ShopCurrency = 'coins' | 'gems' | 'real';

export interface ShopOfferConfig {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly price: string;
  readonly currency: ShopCurrency;
  readonly icon: EmojiToken;
  readonly featured?: boolean;
}

export interface CurrencyPackConfig {
  readonly id: string;
  readonly currency: 'coins' | 'gems';
  readonly amount: number;
  readonly price: string;
  readonly icon: EmojiToken;
}
