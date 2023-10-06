// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

// GET ELEMENT BY ID

// console.log(document.getElementById('main-header'));
// document.getElementById('main-header').innerText='Nigga';
// document.getElementById('main-header').textContent='Nigga';
// document.getElementById('main-header').innerHTML='Nigga';
// document.getElementById('main-header').style.borderBottom='solid 10px red';

// Get Element by ClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello Pretty';

// items[2].style.backgroundColor = 'green';

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

// var item = document.getElementById('main-header');
// item.innerText='La La La La La';
// item.style.border ='2px solid black';

// var items = document.getElementById('main-header');

// console.log(document.getElementById('hello').textContent);

// var listItems= document.getElementsByTagName('li');
// console.log(listItems);
// for(var i = 0; i<listItems.length; i++){
//     if(i===4)
//         listItems[i].style.backgroundColor = 'skyblue';
    
// }

// var secondItems = document.querySelector('li:nth-child(2)');
// secondItems.style.color = 'blue' ;

// var thirdItems = document.querySelector('li:nth-child(3)');
// thirdItems.style.display = 'none' ;

// var liItems = document.querySelectorAll('li');
// liItems[1].style.color = 'green';

// var oddItems = document.querySelectorAll('li:nth-child(odd)');
// for(var i =0; i<oddItems.length; i++){
//     oddItems[i].style.backgroundColor = 'green';
// }

//Traversing the DOM
var itemList = document.querySelector('#items');
// ParentNode
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = '#CCC';

// ParentElement
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentNode);
// itemList.parentElement.style.backgroundColor = '#CCC';

// // childNode useless
// console.log(itemList.childNodes);

// // Chidren
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='skyblue';

// // FirstChid - useless
// console.log(itemList.firstChild);

// // FirstElementChid 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor='yellow';

// // LastChid - useless
// console.log(itemList.lastChild);

// // LastElementChid 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor='green';

// NextSibling
// console.log(itemList.nextSibling);

// // NextElementSibling
// console.log(itemList.nextElementSibling);

// PreviousSibling
// console.log(itemList.previousSibling);

// NextElementSibling
// console.log(itemList.previousElementSibling);

// CreateElement
// Create a div
var newDiv = document.createElement('div');
// Add Class
newDiv.className = 'hello';
// Add Id
newDiv.id = 'idhello';
// Add Attribute
newDiv.setAttribute('title','Hello Div');

// Create Text Node
var newDivText = document.createTextNode('Hello Worlds')

newDiv.appendChild(newDivText);

// Placing the div
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);

newDiv.style.fontSize ='30px';