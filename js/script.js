const active = document.querySelectorAll(".panel");
console.log(active);
// active.forEach(panel,addEventListener("click",()=>{
//     removeAllActiveClasses();
//       panel.classList.add("active");

// }

// ))
// Diksha ka dimaag
active.forEach((panel) =>{
    panel.addEventListener("click",() =>{
        removeAllActiveClasses();
        panel.classList.add("active");
    })
    

    })
      
   


function removeAllActiveClasses(){
    active.forEach(panel =>{
        panel.classList.remove("active");
    })
}