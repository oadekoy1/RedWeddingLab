
// Create Two Functions -> addChild and redWedding
function addChild() {
const div = document.createElement('div')
div.textContent = 'John Snow'
addToStarks.appendChild(div)

}
function redWedding() {

// addToStarks.childNodes.forEach(el => el.remove())
// while (addToStarks.childNodes.length > 0) {
//     addToStarks.childNodes[0].remove()
    
// }
for( ; addToStarks.childNodes.length  ; ) {
    console.log(addToStarks.childNodes.length);
    addToStarks.childNodes[0].remove()
}
}
const childBtn = document.querySelector('#add-child')
const weddingBtn = document.querySelector('#red-wedding') 
const addToStarks = document.querySelector('.starks')
// Attach functions to buttons
childBtn.addEventListener('click', addChild)
weddingBtn.addEventListener('click', redWedding)



// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
