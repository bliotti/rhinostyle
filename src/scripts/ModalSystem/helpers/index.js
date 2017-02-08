import React              from 'react';
import ReactDOM           from 'react-dom';
import { TweenMax, Expo } from 'gsap';

const modalContainer  = document.createElement('div');
modalContainer.setAttribute('data-js', 'modalContainer');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addModal(modal) {
  document.body.insertBefore(modalContainer, document.body.childNodes[0]);
  ReactDOM.render({ modal }, modalContainer);

  modal.modal.timeline.play();
}

export function refreshModal(modal) {
  ReactDOM.render({ modal }, modalContainer);
}

export function removeModal(modal) {
  modal.modal.timeline.reverse();
}
