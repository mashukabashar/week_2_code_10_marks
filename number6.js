var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
bigName=friends[0].length;
let name="";
for(let i=1; i<friends.length; i++){
    if(friends[i].length>bigName){
        bigname=friends[i].length;
        name=friends[i];
    }
}
console.log(name);