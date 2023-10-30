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

function pagesHtmlBar(beginValue = 1, endValue = 5, itemActiveClass) {
  const initialRangeArray = [];

  for (let i = beginValue; i <= endValue; i += 1) {
    if (i === endValue && i === itemActiveClass) {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item pages_item--active"><a href="javascript:void(0)">${i}</a></li><li data-id="${
          i + 1
        }" class="pages_item" name="next"><a href="javascript:void(0)">Next</a></li>`
      );
    } else if (i === endValue && i !== itemActiveClass) {
      initialRangeArray.push(
        `<li data-id="${i}" class="pages_item"><a href="javascript:void(0)">${i}</a></li><li data-id="${
          i + 1
        }" class="pages_item" name="next"><a href="javascript:void(0)">Next</a></li>`
      );
    } else {
      if (i !== endValue && i === itemActiveClass) {
        initialRangeArray.push(
          `<li data-id="${i}" class="pages_item pages_item--active"><a href="javascript:void(0)">${i}</a></li>`
        );
      } else {
        initialRangeArray.push(
          `<li data-id="${i}" class="pages_item"><a href="javascript:void(0)">${i}</a></li>`
        );
      }
    }
  }

  const renderBar = initialRangeArray.join('');
  return (pagesBar.innerHTML = renderBar);
}

function clearActivePage(array, classToRemove) {
  const newArray = [...array];
  newArray.map(element => element.classList.remove(classToRemove));
}

window.addEventListener('load', () => {
  pagesHtmlBar(1, 5, 1);
});

pagesBar.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    loaderModal.classList.toggle('is-hidden');

    const allActiveSelectPage = document.querySelectorAll(
      '.pages_item--active'
    );
    const pageId = e.target.parentElement.getAttribute('data-id');
    const nextTag = e.target.parentElement.getAttribute('name');

    clearActivePage(allActiveSelectPage, 'pages_item--active');
    console.log(pageId);
    console.log(nextTag);
    console.log(e);

    if (nextTag === 'next') {
      pagesHtmlBar(pageId - 4, pageId, pageId);
      document
        .querySelector(`[data-id="${pageId}"]`)
        .classList.toggle('pages_item--active');
    } else {
      const fatherElement = e.target.parentElement;
      fatherElement.classList.toggle('pages_item--active');
    }

    requestFetch(pageId);
  }
});
