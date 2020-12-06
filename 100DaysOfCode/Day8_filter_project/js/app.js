const buttons = document.querySelectorAll('.btn');
const searchBox = document.querySelector('#search-item');
const items = document.querySelectorAll('.store-item');
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
        if(item.textContent.includes(searchFilter)){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
//use keyup to get the value
searchBox.addEventListener('keyup', filterItem);