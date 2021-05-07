/**
 *
 * @param {string} element
 * @param {object} param1
 * @returns Element
 */
export function makeElement(element, attrs = {}) {
  const e = document.createElement(element);

  if (attrs.hasOwnProperty('text'))
    e.textContent = attrs.text;

  if (attrs.hasOwnProperty('style'))
    e.classList.add(attrs.style);

  if (attrs.hasOwnProperty('src'))
    e.src = attrs.src;

  if (attrs.hasOwnProperty('href'))
    e.href = attrs.href;

  return e;
}
