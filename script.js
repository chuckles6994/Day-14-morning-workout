const imgs = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","London"],["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","Paris"],["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","New York"],["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","Nova Scotia"],["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","Tokio"],["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","Venice"]]

const gallery =document.querySelector(".gallery");

console.log(gallery);
let newImages= '';

imgs.forEach(img => {
newImages+=`<div class="image"><img src= ${img[0]} alt =${img[1]}</div><div class="image__description">${img [1]} </div>`;})

gallery.innerHTML=newImages;
console.log(newImages)