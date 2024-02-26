container = document.querySelector('.cntr')
const resetbtn = document.getElementById('resetbtn')
const allDivs = document.querySelectorAll('.allDivs')


const createH1 = document.createElement('H1')
createH1

createH1.innerText = "TOP: Etch-a-Sketch Project"

document.body.insertBefore(createH1,resetbtn)


// All Global Variable Elements Above
function askPrompt () {
  let askGridAmount = prompt("Please choose the grid amount Number x Number (ie: 16x16)")

  if (askGridAmount > 100 || askGridAmount < 1 ){
    alert("Please select a value between 1-100")
  } else {
  let b = parseInt(askGridAmount)
  createGrid(b)
}}




function resetGame(){

  askPrompt()
  
}

function createGrid(b) {


   // Auto Size Container Based on Entry gridEntry x 100 = maxHeightnWidth
    c = b * b
    // maxHeightnWid = b * 10
    // let pixelHeight = maxHeightnWid + "px"
    // let pixelwidth = maxHeightnWid + "px"
    // container.style.maxHeight = pixelHeight
    // container.style.maxWidth = pixelwidth
    // container.style.display = "flex";
    // container.style.justifyContent = "center"


    for (let i = 0;i < c; ++i){

        // Regular class added for Default Styling
        const newDiv = document.createElement('div');
        newDiv.classList.add('regular');
        newDiv.classList.add('allDivs');
        
        // Typical Styling Default CSS within JS/DOM


        let pixelHeight = 960 / b +"px"
        let pixelWidth = 960 / b +"px"
        newDiv.style.height = pixelHeight;
        newDiv.style.width = pixelWidth
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
    resetGame()
})

createGrid(6)