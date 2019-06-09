import {
  useCallback
} from 'react';
import { h0 } from './fp';



export default function useNav(departDate, dispatch, prevDate, nextDate) {
  // 出发日期必须大于或等于今天
  const isPrevDisabled = h0(departDate) <= h0();
  const isNextDisabled = h0(departDate) - h0() > 20 * 86400 * 1000;
  
  // 如果 前一天被禁止时，不能调用dispatch修改 departDate
  const prev = useCallback(() => {
    if (isPrevDisabled) { return; }
    dispatch(prevDate());
  }, [isPrevDisabled]);

  const next = useCallback(() => {
    if (isNextDisabled) { return; }
    dispatch(nextDate());
  }, [isNextDisabled]);

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
  }
}