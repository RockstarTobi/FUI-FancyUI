import React from 'react';
import { css } from 'styled-components';

import { Button } from '@/components/molecules/Button';
import { FancyContent } from '@/components/molecules/FancyContent';
import { LoadingSVGArrows } from '@/components/atoms/LoadingSVGArrows';
import { generateFancyButton } from './FancyButton.style';

import { TTypographyList } from '@/types/TTypographyList';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { IButton, IButtonProps } from '@/components/molecules/Button/Button.model';

const alignment = {
  left: 'flex-start' as const,
  right: 'flex-end' as const,
  center: 'center' as const,
};

export type IFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  borderRadius?: TBorderRadiusSizes;
  oneToOne?: boolean;
  icon?: React.ReactNode;
  fontVariant?: TTypographyList;
  noPadding?: boolean;
  gap?: string;
};

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type IFancyButton = IFancyButtonProps & IButton;
export default function FancyButton(props: IFancyButton) {
  const {
    icon,
    label,
    isLoading,
    iconAlign,
    size,
    align,
    externalStyle,
    oneToOne,
    noPadding,
    fontVariant,
    borderRadius,
    gap,
    ...buttonProps
  } = {
    ...defaultProps,
    ...props,
  };

  const generateFancyStyle = generateFancyButton({
    $size: size,
    $borderRadius: borderRadius,
    $oneToOne: oneToOne || (Boolean(!label) && Boolean(icon)),
    $outlined: props.outlined,
    $justifyContent: alignment[align ?? 'center'],
    $noPadding: noPadding,
  });

  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      size={size}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...(buttonProps as IButtonProps)}
    >
      <FancyContent direction={alignIcon} gapBetweenIcon={gap}>
        {label && (
          <FancyContent.Title fontVariant={fontVariant ?? 'button'} themeType={buttonProps.textColor}>
            {label}
          </FancyContent.Title>
        )}
        {(isLoading || icon) && (
          <FancyContent.Icon>
            {isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : icon}
          </FancyContent.Icon>
        )}
      </FancyContent>
    </Button>
  );
}

const defaultProps: IFancyButton = {
  themeType: 'accent',
  size: 'md',
  align: 'center',
};
