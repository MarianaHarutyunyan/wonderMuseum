import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';

import { AppText } from '@components/ui/AppText';
import { useThemeColors } from '@hooks/useThemeColors';
import { radius } from '@theme';

interface AvatarProps {
  source?: ImageSourcePropType;
  /** Fallback initial shown when no `source` is provided. */
  label?: string;
  size?: number;
  ringColor?: string;
}

export function Avatar({ source, label, size = 56, ringColor }: AvatarProps) {
  const colors = useThemeColors();
  const dimension = { width: size, height: size, borderRadius: radius.avatar };

  return (
    <View
      style={[
        styles.ring,
        dimension,
        { borderColor: ringColor ?? colors.primary, backgroundColor: colors.surfaceElevated },
      ]}
    >
      {source ? (
        <Image source={source} style={[dimension, styles.image]} />
      ) : (
        <View style={[dimension, styles.fallback]}>
          <AppText size="lg" weight="extraBold" color={colors.primary}>
            {(label ?? '?').slice(0, 1).toUpperCase()}
          </AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
