import { IFancyPill } from '@/components/atoms/FancyPill/FancyPill.model';
import { StyledFancyPill } from '@/components/atoms/FancyPill/FancyPill.styled';

// --------------------------------------------------------------------------- //
// --------------  A Pill can be used for style and user actions ------------- //
// --------------------------------------------------------------------------- //
export default function FancyPill(props: IFancyPill) {
  const { layer, themeType, outlined, outlinedBackgroundStrength, externalStyle, isActive, isHoverable, ...htmlProps } =
    props;

  return (
    <StyledFancyPill
      $layer={layer}
      $outlined={outlined}
      $isActive={isActive}
      $themeType={themeType}
      $isHoverable={isHoverable}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyPill>
  );
}
