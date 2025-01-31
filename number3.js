let numbers=[2,20,19,16,14,8,7,5,18,17,15,13,11,10,12,1,3,9,4,6];
let temp=0;
for(let i=0; i<numbers.length-1; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i]>numbers[j]){
            temp=numbers[i];
            numbers[i]=numbers[j];
            numbers[j]=temp;

        }}}

console.log(numbers);