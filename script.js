const url = "https://v2.jokeapi.dev/joke/Any?type=single";
const btn = document.getElementById("btn");
const jokecontainer = document.getElementById("joke");
const downslider = document.getElementById("downslider");

let getjoke = () => {
  jokecontainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokecontainer.textContent = `${item.joke}`;
      jokecontainer.classList.add("fade");
    });
};

btn.addEventListener("click", getjoke);

