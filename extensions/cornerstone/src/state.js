const state = {
  enabledElements: {},
};

/**
 * Sets the enabled element `dom` reference for an active viewport.
 * @param {HTMLElement} dom Active viewport element.
 * @return void
 */
const setEnabledElement = (viewportIndex, element) =>
  (state.enabledElements[viewportIndex] = element);

/**
 * Grabs the enabled element `dom` reference of an active viewport.
 *
 * @return {HTMLElement} Active viewport element.
 */
const getEnabledElement = viewportIndex => {
  // console.log('----XXXXXXX-----state en cornerstone getEnabledElement',state)
  state.enabledElements[viewportIndex]
};

export { setEnabledElement, getEnabledElement };
