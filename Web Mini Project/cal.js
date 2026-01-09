let i = 0;
let main = document.getElementById("main");
let ij = document.getElementById("i");
let opertor = document.querySelector("#opertor");

let ij1 = 360;
setTimeout(() => {
    opertor.style.display="block"
}, 5000);
setInterval(() => {
    i++;
    ij1--;
    main.style.background = ` linear-gradient(${i}deg, #e8008fff, #48ebcdff)`;
    ij.style.background = ` linear-gradient(${ij1}deg, #e8008fff, #48ebcdff)`;
    if (i == 360) i = 0;
    if (ij1 == 0) ij1 = 360;
}, 2)
let cal = document.getElementById("cal");
let text = cal.innerHTML;
cal.innerHTML = "";
let i1 = 0;
let str = "";
setTimeout(() => {
    let typing = setInterval(() => {
        str += text[i1]
        cal.innerHTML = str;
        i1++;
        if (i1 == text.length) {
            clearInterval(typing);
        }

    }, 100)
}, 500);
let s = "";
let input = document.querySelector(".input")
//calculotr start
let count = 0;
// if (count == 0) { opertor.innerHTML="Enter First number"};
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "/", "*", "/", "+", "Backspace", "Enter","Escape","",""];
let answer = document.querySelector(".answer")
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    for (let i = 0; i < a.length; i++) {

        if (a[i] == e.key) {
            if (e.key == "Backspace") {
                s = s.slice(0, -1);
                input.value = s;
            } else if (e.key == "Enter") {
                if(s==""){
               input.value="Enter Operation"
                 }else{
                    input.value="Enter Operation"
                    const result=eval(s);
                input.value=result;
                   s="";
                }
              

            }else if(e.key=="Escape"){
                s="";
                input.value=s;
            }

            else {
                s += e.key;
                input.value = s;
            }}
    }
})
let button=document.querySelectorAll("button");
button.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        console.log(e);
            if(e.target=="sin"){
            s="";
            s="sin";
            input.value=s;
                        
        }
        if(e.originalTarget=="a <sup>2</sup>"){
            console.log(`hfhifohe`);
            
        }
        if(e.target.innerHTML=="="){
            let a=eval(s);
            input.value=a;
        }else if(e.target.innerHTML=="C"){
            s="";
            input.value=s;
        }
        
        
        else{
                s+=e.target.innerHTML;
                input.value=s;
        }

    })
})