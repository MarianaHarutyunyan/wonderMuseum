import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import { AppButton } from '@components/ui/AppButton';
import { AppText } from '@components/ui/AppText';
import { CurrencyPill } from '@components/ui/CurrencyPill';
import { ListRow } from '@components/ui/ListRow';
import { SegmentedTabs } from '@components/ui/SegmentedTabs';
import { Header } from '@components/layout/Header';
import { ScreenContainer } from '@components/layout/ScreenContainer';
import { MISSIONS } from '@content/missions';
import { useCurrencyStore } from '@store/currencyStore';
import { useMissionsStore } from '@store/missionsStore';
import { spacing } from '@theme';
import type { MissionCategory } from '@/types/missions.types';

const TABS: { key: MissionCategory; label: string }[] = [
  { key: 'daily', label: 'Daily' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'achievements', label: 'Achievements' },
];

export default function MissionsScreen() {
  const [activeTab, setActiveTab] = useState<MissionCategory>('daily');
  const progress = useMissionsStore((state) => state.progress);
  const claimed = useMissionsStore((state) => state.claimed);
  const claimMission = useMissionsStore((state) => state.claimMission);
  const addCoins = useCurrencyStore((state) => state.addCoins);

  const missions = useMemo(() => MISSIONS.filter((mission) => mission.category === activeTab), [activeTab]);

  return (
    <ScreenContainer>
      <Header title="Missions" onBack={router.back} />
      <View style={styles.tabsWrap}>
        <SegmentedTabs options={TABS} activeKey={activeTab} onSelect={(key) => setActiveTab(key as MissionCategory)} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {missions.map((mission) => {
          const current = Math.min(mission.target, progress[mission.id] ?? 0);
          const isComplete = current >= mission.target;
          const isClaimed = Boolean(claimed[mission.id]);

          return (
            <ListRow
              key={mission.id}
              icon={mission.icon}
              title={mission.title}
              progress={current / mission.target}
              progressLabel={`${current}/${mission.target}`}
              completed={isClaimed}
              trailing={
                isComplete && !isClaimed ? (
                  <AppButton
                    label="Claim"
                    size="sm"
                    variant="success"
                    onPress={() => {
                      claimMission(mission.id);
                      addCoins(mission.rewardCoins);
                    }}
                  />
                ) : (
                  <CurrencyPill icon="coin" value={mission.rewardCoins} />
                )
              }
            />
          );
        })}
        {missions.length === 0 ? <AppText size="sm">No missions here yet.</AppText> : null}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  tabsWrap: {
    marginBottom: spacing.sm,
  },
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
});
