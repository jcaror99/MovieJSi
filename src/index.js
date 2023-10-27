import { fetch } from './settings/settings.js';

const pagesBar = document.querySelector('.pages');

const requestFetch = page => {
  fetch(page)
    .then(ok => {
      console.log(ok);
    })
    .catch(error => console.log(error));
};

function pagesHtmlBar(startValue = 5) {
  const initialRangeArray = [];
  for (let i = 0; i < startValue; i += 1) {
    initialRangeArray.push(
      `<li data-id="${i + 1}" class="pages_item"><a href="javascript:void(0)">${
        i + 1
      }</a></li>`
    );
  }
  const renderBar = initialRangeArray.join('');
  return (pagesBar.innerHTML = renderBar);
}

pagesBar.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    const pageId = e.target.parentElement.getAttribute('data-id');
    requestFetch(pageId);
  }
});

// window.addEventListener('load', e => {
//   console.log(e);
// });

pagesHtmlBar();
