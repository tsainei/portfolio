const container = document.querySelector('#container');

const p1 = document.createElement('p');
p1.style.cssText = 'color: red';
p1.textContent = "Hey I’m red!";

const h3 = document.createElement('h3');
h3.style.cssText = 'color:blue';
h3.textContent = "I’m a blue h3!";

container.appendChild(p1);
container.appendChild(h3);

const blackDiv = document.createElement('div');
blackDiv.setAttribute('style', 'color: black; background: pink');

const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
blackDiv.appendChild(h1);
blackDiv.appendChild(p2);

container.appendChild(blackDiv);
