const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  console.log({ payload });
  if (payload[0].intersectionRatio === 1) {
    button.removeAttribute('disabled');
    console.log('here');
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
