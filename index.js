//1. How to create an element in js 


const ulel = document.querySelector('ul');
const liel = document.createElement('li');

//1.1 This is the below way to add the created in document in js

ulel.append(liel);

//2.  modifying the text in js. There are 3 ways to modify the issue.

// 2.1 the innerText way

const firstlistItems = document.querySelector('list-items');

console.log(firstlistItems.innerText);

// it will console the the string in html element in  the exact same way as it is writtern in html document & it is the recommended one.

// 2.2 The textContent way

console.log(firstlistItems.textContent);
// the second most recommended one

// 2.3 innerHTML way

console.log(firstlistItems.innerHTML);
 // this method is no that recommended because of the security thread.
