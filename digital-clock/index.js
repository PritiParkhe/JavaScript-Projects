clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleTimeString());

// date to always update 1000 means 1sec
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();

},1000);