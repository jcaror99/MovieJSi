import { fetch } from './settings/settings.js';

const pagesBar = document.querySelector('.pages');

function pagesHtmlBar(startValue = 5) {
  const initialRangeArray = [];
  for (let i = 0; i < startValue; i += 1) {
    initialRangeArray.push(`<li class="pages_item">${i + 1}</li>`);
  }
  const renderBar = initialRangeArray.join('');
  return (pagesBar.innerHTML = renderBar);
}

pagesHtmlBar();

// window.addEventListener('load', () => {
//   fetch(1)
//     .then(ok => {

//       console.log(ok);
//     })
//     .catch(error => console.log(error));
// });
