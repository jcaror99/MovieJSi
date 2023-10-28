import { fetch } from './settings/settings.js';

const pagesBar = document.querySelector('.pages');

const requestFetch = page => {
  fetch(page)
    .then(ok => {
      console.log(ok);
    })
    .catch(error => console.log(error));
};

function pagesHtmlBar(beginValue = 1, endValue = 5) {
  const initialRangeArray = [];
  for (let i = beginValue; i <= endValue; i += 1) {
    if (i === endValue && endValue <= 5) {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a class="pages_item" href="javascript:void(0)">${i}</a></li><li data-id="${
          i + 1
        }" class="nextPage"><a class="nextPage" href="javascript:void(0)">Next</a></li>`
      );
    } else {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a class="pages_item" href="javascript:void(0)">${i}</a></li>`
      );
    }
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
