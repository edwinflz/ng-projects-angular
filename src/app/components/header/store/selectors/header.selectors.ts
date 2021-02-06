import { createFeatureSelector } from '@ngrx/store';

import { headerFeatureName } from '@header/entities/header.constants';
import { HeaderState } from '@header/store/state/header.state';

export const headerSelector = createFeatureSelector<HeaderState>(
  headerFeatureName
);
