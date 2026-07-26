import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

interface CloudDecorationProps {
  size?: number;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

/** Soft layered vector cloud — decorative background element for bright sky sections. */
export function CloudDecoration({ size = 80, opacity = 0.85, style }: CloudDecorationProps) {
  return (
    <View style={style} pointerEvents="none">
      <Svg width={size} height={size * 0.6} viewBox="0 0 100 60" opacity={opacity}>
        <Ellipse cx="30" cy="38" rx="26" ry="18" fill="#FFFFFF" />
        <Ellipse cx="55" cy="26" rx="22" ry="20" fill="#FFFFFF" />
        <Ellipse cx="76" cy="38" rx="20" ry="15" fill="#FFFFFF" />
        <Ellipse cx="50" cy="42" rx="42" ry="14" fill="#FFFFFF" />
      </Svg>
    </View>
  );
}
