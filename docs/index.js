/* Grabbing and caching HTML elements needed (main scope)*/
const colour1 = document.getElementById("colour1");
const colour2 = document.getElementById("colour2");
const main = document.getElementById("main");

/* Setting the background to equal the value of the colour inputs
on start up */
main.style.backgroundImage = `linear-gradient(to right, ${colour1.value}, ${colour2.value})`;

/* function to change the background and display values of inputs */
function changeValue() {
  let updatedColour = (main.style.backgroundImage = `linear-gradient(to right, ${colour1.value}, ${colour2.value})`);
  document.getElementById("colour-result").textContent = updatedColour;
}

/* Event listeners for the two inputs */
colour1.addEventListener("input", changeValue);
colour2.addEventListener("input", changeValue);
