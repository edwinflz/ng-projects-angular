import { createSelector } from '@ngrx/store';

import { headerSelector } from '@header/store/selectors/header.selectors';
import { HeaderState } from '@header/store/state/header.state';

export const fetchHeaderStyle = createSelector(
  headerSelector,
  (state: HeaderState) => state.headerStyle
);
