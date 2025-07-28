
function greeting(message){
   return function sayfullGreeting(mess){
    console.log(message +' '+mess);

   }
}

const sayHiTo = greeting('hii');
sayHiTo("bheem");