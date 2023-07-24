

const button = document.getElementById("button");
const input = document.querySelector(".box input");
const p = document.querySelector(".listarea p");


input.onkeyup = (e) => {
    const inputVal = e.target.value;

    if(inputVal.length >= 0 && inputVal.length < 5) {

        p.innerText= "type more letter";
        p.style.color = "red";
   
    }else if(inputVal.length >= 5 && inputVal.length < 7) {

        p.innerText= "poor user Name";
        p.style.color = "black";
   
    }else if(inputVal.length >= 7 && inputVal.length < 9) {

        p.innerText= "strong user Name";
        p.style.color = "skyblue";
   
    }else if(inputVal.length >= 9 && inputVal.length < 11) {

        p.innerText= "Very Storng user Name";
        p.style.color = "green";
   
    }


};




//===================//
// result app code here
//====================//



const subject = document.getElementById("subject");
const marks = document.getElementById("marks");
const check =  document.getElementById("button");
const text = document.querySelector(".result-show p");
const loder = document.querySelector(".result-show img")


check.onclick = () => {
  
    loder.style.display = "block";

   setTimeout( function(){

    let markVal = getResult(marks.value);


    if(subject.value.length == 0|| marks.value.length == 0){
        alert("plz type Subject and Mark!!");
    }else if(markVal.gpa == 0){
        text.style.color= "red"; 
    }else{
        text.style.color= "green";
    };

    text.innerHTML = `Your ${subject.value} result is : GPA = ${markVal.gpa} and Grade = ${markVal.grade} `;

    if(subject.value.length == 0|| marks.value.length == 0){
        text.innerHTML = ``;
    };

   
    subject.value="";
    marks.value="";
    loder.style.display = "none";

   },3000);
   

};



/**
 * prograssbar code here
 */


const setTime = document.querySelector(".prograssbar input");
const startBtn = document.querySelector(".prograssbar button");
const showTime = document.getElementById("showTime");
const bar = document.querySelector(".prograssbar .bar");

    
    let count;
startBtn.onclick = (timer) => {

   const value = setTime.value;
    showTime.innerHTML = value;
    count = value;
    setTime.value="";

 bar.style.width = ` ${(100*count)/value}% `

  let int = setInterval(function(){
        count--
    showTime.innerHTML = count;
    bar.style.width = ` ${(100*count)/value}% `
    




    if(count == 0){
        clearInterval(int);
    }

    }, 1000);

    
      
}
