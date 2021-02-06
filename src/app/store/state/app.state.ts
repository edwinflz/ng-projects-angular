import { headerFeatureName } from '@header/entities/header.constants';
import { HeaderState } from '@header/store/state/header.state';

export type State = Readonly<{
  [headerFeatureName]: HeaderState;
}>;
