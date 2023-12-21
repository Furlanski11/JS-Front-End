function sumTable() {
    const array = Array.from(document.querySelectorAll('td:nth-child(even)'));
    array.pop();
    let result = document.querySelector('#sum');
    let sum = 0;
     array.forEach(element => {
        sum += Number(element.innerHTML);
    })
    result.innerHTML = `${sum}`;
}