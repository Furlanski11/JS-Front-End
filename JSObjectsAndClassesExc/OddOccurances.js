function oddOccurances(input){
    const toLowerCase = input.toLowerCase().split(' ');
    const inputArray = toLowerCase.reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    toLowerCase.forEach((element) => {
        if(inputArray.hasOwnProperty(element)){
            inputArray[element]++;
        }
    });

    let oddElements = [];
    Object.entries(inputArray)
    .sort(([, a], [, b]) => b - a)
    .forEach(([word, occurrences]) => {
      if (occurrences % 2 === 1) {
        oddElements.push(word);
      }
    });
    console.log(oddElements.join(' '));
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')