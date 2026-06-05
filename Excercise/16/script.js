// ============================================================
// EXERCISE: Walking the DOM
// ============================================================
//
// Open the browser console to see your results.
// (Right-click the page → Inspect → Console)
//
// The HTML looks like this:
//
//   <ul data-nav="menu">      ← parent
//     <li data-item="first">  ← first child
//     <li data-item="second"> ← middle child
//     <li data-item="third">  ← last child
//   </ul>
//
// ============================================================

const menu = document.querySelector('[data-nav="menu"]');
const second = document.querySelector('[data-item="second"]');

// HINT: https://javascript.info/dom-navigation#element-only-navigation

// TODO 1: log all direct children of the menu
console.log("all children:", menu.children);

// TODO 2: log just the first child element of the menu
console.log("first child:", menu.firstChild.textContent /* ??? */);

// TODO 3: log just the last child element of the menu
console.log("last child:", menu.lastChild.textContent  /* ??? */);

// TODO 4: starting from the second item, log its next sibling
console.log("next sibling:", menu.children[1].nextElementSibling.textContent /* ??? */);

// TODO 5: starting from the second item, log its previous sibling
console.log("previous sibling:", menu.children[1].previousElementSibling.textContent /* ??? */);

// TODO 6: starting from the second item, log its parent element
console.log("parent:", second.parentElement.textContent  /* ??? */);

// TODO 7: log how many children the menu has
console.log("number of children:", menu.children.length/* ??? */);

const parent = second.parentElement;
const first = parent.querySelectorAll("li") [0];
const last = parent.querySelectorAll("li") [2];
