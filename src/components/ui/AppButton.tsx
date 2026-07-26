import { AppText } from '@components/ui/AppText';
import { GradientButton } from '@components/ui/GradientButton';
import { buttonVariants, radius, spacing, type ButtonVariantToken } from '@theme';

interface AppButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariantToken;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const sizeFontScale = { sm: 'sm', md: 'md', lg: 'lg' } as const;
const sizePaddingScale = { sm: spacing.xs, md: spacing.sm, lg: spacing.lg } as const;
const sizeRadiusScale = { sm: radius.md, md: radius.button, lg: radius.bottomSheet } as const;

export function AppButton({ label, onPress, variant = 'primary', size = 'md', disabled = false }: AppButtonProps) {
  const preset = buttonVariants[variant];

  return (
    <GradientButton
      onPress={onPress}
      gradient={preset.gradient}
      radiusToken={sizeRadiusScale[size]}
      paddingVertical={sizePaddingScale[size]}
      shadow={preset.shadow}
      disabled={disabled}
      accessibilityLabel={label}
    >
      <AppText size={sizeFontScale[size]} weight="bold" color={preset.textColor}>
        {label}
      </AppText>
    </GradientButton>
  );
}
