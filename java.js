container = document.querySelector('.cntr')



function createGrid(b) {


    for (let i = 0;i < b; ++i){

        // Regular class added for Default Styling
        const newDiv = document.createElement('div');
        newDiv.classList.add('regular');
        
        // Typical Styling Default CSS within JS/DOM
        newDiv.innerText = "testing";
        newDiv.style.height = "100px";
        newDiv.style.width = "100px";
        newDiv.style.border = "solid 1px black";
        container.style.display = "flex";

      

        container.appendChild(newDiv)
    
    } 
    // After creation --> Simply added eventListener to all Items
    const allDivs = document.querySelectorAll('.regular')

    allDivs.forEach(function(div) {
        div.addEventListener('mouseover', function() {
          div.classList.remove('regular')
          div.classList.add('hovered')

        //   Creats and modify classes based on the status of the hover 
        });
      });
    }

createGrid(256);