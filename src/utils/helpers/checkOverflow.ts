export const checkOverflow = (el: HTMLElement) => {
  if (!el) return false;

  var isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

  return isOverflowing;
};
