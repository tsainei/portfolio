const buttons = document.querySelectorAll('.btn');
const searchBox = document.querySelector('#search-item');
const items = document.querySelectorAll('.store-item');
const images = document.querySelectorAll('.store-img');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxItem = document.querySelector('.lightbox-item');
const leftBtn = document.querySelector('.btnLeft');
const rightBtn = document.querySelector('.btnRight');
const lightboxClose = document.querySelector('.lightbox-close');
//deal with the buttons which filter the items
buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        //prevent the page to go to the top
        e.preventDefault();
        const filter = e.target.dataset.filter;

        items.forEach((item) => {
            if(filter === 'all'){
                item.style.display = 'block';
            } else {
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                } else {
                    item.style.display ='none';
                }
            }
        })
    })
})
//filter the item by using the searchbox
function filterItem(e) {
    const searchFilter = e.target.value.toLowerCase().trim();
    
    items.forEach((item) => {
        if(item.textContent.includes(searchFilter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
//create an array for images
let imageList = [];
let counter = 0;
images.forEach((image) => {
    imageList.push(image.src);
}) 
//display lightbox
function displayLightbox(e) {
    let image = e.target.src;
    lightboxItem.style.backgroundImage = `url(${image})`;
    lightboxContainer.classList.add('show');
    //count the index to use in the displayItem function
    counter = imageList.indexOf(image);
}
//click the arrow to display item
function displayItem(delta) {
    counter += delta;
    if(counter < 0) {
        counter = imageList.length - 1;
    } else if (counter > imageList.length - 1) {
        counter = 0
    }
    lightboxItem.style.backgroundImage = `url(${imageList[counter]})`;
}
//close the item
function closeItem() {
    lightboxContainer.classList.remove('show');
}
//use keyup to get the value
searchBox.addEventListener('keyup', filterItem);
leftBtn.addEventListener('click', () => displayItem(-1));
rightBtn.addEventListener('click', () => displayItem(+1));
items.forEach((item) => { item.addEventListener('click', displayLightbox)});
lightboxClose.addEventListener('click', closeItem);