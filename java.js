container = document.querySelector('.cntr')
const resetbtn = document.getElementById('resetbtn')
const allDivs = document.querySelectorAll('.allDivs')

// All Global Variable Elements Above

function resetGame(){
  // let askGridAmount = prompt("Please choose the grid amount Number x Number (ie: 16x16)")
  // askGridAmount
  // let b = parseInt(askGridAmount)
  // document.body.appendChild(container)
  createGrid(16)
  console.log('This shouldve created a new game.')
}

function createGrid(b) {


   // Auto Size Container Based on Entry gridEntry x 100 = maxHeightnWidth
    c = b * b
    maxHeightnWid = b * 100
    let pixelHeight = maxHeightnWid + "px"
    let pixelwidth = maxHeightnWid + "px"
    container.style.maxHeight = pixelHeight
    container.style.maxWidth = pixelwidth
    container.style.display = "flex";


    for (let i = 0;i < c; ++i){

        // Regular class added for Default Styling
        const newDiv = document.createElement('div');
        newDiv.classList.add('regular');
        newDiv.classList.add('allDivs');
        
        // Typical Styling Default CSS within JS/DOM
        newDiv.innerText = "testing";
        newDiv.style.height = "100px";
        newDiv.style.width = "100px";
        newDiv.style.border = "solid 1px black";
        
        container.appendChild(newDiv)
    
    }  

   

    
    // After creation --> Simply added eventListener to all Items
    const regDivs = document.querySelectorAll('.regular')

    regDivs.forEach(function(div) {
        div.addEventListener('mouseover', function() {
          div.classList.remove('regular')
          div.classList.add('hovered')

        //   Creats and modify classes based on the status of the hover 
        });
      });
    }

// Features for Reset Button

resetbtn.addEventListener('click', function(){
    function removeAllChildNodes(parent){
      while (parent.firstChild) {parent.removeChild(parent.firstChild)}
    }

    removeAllChildNodes(container)

    createGrid(16)

    // createGrid(prompt("Please choose your layout"))
})

createGrid(6)