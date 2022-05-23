import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../toolkitStore/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
