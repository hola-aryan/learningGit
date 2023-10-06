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

var secondItems = document.querySelector('li:nth-child(2)');
secondItems.style.color = 'blue' ;

var thirdItems = document.querySelector('li:nth-child(3)');
thirdItems.style.display = 'none' ;

var liItems = document.querySelectorAll('li');
liItems[1].style.color = 'green';

var oddItems = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i<oddItems.length; i++){
    oddItems[i].style.backgroundColor = 'green';
}