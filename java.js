container = document.querySelector('.cntr')





function createGrid(b) {


    for (let i = 0;i < b; ++i){
        const newDiv = document.createElement('div')
        newDiv.classList.add('unhovered')
        
            // Link Event Listener to newly created DIVs
        

           // Link Event Listener to newly created DIVs
           newDiv.addEventListener("onclick", (e) => {
            newDiv.classList.add('hovered')
            console.log("Hovered should work!")
        }
        );

        newDiv.innerText = "testing";
        newDiv.style.backgroundColor = "red";
        newDiv.style.height = "100px";
        newDiv.style.width = "100px";
        newDiv.style.border = "solid 1px black";
        container.style.display = "flex";

      

        container.appendChild(newDiv)
        // Link Event Listener to newly created DIVs

        const allDivs = document.querySelectorAll('.unhovered')

        allDivs.forEach(function (div){
            div.addEventListener('click', function(){
            console.log("You clicked a square")
            })
        })
    
    } 
}

createGrid(256)