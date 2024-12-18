function funone(a,b,c){
    console.log("one");
    return funthree(a+10) + funthree(a+b+c);
}

function funtwo(a,b){
    console.log("Two");
    return funthree(funone(a,32,b));
}

function funthree(a){
    console.log("Three");
    return a+10;
}

console.log(funtwo(10,30));