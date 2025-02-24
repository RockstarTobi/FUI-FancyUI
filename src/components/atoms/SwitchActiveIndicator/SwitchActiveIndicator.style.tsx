import { styled, css } from 'styled-components';

import { spacingPx } from '../../../design/theme/designSizes';
import { IActiveSwitchIndicator } from './SwitchActiveIndicator';
import { generateBlob } from './utils/generateBlob';
import { generateTopline, generateUnderline } from './utils/generateLines';
import { TTheme } from '@/types/TTheme';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';

// Define the function to calculate the current position of the active indicator
type IClacCurrentPosition = IStyledPrefixAndPicker<IActiveSwitchIndicator, 'itemNumber' | 'tabSpacing' | 'direction'>;
const clacCurrentPosition = (props: IClacCurrentPosition) => {
  const { $itemNumber, $tabSpacing, $direction } = props;

  // Calculate the position in percent
  const itemPosition = ($itemNumber - 1) * 100 + '%';

  // Calculate the gap between the items
  const gapSpacing = $tabSpacing ? ($itemNumber - 1) * parseFloat(spacingPx[$tabSpacing]) : 0;

  // Calculate the current position of the active indicator
  const currentPosition = $itemNumber
    ? css`
        ${$direction === 'vertical'
          ? css`
              transform: translateY(calc(${itemPosition} + ${gapSpacing + 'px'}));
            `
          : css`
              transform: translateX(calc(${itemPosition} + ${gapSpacing + 'px'}));
            `}
      `
    : css`
        transform: translateX(0);
      `;

  // Return the styled-component CSS for the active indicator
  return currentPosition;
};

// --------------------------------------------------------------------------- //
// -------- Here is the main Generator Function of the activ indicator ------- //
// --------------------------------------------------------------------------- //
type TActiveSwitchIndicator = IStyledPrefixAndPicker<
  IActiveSwitchIndicator,
  'layer' | 'rounded' | 'outlined' | 'themeType' | 'type' | 'indicatorWidth'
>;
export const ActiveSwitchIndicator = styled.span<TActiveSwitchIndicator & { theme?: TTheme }>`
  position: absolute;
  width: ${({ $indicatorWidth }) => $indicatorWidth ?? '100%'}; /* Set the width of the active indicator */

  /* Build a switch case */
  ${(props) => {
    switch (props.$type) {
      case 'underline':
        return generateUnderline({ ...props });
      case 'topline':
        return generateTopline({ ...props });
      case 'bolb':
      default:
        return generateBlob({ ...props });
    }
  }}/* Calculate the current position of the active indicator */
`;

// the wrapper that handles the position of the active indicator
type IWrapper = IStyledPrefixAndPicker<IActiveSwitchIndicator, 'itemNumber' | 'tabSpacing' | 'direction'>;
export const Wrapper = styled.i<IWrapper>`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  ${({ $itemNumber, $tabSpacing, $direction }) => clacCurrentPosition({ $itemNumber, $tabSpacing, $direction })}
`;
