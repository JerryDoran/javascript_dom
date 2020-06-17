/*** EXAMINE THE DOCUMENT OBJECT ***/
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

/*** SELECTORS TO QUERY THE DOM ***/
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';

/*** Have to use camel case spelling of css property 'border-bottom' in javascript */
// headerTitle.style.borderBottom = 'solid 3px #000';

/*** GET ELEMENTS BY CLASS NAME ***/
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

/*** CONVERT ITEMS COLLECTION TO AN ARRAY TO PERFORM A FOREACH LOOP ON IT ***/
// const itemsArray = Array.from(items);

// itemsArray.forEach(function(item) {
//   item.style.backgroundColor = 'blue';
// });

/*** GET ELEMENTS BY TAG NAME ***/
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//CONVERT ITEMS COLLECTION TO AN ARRAY TO PERFORM A FOREACH LOOP ON IT.
// const liArray = Array.from(li);
//
// liArray.forEach(function(li) {
//   li.style.backgroundColor = '#000';
//   li.style.color = 'white';
// })

/*** QUERY SELECTOR ***/
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.last-item');
// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'purple';

/*** QUERY SELECTOR ALL ***/
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');

/*** RETURNS A NODE LIST ***/
// console.log(odd);

// const even = document.querySelectorAll('li:nth-child(even)');

// odd.forEach(function(li) {
//   li.style.backgroundColor = '#f4f4f4';
// });

// even.forEach(function(li) {
//   li.style.backgroundColor = '#ccc';
// });

/*** TRAVERSING THE DOM  ***/
// const itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// console.log(itemList.nextElementSibling);

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

/*** CREATE HTML ELEMENTS ***/
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

/*** Insert into DOM ***/
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

//CREATING EVENTS.
// var button = document.querySelector('#button').addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Button clicked');
// document.getElementById('header-title').textContent = "Changed";
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+ e.target.id + '</h3>';

// console.log(e.type);

// From the browser window itself
// console.log(e.clientX);
// console.log(e.clientY);

// From the actual element that was clicked
// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// var button = document.querySelector('#button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mouseover', runEvent);

// These two events will fire if you hover the mouse over the parent element only
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// These two events will fire if you hover the mouse over the parent element or
// over any other elements in the parent container
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)
// box.addEventListener('mouseout', runEvent)

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
//
// form.addEventListener('submit', runEvent);
//
// function runEvent(e) {
//   e.preventDefault();
//   console.log('EVENT TYPE: ' + e.type);

// console.log(e.target.value);
// document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'
// output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>'

// box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
// document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
// }

// FINAL PROJECT CODE.

class TodoItem {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }
}
class UI {
  static DisplayTodoItems() {
    // Get all the todo items
    const todos = Store.GetTodos();

    // Display all the todo items
    todos.forEach(todo => UI.AddTodoToList(todo));
  }

  static AddTodoToList(todo) {
    const itemList = document.getElementById('items');

    //Create new li element.
    let li = document.createElement('li');
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(todo.item));

    // Create delete button element.
    let deleteButton = document.createElement('button');

    // Add classes to delete button.
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.setAttribute('data-id', todo.id);
    console.log(todo.id);

    // Append text node to delete button.
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to list.
    itemList.appendChild(li);
  }

  static ShowAlert(message, className) {
    const div = document.createElement('dive');
    div.className = `alert alert-${className} mb-3`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById('container');
    const card = document.querySelector('#main');

    container.insertBefore(div, card);

    // Message will vanish in 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  // CLEAR TEXT BOX
  static ClearFields() {
    document.querySelector('#item').value = '';
  }

  static RemoveItem(item) {
    if (item.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
        // we are clicking on the delete button and now we want the parent element
        // which is the li
        let li = item.parentElement;
        li.parentNode.removeChild(li);
      }
    }
  }
}
class Store {
  static GetTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    return todos;
  }

  // ADD TODO ITEM TO LOCAL STORAGE
  static AddItem(item) {
    const todos = Store.GetTodos();
    todos.push(item);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // DELETE TODO ITEM FROM LOCAL STORAGE
  static RemoveItem(item) {
    const todos = Store.GetTodos();
    let id = parseInt(item.dataset.id);
    console.log(id);
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
      }
    });

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

const form = document.getElementById('addForm');
form.addEventListener('submit', e => {
  // Prevent the normal submission of the form from happening
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Validate
  if (newItem === '') {
    UI.ShowAlert('Please fill in an item');
  } else {
    const todos = Store.GetTodos();
    let id = todos.length;
    const todo = new TodoItem(id, newItem);

    // Add todo item to list
    UI.AddTodoToList(todo);

    // Add todo item to Store
    Store.AddItem(todo);

    // Show success message
    UI.ShowAlert('Todo item added', 'success');

    // Clear the items field
    UI.ClearFields();
  }
});

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.DisplayTodoItems());

// REMOVE ITEM FROM LIST
document.getElementById('items').addEventListener('click', e => {
  // Remove item from UI
  UI.RemoveItem(e.target);

  Store.RemoveItem(e.target);
});

const filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

// Filter items
function filterItems(e) {
  // convert text typed into lowercase
  let text = e.target.value.toLowerCase();

  // Get li's from item list.
  const itemList = document.getElementById('items');
  const items = itemList.getElementsByTagName('li');

  // Convert items collection to an array.
  Array.from(items).forEach(item => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
