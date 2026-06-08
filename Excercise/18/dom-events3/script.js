// ============================================================
// EXERCISE: DOM Events 3 — Multiple Listeners + Counter
// ============================================================
//
// GOAL
// ----
// Each list item can be clicked to mark it as "done":
//   - strike through the text (text-decoration: line-through)
//   - clicking it again un-marks it
//
// The <p> at the bottom always shows how many items are done:
//   "2 items done"
//
// ============================================================

const items = document.querySelectorAll('[data-el="item"]');
const status = document.querySelector('[data-el="status"]');

// TODO 1: loop over all items and add a click event listener to each one
//         HINT: you already know how to loop over a NodeList
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', clicked );

};

// TODO 2: inside the listener, toggle the line-through style on the clicked item
//         HINT: you can read and write inline styles via element.style.textDecoration
//         HINT: use an if/else — check the current value and flip it
function clicked() {
  const element = this;
  if (element.style.textDecoration === 'line-through') {
    element.style.textDecoration = 'none';
  } else {
    element.style.textDecoration = 'line-through';
  }

  // TODO 3: count items with line-through and update status
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].style.textDecoration === 'line-through') {
      count++;
    }
  }
  status.textContent = count + ' items done';
}
