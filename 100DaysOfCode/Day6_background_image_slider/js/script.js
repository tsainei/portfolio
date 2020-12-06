/*pics I download from unsplah
const pictures = [
  "dog-0",
  "dog-1",
  "dog-2",
  "dog-3",
  "dog-4"
];*/

//pics I can access from the website
const pictures = [
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1540653767498-cd679b1faa23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1527526029430-319f10814151?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
]

const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');
const displayPic = document.querySelector('.img-container');

let counter = 0;

function picDisplay(delta) {
  counter += delta;
  if(counter < 0) {
    counter = pictures.length -1;
  } else if (counter > pictures.length -1) {
    counter = 0;
  } 
  displayPic.style.backgroundImage = `url('${pictures[counter]}')`;
}

rightBtn.addEventListener('click', () => picDisplay(+1));
leftBtn.addEventListener('click', () => picDisplay(-1));
