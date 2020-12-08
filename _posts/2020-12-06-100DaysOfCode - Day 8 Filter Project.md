---
title: 100DaysOfCode - Day 8 Filter Project

categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

This project is a bit complicated for me, since I'm not familiar with `HTMLElement.dataset`. It took me a while to review the concept. 

> This is my project: [Day8_filter_project](https://portfolio.tsainei.com/100DaysOfCode/Day8_filter_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day8_filter_project).

While I'm doing the project, I notice that if I press the button to filter the items, the page will go to the top by default. Hence, I need to use `preventDefault` to avoid it to occur and run my function.

```
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
```