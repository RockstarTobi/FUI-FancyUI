import { TUiColorTypes } from '@/types/TUiColorTypes';
import { tabSwitchItemSizes } from './sizeSettings';
import { CSSProp } from 'styled-components';

export interface ITabSwitchDetailsLabelIcon {
  itemKey: string;
  label?: string;
  icon?: JSX.Element;
}

export interface ITabSwitchDetailsChildren {
  itemKey: string;
  children?: React.ReactNode;
}

export interface ITabSwitchButton {
  disabled?: boolean;
  selected: boolean;
  onClick: (key: string) => void;
  themeType?: TUiColorTypes;
  iconAlign?: 'left' | 'right';
  size?: keyof typeof tabSwitchItemSizes;
  externalStyle?: CSSProp;
}

export type ITabSwitchButtonProps = ITabSwitchButton & ITabSwitchDetailsChildren & ITabSwitchDetailsLabelIcon;
