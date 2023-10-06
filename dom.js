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
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor='skyBlue';
// }

var item = document.getElementById('main-header');
item.innerText='La La La La La';
item.style.border ='2px solid black';

document.getElementById('add').style.color='green';
document.getElementById('add').style.fontWeight='bold';