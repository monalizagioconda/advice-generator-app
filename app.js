const adviceId = document.querySelector(".advice span");
const quote = document.querySelector(".quote");
const button = document.querySelector(".button");

const url = 'https://api.adviceslip.com/advice';

const fetchData = () =>
  fetch(url, { cache: 'no-store' })  // instrukcja dla przeglądarki aby nie szukała w cache-u / pamięci podręcznej
    .then(res => res.json())
    .then(data => data.slip);

async function loadData() {
  const { id, advice } = await fetchData();
  adviceId.textContent = id;
  quote.textContent = `"${advice}"`
}

button.addEventListener('click', () => loadData());

loadData();
