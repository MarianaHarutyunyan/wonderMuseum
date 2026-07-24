import { AppText } from '@components/ui/AppText';
import { GradientButton } from '@components/ui/GradientButton';
import { buttonVariants, type ButtonVariantToken } from '@theme';

interface AppButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariantToken;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const sizeFontScale = { sm: 'sm', md: 'md', lg: 'lg' } as const;

export function AppButton({ label, onPress, variant = 'primary', size = 'md', disabled = false }: AppButtonProps) {
  const preset = buttonVariants[variant];

  return (
    <GradientButton
      onPress={onPress}
      gradient={preset.gradient}
      radiusToken={preset.radius}
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
