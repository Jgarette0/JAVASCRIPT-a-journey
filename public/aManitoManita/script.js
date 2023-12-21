// Names and IDs data
const names = [
  "Justinne",
  "Loreen",
  "Kathleen",
  "Theerese",
  "Jessah",
  "Clifford",
  "Michael",
  "Herbert",
  "Jimbo",
  "Rafael",
];

// Create buttons and names dynamically
const container = document.getElementById("container");
for (let i = 0; i < names.length; i++) {
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";

  const button = document.createElement("button");
  button.id = `button${i + 1}`;
  button.textContent = i + 1;

  const nameDiv = document.createElement("div");
  nameDiv.className = "name";
  nameDiv.id = `name${i + 1}`;
  nameDiv.textContent = names[i];

  buttonDiv.appendChild(button);
  buttonDiv.appendChild(nameDiv);
  container.appendChild(buttonDiv);

  // Add event listener to each button
  button.addEventListener("click", () => {
    nameDiv.style.display = "block";
    button.disabled = true;
    button.style.backgroundColor = "#555"; // Change background color for disabled button
  });
}
const buttons = document.querySelectorAll(".button-div button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id.replace("button", ""); // Remove "button" from the ID
    const name = document.getElementById(`name${buttonId}`);
    name.style.display = "block";
    button.disabled = true;
    button.style.backgroundColor = "#555"; // Change background color for disabled button
  });
});
