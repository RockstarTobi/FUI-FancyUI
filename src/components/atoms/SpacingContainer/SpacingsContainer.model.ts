import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TValue } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';

export type TSpacingsContainer = {
  padding?: TArrayToCssValues | TValue;
  margin?: TArrayToCssValues | TValue;
  externalStyle?: CSSProp;
};

export type TSpacingsContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TSpacingsContainerFullProps<T extends ElementType> = TSpacingsContainer & TSpacingsContainerHTMLProps<T>;
