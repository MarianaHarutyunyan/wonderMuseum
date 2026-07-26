import Svg, { Circle, Line, Path, Polygon, Polyline, Rect } from 'react-native-svg';

export type GlyphToken =
  | 'home'
  | 'worlds'
  | 'museum'
  | 'collection'
  | 'profile'
  | 'back'
  | 'forward'
  | 'close'
  | 'settings'
  | 'parent'
  | 'sound'
  | 'soundOff'
  | 'haptics'
  | 'play'
  | 'lock'
  | 'check'
  | 'plus'
  | 'edit'
  | 'decorate'
  | 'gift'
  | 'missions'
  | 'shop'
  | 'leaderboard'
  | 'statistics'
  | 'heart'
  | 'fire'
  | 'clock'
  | 'crown'
  | 'medal'
  | 'flag';

interface GlyphProps {
  color: string;
  strokeWidth: number;
}

/** 24x24 viewBox outline glyphs — consistent stroke-based "premium line icon" style. */
const GLYPHS: Record<GlyphToken, (props: GlyphProps) => React.ReactElement> = {
  home: ({ color, strokeWidth }) => (
    <>
      <Path d="M3 11L12 4l9 7" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  worlds: ({ color, strokeWidth }) => (
    <>
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Polygon points="12,7 14.5,12 12,17 9.5,12" fill={color} />
    </>
  ),
  museum: ({ color, strokeWidth }) => (
    <>
      <Polygon points="4,10 12,4 20,10" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
      <Line x1={4} y1={20} x2={20} y2={20} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Rect x={6.5} y={11} width={2} height={7} fill={color} />
      <Rect x={11} y={11} width={2} height={7} fill={color} />
      <Rect x={15.5} y={11} width={2} height={7} fill={color} />
    </>
  ),
  collection: ({ color, strokeWidth }) => (
    <>
      <Rect x={3.5} y={6.5} width={13} height={13} rx={2} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Rect x={7.5} y={2.5} width={13} height={13} rx={2} stroke={color} strokeWidth={strokeWidth} fill="none" />
    </>
  ),
  profile: ({ color, strokeWidth }) => (
    <>
      <Circle cx={12} cy={8} r={4} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Path d="M4 20c0-4.4 3.6-6.5 8-6.5s8 2.1 8 6.5" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    </>
  ),
  back: ({ color, strokeWidth }) => (
    <Polyline points="15,5 8,12 15,19" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  forward: ({ color, strokeWidth }) => (
    <Polyline points="9,5 16,12 9,19" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  close: ({ color, strokeWidth }) => (
    <>
      <Line x1={6} y1={6} x2={18} y2={18} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={18} y1={6} x2={6} y2={18} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  settings: ({ color, strokeWidth }) => (
    <>
      <Circle cx={12} cy={12} r={8} stroke={color} strokeWidth={strokeWidth} fill="none" strokeDasharray="2.6 2.6" />
      <Circle cx={12} cy={12} r={3} fill={color} />
    </>
  ),
  parent: ({ color, strokeWidth }) => (
    <>
      <Path
        d="M12 3l7 3v5.5c0 5-3 7.8-7 9-4-1.2-7-4-7-9V6l7-3z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={12} r={2} fill={color} />
    </>
  ),
  sound: ({ color, strokeWidth }) => (
    <>
      <Polygon points="3,10 3,14 7,14 12,18 12,6 7,10" fill={color} />
      <Path d="M15.5 9a4.2 4.2 0 0 1 0 6" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
      <Path d="M18 6.5a8 8 0 0 1 0 11" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    </>
  ),
  soundOff: ({ color, strokeWidth }) => (
    <>
      <Polygon points="3,10 3,14 7,14 12,18 12,6 7,10" fill={color} />
      <Line x1={15} y1={9} x2={20} y2={15} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={20} y1={9} x2={15} y2={15} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  haptics: ({ color, strokeWidth }) => (
    <>
      <Rect x={8} y={3} width={8} height={18} rx={2} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Line x1={4.5} y1={9} x2={4.5} y2={15} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={19.5} y1={9} x2={19.5} y2={15} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  play: ({ color }) => <Polygon points="8,5 20,12 8,19" fill={color} />,
  lock: ({ color, strokeWidth }) => (
    <>
      <Rect x={5} y={11} width={14} height={9} rx={2} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    </>
  ),
  check: ({ color, strokeWidth }) => (
    <Polyline points="5,13 10,18 19,7" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  plus: ({ color, strokeWidth }) => (
    <>
      <Line x1={12} y1={5} x2={12} y2={19} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={5} y1={12} x2={19} y2={12} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  edit: ({ color, strokeWidth }) => (
    <Path
      d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19 4 20z M13.5 6.5L17.5 10.5"
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  decorate: ({ color, strokeWidth }) => (
    <>
      <Line x1={5} y1={19} x2={14} y2={10} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M18 4l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill={color} />
    </>
  ),
  gift: ({ color, strokeWidth }) => (
    <>
      <Rect x={4} y={10} width={16} height={10} rx={1} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Rect x={3.5} y={6.5} width={17} height={3.5} rx={1} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Line x1={12} y1={7} x2={12} y2={20} stroke={color} strokeWidth={strokeWidth} />
      <Path d="M12 6.5c0-2-2-4-4-3s0 3 4 3z" fill={color} />
      <Path d="M12 6.5c0-2 2-4 4-3s0 3-4 3z" fill={color} />
    </>
  ),
  missions: ({ color, strokeWidth }) => (
    <>
      <Rect x={5.5} y={4} width={13} height={17} rx={2} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Rect x={9} y={2.3} width={6} height={3} rx={1} fill={color} />
      <Line x1={8.5} y1={11} x2={15.5} y2={11} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={8.5} y1={15} x2={15.5} y2={15} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  shop: ({ color, strokeWidth }) => (
    <>
      <Path d="M6 9h12l-1 10.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L6 9z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
      <Path d="M9 9V7a3 3 0 0 1 6 0v2" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    </>
  ),
  leaderboard: ({ color }) => (
    <>
      <Rect x={4} y={13} width={4} height={7} rx={1} fill={color} />
      <Rect x={10} y={8} width={4} height={12} rx={1} fill={color} />
      <Rect x={16} y={11} width={4} height={9} rx={1} fill={color} />
    </>
  ),
  statistics: ({ color, strokeWidth }) => (
    <>
      <Polyline points="4,17 10,11 14,15 20,6" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Polyline points="14,6 20,6 20,12" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  heart: ({ color }) => (
    <Path d="M12 20.3s-7.2-4.4-9.6-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.6 5.3c-2.4 4.6-9.6 9-9.6 9z" fill={color} />
  ),
  fire: ({ color }) => (
    <Path
      d="M12 21a6.5 6.5 0 0 1-6.5-6.5c0-3.7 2.8-5.6 3.8-9.2 1 1.8 1 3.6 2.7 3.6s1-2.6 0-4.4c3 1.8 6.5 5.3 6.5 10a6.5 6.5 0 0 1-6.5 6.5z"
      fill={color}
    />
  ),
  clock: ({ color, strokeWidth }) => (
    <>
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Line x1={12} y1={12} x2={12} y2={7} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Line x1={12} y1={12} x2={16} y2={13.5} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  crown: ({ color, strokeWidth }) => (
    <>
      <Polygon points="3,17 6,8 12,13 18,8 21,17" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
      <Line x1={3} y1={19.5} x2={21} y2={19.5} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </>
  ),
  medal: ({ color, strokeWidth }) => (
    <>
      <Polyline points="9,3 9,10 12,8.3 15,10 15,3" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
      <Circle cx={12} cy={15} r={6} stroke={color} strokeWidth={strokeWidth} fill="none" />
      <Circle cx={12} cy={15} r={2.4} fill={color} />
    </>
  ),
  flag: ({ color, strokeWidth }) => (
    <>
      <Line x1={5} y1={3} x2={5} y2={21} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M5 4h13l-3 4 3 4H5z" fill={color} />
    </>
  ),
};

interface GlyphIconProps {
  token: GlyphToken;
  size: number;
  color: string;
  strokeWidth?: number;
}

export function GlyphIcon({ token, size, color, strokeWidth = 1.8 }: GlyphIconProps) {
  const Glyph = GLYPHS[token];
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Glyph color={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}
