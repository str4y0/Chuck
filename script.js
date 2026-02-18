async function getJoke() {
  const JokeV = document.getElementById('JokeDisplay')
  const JokeBtn =document.getElementById('Btn')
  
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const Joke = await response.json();
  console.log(Joke.value);
  JokeV.textContent = Joke.value
  JokeV.style = "text-align: center; font-size: 50px;background: lightgray; border: solid black; margin-left: 400px; margin-right:400px; border-radius: 25px;"
}