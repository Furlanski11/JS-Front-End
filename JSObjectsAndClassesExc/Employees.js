function createListOfEmployees(input){
    let employee = {
        name: '',
        length: 0,
    }
    for(let i = 0; i < input.length; i++){
        employee.name = input[i];
        employee.length = input[i].length;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.length}`);
    }
}
createListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );