import { fetch } from './settings/settings.js';

window.addEventListener('load', () => {
  fetch(1)
    .then(ok => console.log(ok))
    .catch(error => console.log(error));
});
