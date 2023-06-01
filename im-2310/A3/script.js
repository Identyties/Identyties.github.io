let testbuttona1 = document.getElementById("A1");
testbuttona1.addEventListener("click",() => {
   translucent("Button1") 
})

let testbuttona2 = document.getElementById("A2");
testbuttona2.addEventListener("click",() => {
   translucent("Button2") 
})

let testbuttona3 = document.getElementById("A3");
testbuttona3.addEventListener("click",() => {
   translucent("Button3") 
})

let testbuttona4 = document.getElementById("A4");
testbuttona4.addEventListener("click",() => {
   translucent("Button4") 
})

let testbuttonb1 = document.getElementById("B1");
testbuttonb1.addEventListener("click",() => {
   translucent("Button1") 
})

let testbuttonb2 = document.getElementById("B2");
testbuttonb2.addEventListener("click",() => {
   translucent("Button2") 
})

let testbuttonb3 = document.getElementById("B3");
testbuttonb3.addEventListener("click",() => {
   translucent("Button3") 
})

let testbuttonb4 = document.getElementById("B4");
testbuttonb4.addEventListener("click",() => {
   translucent("Button4") 
})

let testbuttonc1 = document.getElementById("C1");
testbuttonc1.addEventListener("click",() => {
   translucent("Button1") 
})

let testbuttonc2 = document.getElementById("C2");
testbuttonc2.addEventListener("click",() => {
   translucent("Button2") 
})

let testbuttonc3 = document.getElementById("C3");
testbuttonc3.addEventListener("click",() => {
   translucent("Button3") 
})

let testbuttonc4 = document.getElementById("C4");
testbuttonc4.addEventListener("click",() => {
   translucent("Button4") 
})

let testbuttond1 = document.getElementById("D1");
testbuttond1.addEventListener("click",() => {
   translucent("Button1") 
})

let testbuttond2 = document.getElementById("D2");
testbuttond2.addEventListener("click",() => {
   translucent("Button2") 
})

let testbuttond3 = document.getElementById("D3");
testbuttond3.addEventListener("click",() => {
   translucent("Button3") 
})

let testbuttond4 = document.getElementById("D4");
testbuttond4.addEventListener("click",() => {
   translucent("Button4") 
})

function translucent(buttonclass){
    let itemsToFilter = Array.from(document.getElementsByClassName(buttonclass));
    for(let listItem of itemsToFilter){
     listItem.style.opacity = 0.5;
    }
     
        
      
}

