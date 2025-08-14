/**
 * Creates a DOM element with specified properties.
 * @param {string} type - The type of element (e.g., 'div', 'button'). Required.
 * @param {string} [className] - Class name(s) for the element.
 * @param {string} [text] - Text content for the element.
 * @param {Object} [attrs] - Additional attributes (e.g., { 'data-id': '1' }).
 * @param {Object} [events] - Event listeners (e.g., { click: () => console.log('Clicked') }).
 * @returns {HTMLElement} The created element.
 */
export default function createUiElement(type, className = '', text = '', attrs = {}, events = {}) {
  if (!type) throw new Error('Element type is required!');
  const element = document.createElement(type);

  if (className) element.className = className;

  if (text) element.textContent = text;

  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (value != null) element.setAttribute(key, value);
    }
  }

  if (events) {
    for (const [event, handler] of Object.entries(events)) {
      element.addEventListener(event, handler);
    }
  }

  return element;
}
