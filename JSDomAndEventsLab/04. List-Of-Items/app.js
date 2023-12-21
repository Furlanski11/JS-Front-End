function addItem() {
    let elementLi = document.createElement('li');
    let text = document.getElementById('newItemText').value;
    elementLi.appendChild(document.createTextNode(text));
    document.getElementById('items').appendChild(elementLi);
    document.getElementById('newItemText').value = '';
}