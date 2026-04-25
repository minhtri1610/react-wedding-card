import { useLayoutEffect, useRef } from 'react';

/**
 * CSS selector for elements that should be handled by the animation system.
 * We include all .ladi-element to ensure consistent behavior.
 */
const ANIMATION_SELECTOR = '.ladi-element';

/**
 * React hook that observes LadiPage elements and triggers animations.
 * 
 * To avoid the "flash" of content before animation, this hook:
 * 1. Uses useLayoutEffect to run synchronously before the browser paints.
 * 2. Works in tandem with a global CSS rule that sets .ladi-element { opacity: 0 }.
 * 3. Adds the .ladi-animation class which triggers the CSS keyframes.
 */
export default function useLadiAnimation(): void {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    // 1. Create the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            
            // Trigger animation
            el.classList.add('ladi-animation');

            // Remove hidden class if present
            const style = getComputedStyle(el);
            const delay = (parseFloat(style.animationDelay) || 0) * 1000;

            setTimeout(() => {
              el.classList.remove('ladi-animation-hidden');
            }, delay);

            // Once animated, we can stop observing
            observerRef.current?.unobserve(el);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully enters
      }
    );

    // 2. Function to observe elements
    const observeElements = (container: ParentNode = document) => {
      const elements = container.querySelectorAll<HTMLElement>(ANIMATION_SELECTOR);
      elements.forEach((el) => {
        // Only observe if it hasn't been animated yet
        if (!el.classList.contains('ladi-animation')) {
          observerRef.current?.observe(el);
        }
      });
    };

    // Initial sync observation (before paint)
    observeElements();

    // 3. Set up MutationObserver to handle lazy-loaded sections
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.matches(ANIMATION_SELECTOR)) {
              observerRef.current?.observe(node);
            }
            observeElements(node);
          }
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observerRef.current?.disconnect();
    };
  }, []);
}

