let progress_bar =  document.querySelector(".progress_bar");

let progress_value_percentage = 0;

let interval = setInterval(() =>{
    if(progress_value_percentage <= 100){
        progress_bar.style.width = `${progress_value_percentage}%`;
        progress_value_percentage += 1;

    }else{
        clearInterval(interval);
    }
},  50  );