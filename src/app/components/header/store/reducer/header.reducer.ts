import { Action, createReducer, on } from '@ngrx/store';

import { HEADER_STYLE, HEADER_STYLES } from '@header/entities/header.constants';
import { Header } from '@header/entities/header.interface';
import { setHeaderStyleAction } from '@header/store/actions/header.actions';

export const initialState: Header = HEADER_STYLES.find(
  (item) => item.classType === HEADER_STYLE.NONE
);

const reducer = createReducer(
  initialState,
  on(setHeaderStyleAction, (state, { selection }) => {
    const headerStyles = {
      ...HEADER_STYLES.find((item) => item.classType === selection.style),
    };
    return {
      ...headerStyles,
      title: selection.title,
      type: selection.type
    };
  })
);

export function headerStyleReducer(state: Header, action: Action): Header {
  return reducer(state, action);
}
