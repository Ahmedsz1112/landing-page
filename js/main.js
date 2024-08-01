


function count(){
    let counterEl1 = document.querySelector(".counter1");
    let counterEl2 = document.querySelector(".counter2");
    let counterEl3 = document.querySelector(".counter3");
    console.log(counterEl1 , counterEl2 , counterEl3)

    for(let i=0;i<400; i++){
        counterEl1[i].innerHTML += 1 
    }

    // for(let i=0;i<600; i++){
    //     counterEl2.innerHTML = `${i+1} +`
    // }

    // for(let i=0;i<100; i++){
    //     counterEl3.innerHTML = `${i+1} +`
    // }
}