import { fetch } from './settings/settings.js';

const pagesBar = document.querySelector('.pages');
const loaderModal = document.querySelector('.loader-modal');

const requestFetch = page => {
  fetch(page)
    .then(ok => {
      console.log('Response async function: OK', ok);
    })
    .catch(error => console.log(error))
    .finally(() => {
      console.log('Finally');
      loaderModal.classList.toggle('is-hidden');
    });
};

function pagesHtmlBar(beginValue = 1, endValue = 5) {
  const initialRangeArray = [];
  for (let i = beginValue; i <= endValue; i += 1) {
    if (i === endValue && endValue <= 5) {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a href="javascript:void(0)">${i}</a></li><li data-id="${
          i + 1
        }" class="pages_item"><a href="javascript:void(0)">Next</a></li>`
      );
    } else if (i === 1) {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a href="javascript:void(0)">${i}</a></li>`
      );
    } else {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a href="javascript:void(0)">${i}</a></li>`
      );
    }
  }

  const renderBar = initialRangeArray.join('');
  return (pagesBar.innerHTML = renderBar);
}

function clearActivePage(array, classToRemove) {
  const newArray = [...array];
  newArray.map(element => element.classList.remove(classToRemove));
}

pagesBar.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    loaderModal.classList.toggle('is-hidden');
    const allActiveSelectPage = document.querySelectorAll(
      '.pages_item--active'
    );

    clearActivePage(allActiveSelectPage, 'pages_item--active');

    const fatherElement = e.target.parentElement;
    const currentElement = e.target;
    fatherElement.classList.toggle('pages_item--active');

    const pageId = e.target.parentElement.getAttribute('data-id');
    requestFetch(pageId);
  }
});

pagesHtmlBar();
