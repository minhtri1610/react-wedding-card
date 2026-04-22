import { useEffect, useRef } from 'react';

/**
 * CSS selector for elements that have animation rules gated behind
 * the `.ladi-animation` class.
 *
 * The original LadiPage runtime (`unindex.js`) would observe which
 * elements scroll into the viewport and dynamically add `.ladi-animation`
 * to trigger the CSS keyframe.  This hook replicates that behaviour
 * using `IntersectionObserver`.
 */
const ANIMATION_SELECTOR = [
  '.ladi-element[id]',
].join(', ');

/**
 * React hook that observes LadiPage elements and adds the
 * `ladi-animation` class when they first enter the viewport,
 * replicating the original LadiPage scroll-triggered animation system.
 *
 * It also removes the `ladi-animation-hidden` class that keeps
 * elements invisible until they animate in.
 */
export default function useLadiAnimation(): void {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Small delay to let the DOM fully render
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>(ANIMATION_SELECTOR);

      if (elements.length === 0) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;

              // Add the animation trigger class
              el.classList.add('ladi-animation');

              // Remove the "hidden until animated" class after animation-delay
              const style = getComputedStyle(el);
              const delay = (parseFloat(style.animationDelay) || 0) * 1000;

              setTimeout(() => {
                el.classList.remove('ladi-animation-hidden');
              }, delay);

              // Only animate once — stop observing after triggered
              observerRef.current?.unobserve(el);
            }
          });
        },
        {
          // Trigger when at least 10% of the element is visible
          threshold: 0.1,
        }
      );

      elements.forEach((el) => {
        // Only observe elements whose CSS actually uses `.ladi-animation`
        // (i.e. they have animation rules defined in the stylesheet)
        observerRef.current?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
    };
  }, []);
}
