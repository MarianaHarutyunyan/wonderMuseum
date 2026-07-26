import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { Card } from '@components/ui/Card';
import { CurrencyPill } from '@components/ui/CurrencyPill';
import { Icon } from '@components/ui/Icon';
import { Toast } from '@components/ui/Toast';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { COIN_PACKS, GEM_PACKS, SHOP_OFFERS } from '@content/shop';
import { useCurrencyStore } from '@store/currencyStore';
import { colors, spacing } from '@theme';
import type { CurrencyPackConfig } from '@/types/shop.types';

export default function ShopScreen() {
  const coins = useCurrencyStore((state) => state.coins);
  const gems = useCurrencyStore((state) => state.gems);
  const addCoins = useCurrencyStore((state) => state.addCoins);
  const addGems = useCurrencyStore((state) => state.addGems);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleBuyPack = (pack: CurrencyPackConfig) => {
    if (pack.currency === 'coins') {
      addCoins(pack.amount);
    } else {
      addGems(pack.amount);
    }
    setToastMessage(`+${pack.amount} ${pack.currency} added!`);
  };

  return (
    <ScreenContainer>
      <Header title="Shop" onBack={router.back} />
      <Toast
        visible={toastMessage !== null}
        message={toastMessage ?? ''}
        variant="success"
        onDismiss={() => setToastMessage(null)}
      />
      <View style={styles.currencyRow}>
        <CurrencyPill icon="coin" value={coins} />
        <CurrencyPill icon="gem" value={gems} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppText size="md" weight="bold">
          Special Offers
        </AppText>
        <View style={styles.offerList}>
          {SHOP_OFFERS.map((offer) => (
            <Card key={offer.id} accentColor={offer.featured ? colors.warning : undefined}>
              <View style={styles.offerRow}>
                <Icon token={offer.icon} size={32} />
                <View style={styles.offerBody}>
                  <AppText size="md" weight="bold">
                    {offer.title}
                  </AppText>
                  <AppText size="xs" color={colors.textSecondary}>
                    {offer.subtitle}
                  </AppText>
                </View>
                <AppButton label={offer.price} size="sm" onPress={() => setToastMessage('Thanks for your support!')} />
              </View>
            </Card>
          ))}
        </View>

        <AppText size="md" weight="bold">
          Gems
        </AppText>
        <View style={styles.packGrid}>
          {GEM_PACKS.map((pack) => (
            <View key={pack.id} style={styles.packItem}>
              <PackCard pack={pack} onBuy={handleBuyPack} />
            </View>
          ))}
        </View>

        <AppText size="md" weight="bold">
          Coins
        </AppText>
        <View style={styles.packGrid}>
          {COIN_PACKS.map((pack) => (
            <View key={pack.id} style={styles.packItem}>
              <PackCard pack={pack} onBuy={handleBuyPack} />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

function PackCard({ pack, onBuy }: { pack: CurrencyPackConfig; onBuy: (pack: CurrencyPackConfig) => void }) {
  return (
    <Card>
      <View style={styles.packBody}>
        <Icon token={pack.icon} size={28} />
        <AppText size="md" weight="extraBold">
          {pack.amount}
        </AppText>
        <AppButton label={pack.price} size="sm" onPress={() => onBuy(pack)} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  currencyRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  offerList: {
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  offerBody: {
    flex: 1,
    gap: spacing.xxs,
  },
  packGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  packItem: {
    width: '30%',
  },
  packBody: {
    alignItems: 'center',
    gap: spacing.xs,
  },
});
