var max = 5;
var space = '';
for(i=max; i>0;i--){
    for(j=0; j<i;j++){
        space += i;
    } 
    console.log(space);
    space = '';
}
for(i=1; i<=max;i++){
    for(j=1; j<=i;j++){
        space += i;
    } 
    console.log(space);
    space = '';
}