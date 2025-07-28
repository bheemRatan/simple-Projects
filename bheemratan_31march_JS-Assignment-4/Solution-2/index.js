

function shopingCart(){
    let numOfItem =0;
    return {
        increment:function(){
            numOfItem++;
        },
        decrement:function(){
            numOfItem--;
        },
        getItemNumber:function(){
            console.log(numOfItem);

        }
    }
}

const cart = shopingCart();
cart.increment();
cart.increment();
cart.getItemNumber();
cart.decrement()
cart.getItemNumber()
