import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Avatar } from '@components/ui/Avatar';
import { AppText } from '@components/ui/AppText';
import { CurrencyPill } from '@components/ui/CurrencyPill';
import { ProgressBar } from '@components/ui/ProgressBar';
import { HERO_IMAGE, getHeroFaceCropStyle } from '@assets/images';
import { radius, spacing } from '@theme';

const AVATAR_SIZE = 44;
const ENERGY_REGEN_SECONDS = 150;

function formatCountdown(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/** Countdown to the next energy point, restarting every `ENERGY_REGEN_SECONDS`. */
function useEnergyRegenCountdown(active: boolean): string {
  const [secondsLeft, setSecondsLeft] = useState(ENERGY_REGEN_SECONDS);

  useEffect(() => {
    if (!active) {
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((current) => (current <= 1 ? ENERGY_REGEN_SECONDS : current - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  return formatCountdown(secondsLeft);
}

interface StatusBarProps {
  playerName: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  energy: number;
  maxEnergy: number;
  coins: number;
  gems: number;
  onAddCoins?: () => void;
  onAddGems?: () => void;
}

/** Top HUD row — avatar/level/xp on the left, currency pills on the right. Shared by Home and Shop. */
export function StatusBar({
  playerName,
  level,
  xp,
  xpToNextLevel,
  energy,
  maxEnergy,
  coins,
  gems,
  onAddCoins,
  onAddGems,
}: StatusBarProps) {
  const energyCountdown = useEnergyRegenCountdown(energy < maxEnergy);

  return (
    <View style={styles.row}>
      <View style={styles.identity}>
        <Avatar
          source={HERO_IMAGE}
          imageStyle={getHeroFaceCropStyle(AVATAR_SIZE - 6)}
          label={playerName}
          size={AVATAR_SIZE}
          levelBadge={level}
        />
        <View style={styles.identityText}>
          <AppText size="sm" weight="bold" numberOfLines={1} shadow>
            Hi, {playerName}!
          </AppText>
          <View style={styles.xpBar}>
            <ProgressBar progress={xp / xpToNextLevel} gradient="gold" height={6} />
          </View>
        </View>
      </View>
      <View style={styles.currencies}>
        <View style={styles.energyGroup}>
          <CurrencyPill icon="energy" value={`${energy}/${maxEnergy}`} />
          {energy < maxEnergy ? (
            <AppText size="xs" weight="bold" color="rgba(255,255,255,0.9)" shadow>
              {energyCountdown}
            </AppText>
          ) : null}
        </View>
        <CurrencyPill icon="coin" value={coins} onAdd={onAddCoins} />
        <CurrencyPill icon="gem" value={gems} onAdd={onAddGems} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
  },
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    flexShrink: 1,
  },
  identityText: {
    gap: spacing.xxs,
    flexShrink: 1,
    backgroundColor: 'rgba(8, 10, 32, 0.55)',
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  xpBar: {
    width: 100,
  },
  currencies: {
    gap: spacing.xxs,
    alignItems: 'flex-end',
  },
  energyGroup: {
    alignItems: 'flex-end',
    gap: 2,
  },
});
