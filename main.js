var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit Event

form.addEventListener('submit',addItem);


itemList.addEventListener('click',removeItem);


filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');
    li.className='list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    // Appent Text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.append(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure to Delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }   
    }
}

function filterItems(e){
    // convert to lowerCase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    // Convert HTML collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}