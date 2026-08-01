import { useCallback, useMemo } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { AnimatedButton } from "@components/ui/AnimatedButton";
import { AppText } from "@components/ui/AppText";
import { Icon } from "@components/ui/Icon";
import { IconButton } from "@components/ui/IconButton";
import { StatusBar } from "@components/layout/StatusBar";
// import { CollectibleChip } from "@features/collectibles/components/CollectibleChip";
// import { COLLECTIBLE_TYPES } from "@content/rewards";
import { HERO_IMAGE, MUSEUM_IMAGE } from "@assets/images";
import { useCurrencyStore } from "@store/currencyStore";
import { useMissionsStore } from "@store/missionsStore";
import { useProfileStore } from "@store/profileStore";
import { useProgressStore } from "@store/progressStore";
import { WORLDS } from "@content/worlds";
import { MISSIONS } from "@content/missions";
import { ROUTES } from "@navigation";
import { TAB_BAR_CLEARANCE } from "@constants";
import { gradientAngles, gradients, radius, shadows, spacing } from "@theme";

export default function HomeScreen() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const profile = useProfileStore();
  const currency = useCurrencyStore();
  const completedLevelIds = useProgressStore(
    (state) => state.completedLevelIds,
  );
  // const collectibles = useProgressStore((state) => state.collectibles);
  const canClaimDailyReward = useMissionsStore((state) =>
    state.canClaimDailyReward(),
  );

  const nextWorld = useMemo(
    () =>
      WORLDS.find((world) =>
        world.levels.some((level) => !completedLevelIds.includes(level.id)),
      ) ?? WORLDS[0],
    [completedLevelIds],
  );
  const openMissionsCount = useMemo(
    () => MISSIONS.filter((mission) => mission.category === "daily").length,
    [],
  );

  const handlePlay = useCallback(() => {
    if (nextWorld) {
      router.push(ROUTES.world(nextWorld.id));
    }
  }, [nextWorld]);

  return (
    <View style={styles.root}>
      <Image
        source={MUSEUM_IMAGE}
        style={[
          styles.backgroundImage,
          { width: windowWidth, height: windowHeight },
        ]}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.topBar}>
          <StatusBar
            playerName={profile.playerName}
            level={profile.level}
            xp={profile.xp}
            xpToNextLevel={profile.xpToNextLevel}
            energy={currency.energy}
            maxEnergy={currency.maxEnergy}
            coins={currency.coins}
            gems={currency.gems}
            onAddCoins={() => router.push(ROUTES.shop)}
            onAddGems={() => router.push(ROUTES.shop)}
          />
        </View>

        <View style={styles.body}>
          <View style={styles.quickMenu}>
            <IconButton
              icon="gift"
              accessibilityLabel="Daily Reward"
              accentGradient={gradients.pink}
              badgeCount={canClaimDailyReward ? 1 : undefined}
              onPress={() => router.push(ROUTES.dailyReward)}
            />
            <IconButton
              icon="missions"
              accessibilityLabel="Missions"
              accentGradient={gradients.blue}
              badgeCount={openMissionsCount}
              onPress={() => router.push(ROUTES.missions)}
            />
            <IconButton
              icon="museum"
              accessibilityLabel="Museum"
              accentGradient={gradients.purple}
              onPress={() => router.push(ROUTES.museum)}
            />
            <IconButton
              icon="shop"
              accessibilityLabel="Shop"
              accentGradient={gradients.orange}
              onPress={() => router.push(ROUTES.shop)}
            />
          </View>

          <View style={styles.titleWrap}>
            <View style={styles.titleTextWrap}>
              <AppText
                variant="title"
                weight="extraBold"
                color="rgba(30, 58, 138, 0.55)"
                style={styles.titleShadowLayer}
              >
                WONDER
              </AppText>
              <AppText variant="title" weight="extraBold" color="#FFFFFF">
                WONDER
              </AppText>
            </View>
            <View style={styles.titleTextWrap}>
              <AppText
                variant="titleXl"
                weight="extraBold"
                color="rgba(140, 70, 10, 0.6)"
                style={styles.titleShadowLayer}
              >
                MUSEUM
              </AppText>
              <AppText variant="titleXl" weight="extraBold" color="#FFA63A">
                MUSEUM
              </AppText>
            </View>
            <LinearGradient
              colors={gradients.purple}
              start={gradientAngles.horizontal.start}
              end={gradientAngles.horizontal.end}
              style={[styles.subtitlePill, shadows.md]}
            >
              <LinearGradient
                colors={["rgba(255,255,255,0.35)", "rgba(255,255,255,0)"]}
                start={gradientAngles.vertical.start}
                end={gradientAngles.vertical.end}
                style={styles.subtitleGloss}
                pointerEvents="none"
              />
              <AppText size="xs" weight="extraBold" color="#FFFFFF">
                Learn • Explore • Collect
              </AppText>
            </LinearGradient>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.heroWrap}>
              <View style={styles.heroImageCrop}>
                <Image
                  source={HERO_IMAGE}
                  style={styles.heroCharacterImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.ctaBlock}>
              <AnimatedButton
                onPress={handlePlay}
                accessibilityLabel="Continue Adventure"
                pressScale={0.96}
              >
                <LinearGradient
                  colors={gradients.gold}
                  start={gradientAngles.diagonal.start}
                  end={gradientAngles.diagonal.end}
                  style={[styles.playButton, shadows.lg]}
                >
                  <LinearGradient
                    colors={["rgba(255,255,255,0.4)", "rgba(255,255,255,0)"]}
                    start={gradientAngles.vertical.start}
                    end={gradientAngles.vertical.end}
                    style={styles.playGloss}
                    pointerEvents="none"
                  />
                  <View style={styles.playRow}>
                    <View style={styles.playIconCircle}>
                      <Icon token="play" size={14} color="#FFFFFF" />
                    </View>
                    <View>
                      <AppText
                        size="lg"
                        weight="extraBold"
                        color="#FFFFFF"
                        shadow
                      >
                        PLAY
                      </AppText>
                      <AppText
                        size="xs"
                        weight="bold"
                        color="rgba(255,255,255,0.9)"
                      >
                        Continue Adventure
                      </AppText>
                    </View>
                  </View>
                </LinearGradient>
              </AnimatedButton>

              {/* <View style={styles.chipsRow}>
                {COLLECTIBLE_TYPES.map((collectibleType) => (
                  <CollectibleChip
                    key={collectibleType.id}
                    label={collectibleType.label}
                    count={collectibles[collectibleType.id]}
                    colorToken={collectibleType.colorToken}
                    icon={collectibleType.icon}
                  />
                ))}
              </View> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  safeArea: {
    flex: 1,
  },
  topBar: {
    paddingHorizontal: spacing.md,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: TAB_BAR_CLEARANCE,
  },
  quickMenu: {
    position: "absolute",
    top: spacing.xs,
    right: spacing.md,
    gap: spacing.sm,
  },
  titleWrap: {
    marginTop: spacing.md,
    paddingRight: 64,
    gap: 0,
    alignItems: "flex-start",
  },
  titleTextWrap: {
    justifyContent: "center",
  },
  titleShadowLayer: {
    position: "absolute",
    top: 3,
    left: 0,
  },
  subtitlePill: {
    marginTop: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    overflow: "hidden",
  },
  subtitleGloss: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: spacing.xs,
  },
  heroWrap: {
    alignItems: "center",
    paddingLeft: spacing.xs,
  },
  heroImageCrop: {
    width: 195,
    height: 236,
    overflow: "hidden",
  },
  heroCharacterImage: {
    width: 195,
    height: 293,
  },
  ctaBlock: {
    gap: spacing.sm,
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.lg,
    overflow: "hidden",
    alignSelf: "center",
  },
  playGloss: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "55%",
  },
  playRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  playIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.28)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  chipsRow: {
    flexDirection: "row",
    gap: spacing.xs,
  },
});
