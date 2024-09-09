import { useEffect } from 'react';
/** 디바운싱(debouncing)기법을 이용한 커스텀 훅입니다.
 *
 *  첫 번째 인자는 'resize' 이벤트 발생 후 delay로 설정한 시간이 지나면 실행될 함수가 들어와야 합니다.
 *  딜레이 시간이 지나기 전에 'resize' 이벤트가 다시 혹은 여러 번 발생한다면
 *  마지막으로 'resize'이벤트가 발생한 뒤 delay로 설정한 시간 이후 첫 번째 인자로 받은 함수가
 *  실행됩니다.
 *
 *  두 번째 인자는 number 타입의 숫자를 넣어야 합니다 기본 값은 300(0.3초)입니다.
 *  delay는 기본 값이 존재하기에 생략할 수 있습니다.
 *
 *  사용 예시
 *  useResizeDebounceEffect(handleResize);
 *  useResizeDebounceEffect(calluser, 500);
 */
export function useResizeDebounceEffect(callback: () => void, delay: number = 300) {
  useEffect(() => {
    let timer: number | undefined = undefined;
    const getResize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        callback();
      }, delay);
    };
    window.addEventListener('resize', getResize);
    return () => {
      window.removeEventListener('resize', getResize);
    };
  }, [callback, delay]);
}
