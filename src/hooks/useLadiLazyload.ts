import { useEffect } from 'react';

/**
 * LadiPage-compatible lazyload selectors.
 * Elements matching these selectors that are outside the viewport
 * get the `ladi-lazyload` class added on mount, then all instances
 * are removed on the first scroll event.
 */
const LAZYLOAD_SELECTORS = [
  'body.lazyload .ladi-overlay',
  'body.lazyload .ladi-box',
  'body.lazyload .ladi-button-background',
  'body.lazyload .ladi-collection-item',
  'body.lazyload .ladi-countdown-background',
  'body.lazyload .ladi-form-item-background',
  'body.lazyload .ladi-form-label-container .ladi-form-label-item.image',
  'body.lazyload .ladi-frame-background',
  'body.lazyload .ladi-gallery-view-item',
  'body.lazyload .ladi-gallery-control-item',
  'body.lazyload .ladi-headline',
  'body.lazyload .ladi-image-background',
  'body.lazyload .ladi-image-compare',
  'body.lazyload .ladi-list-paragraph ul li',
  'body.lazyload .ladi-section-background',
  'body.lazyload .ladi-survey-option-background',
  'body.lazyload .ladi-survey-option-image',
  'body.lazyload .ladi-tabs-background',
  'body.lazyload .ladi-video-background',
  'body.lazyload .ladi-banner',
  'body.lazyload .ladi-spin-lucky-screen',
  'body.lazyload .ladi-spin-lucky-start',
].join(', ');

/**
 * Detect passive event listener support (for older browsers).
 */
function supportsPassive(): boolean {
  let passive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        passive = true;
      },
    });
    window.addEventListener('testPassive', null as any, opts);
    window.removeEventListener('testPassive', null as any, opts);
  } catch (_e) {
    /* ignore */
  }
  return passive;
}

/**
 * React hook that replicates the LadiPage lazyload script behaviour.
 *
 * On mount:
 *   1. Mark every matching element that is outside the viewport with
 *      the `ladi-lazyload` CSS class.
 *   2. Remove the `lazyload` class from `<body>`.
 *   3. Remove the `#style_lazyload` element if it exists.
 *
 * On first scroll:
 *   Remove all `ladi-lazyload` classes so every element becomes visible.
 */
export default function useLadiLazyload(): void {
  useEffect(() => {
    // ── 1. Tag off-screen elements ──────────────────────────────
    const elements = document.querySelectorAll<HTMLElement>(LAZYLOAD_SELECTORS);

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const y = rect.y ?? rect.top;
      const offsetTop = y + window.scrollY;

      const isAboveViewport = window.scrollY >= offsetTop + el.offsetHeight;
      const isBelowViewport = offsetTop >= window.scrollY + window.innerHeight;

      if (isAboveViewport || isBelowViewport) {
        el.classList.add('ladi-lazyload');
      }
    });

    // ── 2. Clean up lazyload style tag ──────────────────────────
    const styleLazyload = document.getElementById('style_lazyload');
    if (styleLazyload) {
      styleLazyload.parentElement?.removeChild(styleLazyload);
    }

    // ── 3. Remove lazyload class from body ──────────────────────
    document.body.classList.remove('lazyload');

    // ── 4. On first scroll, reveal everything ───────────────────
    let initialScrollY = window.scrollY;

    const stopLazyload = (event: Event) => {
      // Ignore the first artificial scroll event (same position)
      if (event.type === 'scroll' && window.scrollY === initialScrollY) {
        initialScrollY = -1;
        return;
      }

      window.removeEventListener('scroll', stopLazyload);

      const lazyElements = document.getElementsByClassName('ladi-lazyload');
      while (lazyElements.length > 0) {
        lazyElements[0].classList.remove('ladi-lazyload');
      }
    };

    const listenerOptions = supportsPassive() ? { passive: true } : false;
    window.addEventListener('scroll', stopLazyload, listenerOptions as any);

    // ── Cleanup on unmount ──────────────────────────────────────
    return () => {
      window.removeEventListener('scroll', stopLazyload);
    };
  }, []);
}
