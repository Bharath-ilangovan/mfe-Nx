import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MasterDataAppDispatch, MasterDataRootState } from '../store/store';

export const useMasterDataAppDispatch = () =>
  useDispatch<MasterDataAppDispatch>();
export const useMasterDataAppSelector: TypedUseSelectorHook<MasterDataRootState> =
  useSelector;
