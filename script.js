const url = "https://type.fit/api/quotes";
let data;
let currentIndex;

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");

const left = document.getElementById("left");
const right = document.getElementById("right");

const fetchData = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();
    currentIndex = Math.floor(Math.random() * data.length);

    while (data[currentIndex].text.length >= 30) {
      currentIndex = (currentIndex + 1) % data.length;
    }

    todaysQuotes();
  } catch (error) {
    console.log("Error:", error);
  }
};

const todaysQuotes = () => {
  const quote = data[currentIndex];
  quotes.innerHTML = quote.text;
  author.innerHTML = quote.author;
};

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % data.length;
  todaysQuotes();
});

left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  todaysQuotes();
});

fetchData();
