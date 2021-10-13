const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#addCountBtn");
const lessBtn = document.querySelector("#lessCountBtn");

let count = 0;

addBtn.addEventListener("click", addCountNum);
lessBtn.addEventListener("click", lessCountNum);

function addCountNum(){
    count ++;
    counter.innerHTML = count;

    if(counter.innerHTML > 0){
        counter.style.color = "gold";
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = "lime";
    }
    counter.animate([{opacity:'0.1'},{opacity: '1.0'}] ,
        {duration: 300 , fill : 'forwards'});
};

function lessCountNum(){
    count --;
    counter.innerHTML = count;

    if(counter.innerHTML < 0){
        counter.style.color = "red";
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = "#fefefe";
    }
    counter.animate([{opacity:'0.1'},{opacity: '1.0'}] ,
        {duration: 300 , fill : 'forwards'});
};

// addBtn.addEventListener("click", function(){
//     count++;
//     counter.innerHTML = count;

//     if(counter.innerHTML > 0){
//         counter.style.color = "green";
//     }

// });

// lessBtn Working 

// lessBtn.addEventListener("click", function(){
//     count--;
//     counter.innerHTML = count;

//     if(counter.innerHTML < 0){
//         counter.style.color = "red";
//     }
    
// });