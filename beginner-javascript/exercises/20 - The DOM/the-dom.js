// // 21. the DOM- selecting elements

// // const p = document.querySelector('p');
// // const imgs = document.querySelectorAll('.item img');
// // const item2 = document.querySelector('.item2');
// // const item2Image = item2.querySelector('img');
// // console.log(item2);

// 22. The DOM- element properties and methods

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the text-content property
// heading.textContent = 'wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerText);

// 23. the DOM- working with classes

// const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');

// console.log(pic.classList);

// function toggleRound() {
//   pic.classList.toggle('round');
// }

// pic.addEventListener('click', toggleRound);

// 24. the DOM- buid in and custom data atributes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute pup'; // setter
console.log(pic.alt); // getter
// console.log(pic.naturalWidth); // getter

pic.witdh = 200;

// pic.setAttribute ('alt', 'Really Cute Pup');
// console.log(pic.getAttribute('alt'));
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function () {
  alert(`welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
