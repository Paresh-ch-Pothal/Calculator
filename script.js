let string = "";
let buttons = document.querySelectorAll(".buttons");
Array.from(buttons).forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try{
                string = eval(string);
                document.querySelector("input").value = string;
            }
            catch{
                document.querySelector("input").value = "ERROR"; 
            }
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector("input").value=string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})
let color=()=>{
    let t1=Math.floor(Math.random()*256);
    let t2=Math.floor(Math.random()*256);
    let t3=Math.floor(Math.random()*256);
    let rgb=`rgb(${t1},${t2},${t3})`;
    return rgb;
}
let bg=document.querySelector(".whole");
console.log(bg);
setInterval(() => {
    // bg.style.background=color();
}, 2000);