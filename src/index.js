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

function clearActivePage(array) {
  const newArray = [...array];
  newArray.map(element => element.classList.remove('pages_item--active'));
}

pagesBar.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    console.log('click', e);
    const allActiveSelectPage = document.querySelectorAll(
      '.pages_item--active'
    );
    clearActivePage(allActiveSelectPage);

    const fatherElement = e.target.parentElement;
    const pageId = e.target.parentElement.getAttribute('data-id');
    fatherElement.classList.toggle('pages_item--active');
    requestFetch(pageId);
  }
});

pagesHtmlBar();
