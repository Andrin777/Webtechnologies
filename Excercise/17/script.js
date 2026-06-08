// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================

console.log("script loaded");

// 1. Select the relevant elements
const button = document.querySelector("#search-btn");
const input = document.querySelector("#search-input");
const resultsList = document.querySelector("#results");

// 2. Listen for button click
button.addEventListener("click", async () => {
  const query = input.value.trim();
  if (!query) return;

  // 3. Fetch data from the Open Library API
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();

  // 4. Clear previous results
  resultsList.innerHTML = "";

  // 5. Show message if no results found
  if (data.docs.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No books found.";
    resultsList.appendChild(li);
    return;
  }

  // 6. Display each book as a list item
  data.docs.forEach(book => {
    const li = document.createElement("li");

    // if (book.cover_i) {
    //   const img = document.createElement("img");
    //   img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    //   img.alt = book.title;
    //   li.appendChild(img);
    // }

    const text = document.createElement("span");
    text.textContent = `${book.title} — ${book.author_name?.[0] ?? "Unknown author"}`;
    li.appendChild(text);

    resultsList.appendChild(li);
  });
});
