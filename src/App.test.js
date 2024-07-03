import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';


jest.useFakeTimers();

describe('useCounter', () => {

  const intervalIdRef = { current: null }; 

  test('it should increment count value by 2', () => {
    const { result } = renderHook(() => useCounter({ intervalIdRef, delay:1000, initialCountValue:0, incrementCountValue:2 }));

    act(() => {
      result.current.onMouseClick();
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.countValue).toBe(6);
  });
 

  jest.clearAllTimers();

  test('it should decrement count value', () => {
    const { result } = renderHook(() => useCounter({ intervalIdRef, delay:1000, initialCountValue:0, incrementCountValue:2 }));

    act(() => {
      result.current.onMouseClick();
      jest.advanceTimersByTime(3000);
      result.current.onMouseClickLeft();
    });

    expect(result.current.countValue).toBe(0);
    expect(intervalIdRef.current).toBe(undefined);
  });

  jest.clearAllTimers();

  test('it should increment count value by 5', () => {
    const { result } = renderHook(() => useCounter({ intervalIdRef, delay:1000, initialCountValue:0, incrementCountValue:5 }));

    act(() => {
      result.current.onMouseClick();
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.countValue).toBe(25);
  }); 

});
