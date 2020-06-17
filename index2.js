// let titles = document.getElementsByClassName('title');

// titles = Array.from(titles);

// console.log(Array.isArray(titles));

// CONVERT COLLECTION TO ARRAY
// Array.from(titles).forEach(item => {
//   console.log(item);
// });

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// GET ALL THE SPAN TAGS
let books = document.querySelectorAll('#book-list li .name');
console.log(books);

// CONVERT BOOKS NODE LIST TO AN ARRAY
// Array.from(books).forEach(book => {
// console.log(book);
// console.log(book.textContent);
// book.textContent = 'test';
// book.textContent += ' (book title)';
// });

// CHANGE INNER HTML OF AN ELEMENT
// const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

// NODES - EVERYTHING IN THE DOM IS A NODE!
// FOR NODE TYPE NAMES REFERENCE www.w3schools.com
// const banner = document.querySelector('#page-banner');
// console.log(`#page-banner node type is: ${banner.nodeType}`);
// console.log(`#page-banner node name is: ${banner.nodeName}`);
// console.log(`#page-banner has child nodes: ${banner.hasChildNodes()}`);

// CLONE A NODE - NEED TO PASS IN 'TRUE' TO GET THE NESTED CONTENT OF THE NODE
// ALL THE CHILD ELEMENTS.  PASSING IN 'FALSE' WILL CLONE JUST THE PARENT ELEMENT
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// TRAVERSING THE DOM
const bookList = document.querySelector('#book-list');
// console.log('The parent node is:', bookList.parentNode);
console.log('The parent element is:', bookList.parentElement);
console.log('The parent element is:', bookList.parentElement.parentElement);
// console.log('The child nodes are:', bookList.childNodes);
console.log('The child elements are:', bookList.children);

// console.log('The next sibling is', bookList.nextSibling);
// console.log('The previous sibling is', bookList.previousSibling);

console.log('The previous element sibling is', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +=
  '<br/> tool cool for everyone else';

// REMOVE CONTENT FROM THE DOM
// const h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', e => {
//   console.log(e.target);
//   console.log(e.type);
// });

// let buttons = document.querySelectorAll('#book-list .delete');

// Array.from(buttons).forEach(button => {
//   button.addEventListener('click', e => {
//     const li = e.target.parentElement;

// Gets the ul element
//     li.parentNode.removeChild(li);
//   });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', e => {
//   e.preventDefault();
// });

// EVENT BUBBLING - BETTER WAY TO REMOVE ELEMENTS (DELETE BOOKS) FROM THE DOM
const list = document.querySelector('#book-list ul');

list.addEventListener('click', e => {
  // check the target element - looking for a button
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// ADD BOOKS
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get the value of an input field
  const value = addForm.querySelector('input[type="text"]').value;

  // Create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteButton = document.createElement('span');

  // Add content to the elements
  deleteButton.textContent = 'delete';
  bookName.textContent = value;

  // Add classes to elements
  bookName.classList.add('name');
  deleteButton.classList.add('delete');

  // Combine elements together and append to document
  li.appendChild(bookName);
  li.appendChild(deleteButton);
  list.appendChild(li);
});

// Hide all books - need to grab a reference to the checkbox
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', e => {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});

// Filter books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', e => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  // Convert html collection books into an array
  Array.from(books).forEach(book => {
    const title = book.firstElementChild.textContent;

    // This check will return a value of 1 if the string 'term' is found within the title
    // It will return a -1 if the string 'term' is not found within the title
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// Tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', e => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    // The 'dataset' looks for data attributes within html tags/elements
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});
