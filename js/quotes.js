const quotes = [
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "The biggest difference between yesterday and today is the courage to change tomorrow.",
    author: "Nelson Mandela",
  },
  {
    quote: "Success is where preparation and opportunity meet.",
    author: "John C. Maxwell",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "CAlbert Schweitzer",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: " Zig Ziglar",
  },
  {
    quote:
      "LGood actions create good habits, good habits create good characters.",
    author: "Aristotle",
  },
  {
    quote:
      "Hope is not waiting for things to happen; it's about making things happen.",
    author: "Roy T. Bennett",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "Always strive. Always believe. Always hope.",
    author: "Denzel Washington",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//소수점을 내림으로 정수로 변환해라(랜덤할것 * quotes의 갯수세기)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
