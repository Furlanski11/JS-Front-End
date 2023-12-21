function addItem() {
    const value = document.querySelector('#newItemText').value;

    const item = document.createElement('li');
    item.textContent = value;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
     deleteButton.textContent = '[Delete]';
     item.appendChild(deleteButton);

     document.querySelector('ul').appendChild(item);
     document.getElementById('newItemText').value = '';

     deleteButton.addEventListener('click', deleter);

     function deleter(e){
        e.target.parentElement.remove();
     }
}