

const num = (function(){
    return ()=>{
        console.log(a);
        var a =45;
        return a;

    }
})()
console.log(num());


//i predict right
//undefined
//45