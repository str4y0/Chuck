const JokeV = document.querySelector('#JokeDisplay')
const JokeBtn =document.querySelector('#Btn')

async function getJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const Joke = await response.json();
  console.log(Joke.value);
  JokeV.textContent = Joke.value
}



JokeBtn.addEventListener("click", getJoke);