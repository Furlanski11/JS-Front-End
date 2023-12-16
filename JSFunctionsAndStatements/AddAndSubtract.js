function index(num1, num2, num3){
    function sum(){
        return num1 + num2;
    }
    function subtract(){
        return sum() - num3;
    }
    const result = subtract();
    console.log(result);
}
index(1,2,4);