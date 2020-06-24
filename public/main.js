const ws = new WebSocket(`ws://localhost:3000`);
const username = prompt("What's your name?")
const log = document.getElementById("log");

const generateDate = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
};

document.querySelector("button").onclick = () => {
  let text = document.getElementById("text").value;
  ws.send(text);
  log.innerHTML += generateDate() + " | " + username + " says: " + text + "<br>";
};


ws.onmessage = (event) => {
  log.innerHTML += generateDate() + " " + event.data + "<br>";
};

ws.onerror = (error) => {
  console.log("Server error message: ", error.message);
};