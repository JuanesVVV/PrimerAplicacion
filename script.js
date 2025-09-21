const personas = [
  { title: "Explorador Curioso", description: "Hoy tienes ganas de descubrir algo nuevo. ¡Sal de la rutina!" },
  { title: "Estratega Silencioso", description: "Tu mente está afilada. Es un buen día para planear." },
  { title: "Artista Libre", description: "Tu creatividad está en su punto. Deja que fluya." },
  { title: "Observador Tranquilo", description: "Hoy prefieres mirar y reflexionar. Disfruta el silencio." }
];

const challenges = [
  "Escribe una idea que te gustaría explorar.",
  "Haz algo que nunca hayas hecho antes.",
  "Comparte una reflexión con alguien cercano.",
  "Cambia tu ruta habitual al caminar.",
  "Lee algo sobre un tema que no conoces."
];

const generateBtn = document.getElementById("generate-btn");
const personaTitle = document.getElementById("persona-title");
const personaDesc = document.getElementById("persona-description");
const dailyChallenge = document.getElementById("daily-challenge");
const historyList = document.getElementById("history-list");

generateBtn.addEventListener("click", () => {
  const persona = personas[Math.floor(Math.random() * personas.length)];
  const challenge = challenges[Math.floor(Math.random() * challenges.length)];

  personaTitle.textContent = persona.title;
  personaDesc.textContent = persona.description;
  dailyChallenge.textContent = challenge;

  const listItem = document.createElement("li");
  listItem.textContent = `${persona.title} - ${new Date().toLocaleDateString()}`;
  historyList.appendChild(listItem);
});