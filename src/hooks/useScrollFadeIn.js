import { useRef, useCallback, useEffect } from "react";

function useScrollFadeIn() {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = "opactiy transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0,0,0)";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);
    }
    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    // 컴포넌트에서 사용하고 싶은 값들을 반환 {}
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate(0, 50%, 0)",
    },
  };
}

export default useScrollFadeIn;
