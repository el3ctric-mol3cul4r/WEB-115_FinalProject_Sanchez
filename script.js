let game = {
  points: 0,
  inventory: ["RNA", "Protein"],
  discovered: []
};

function loadGame() {
  const save = localStorage.getItem("virusGame");
  if (save) game = JSON.parse(save);
}

function saveGame() {
  localStorage.setItem("virusGame", JSON.stringify(game));
}

function updateUI() {
  document.getElementById("points").textContent = game.points;

  const inv = document.getElementById("inventory");
  inv.innerHTML = "";
  game.inventory.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    inv.appendChild(div);
  });

  const selects = [document.getElementById("item1"), document.getElementById("item2")];
  selects.forEach(select => {
    select.innerHTML = "";
    game.inventory.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
  });

  const log = document.getElementById("log");
  log.innerHTML = "";
  game.discovered.forEach(v => {
    const li = document.createElement("li");
    li.textContent = v;
    log.appendChild(li);
  });
}

document.getElementById("clickBtn").addEventListener("click", () => {
  game.points += 1;
  saveGame();
  updateUI();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

const recipes = {
  "RNA+Protein": "Basic Virus",
  "Basic Virus+Protein": "Airborne Virus",
  "Airborne Virus+RNA": "Deadly Virus"
};

document.getElementById("mergeBtn").addEventListener("click", () => {
  const a = document.getElementById("item1").value;
  const b = document.getElementById("item2").value;

  const key1 = `${a}+${b}`;
  const key2 = `${b}+${a}`;

  const result = recipes[key1] || recipes[key2];

  if (result) {
    if (!game.inventory.includes(result)) {
      game.inventory.push(result);
      game.discovered.push(result);
      alert("New virus discovered: " + result);
    }
  } else {
    alert("Invalid combination");
  }

  saveGame();
  updateUI();
});

setInterval(() => {
  game.points += 1;
  saveGame();
  updateUI();
}, 3600000);

loadGame();
updateUI();
