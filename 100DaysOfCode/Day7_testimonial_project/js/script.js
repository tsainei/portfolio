const customerName = document.querySelector('#customer-name');
const customerPic = document.querySelector('#customer-img');
const customerText = document.querySelector('#customer-text');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let index = 0;

const customers = [
  ['John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'],
  ['Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'],
  ['Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'],
  ['Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text'],
  ['Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.']
]

function displayReview(delta) {
    index += delta;
    if(index < 0) {
        index = customers.length-1;
    } else if (customers.length -1 < index) {
        index = 0;
    }
    customerPic.src = `./img/customer-${index}.jpg`;
    customerName.textContent = customers[index][0];
    customerText.textContent = customers[index][1];
}

nextBtn.addEventListener('click', () => displayReview(+1));
prevBtn.addEventListener('click', () => displayReview(-1));