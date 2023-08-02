let pictures = document.querySelectorAll(".column");

for(let i = 0; i < pictures.length; i++){
    let result = pictures[i];
    console.log(result);
    result.onmouseover = () => {
        result.style.border = "2px solid gray";
    }
    result.onmouseout = () =>{
        result.style.border = "2px solid #479ecb";
    }
}


function hoba(){
    let linux = document.querySelector(".linux");
    let children = document.createElement("div");
    children.classList.add("new");
    linux.appendChild(children);
    children.innerHTML = "Linux";
}


document.querySelector(".linux").addEventListener("click", hoba);