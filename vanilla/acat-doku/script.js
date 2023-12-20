"use strict";

// Constants
const GAME_STATE_NAMESPACE = "acat-game-state";
const DAY_MILLISECONDS = 86400000;
const MAX_FRIEND_USAGE = 1;

// Generic helpers
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(arr) {
  const i = randomIntFromInterval(0, arr.length - 1);
  return arr[i];
}

function getToday() {
  const now = new Date().getTime();
  return now - (now % DAY_MILLISECONDS);
}

// Data
const friendAttributes = [
  { id: 1, name: "type1", model: "types", hasImg: true },
  { id: 2, name: "type2", model: "types", hasImg: true },
  { id: 3, name: "generation", model: "generations", hasImg: false },
  { id: 4, name: "hair", model: "hairs", hasImg: false },
  { id: 5, name: "house", model: "houses", hasImg: false },
  { id: 6, name: "engagement", model: "engagements", hasImg: false },
  { id: 7, name: "season", model: "seasons", hasImg: false },
  { id: 8, name: "zodiac", model: "zodiacs", hasImg: true },
];

const types = [
  { id: 1, name: "Buio" },
  { id: 2, name: "Lotta" },
  { id: 3, name: "Roccia" },
  { id: 4, name: "Volante" },
  { id: 5, name: "Erba" },
  { id: 6, name: "Normale" },
  { id: 7, name: "Psico" },
];

const generations = [
  { id: 1, name: "Prima generazione (1994)" },
  { id: 2, name: "Seconda generazione (1995)" },
  { id: 3, name: "Terza generazione (1996)" },
  { id: 4, name: "Quarta generazione (1997)" },
  { id: 5, name: "Quinta generazione (1998)" },
  { id: 6, name: "Fossile (< 1994)" },
  { id: 7, name: "Futuristico (> 1998)" },
];

const hairs = [
  { id: 1, name: "Capelli biondi" },
  { id: 2, name: "Capelli castani" },
  { id: 3, name: "Capelli neri" },
  { id: 4, name: "Capelli rossi" },
];

const houses = [
  { id: 1, name: "Ha una casa propria" },
  { id: 2, name: "Non ha una casa propria" },
];

const engagements = [
  { id: 1, name: "Single" },
  { id: 2, name: "Fidanzat*" },
  { id: 3, name: "Sposat*" },
];

const seasons = [
  { id: 1, name: "Nat* in Primavera" },
  { id: 2, name: "Nat* in Estate" },
  { id: 3, name: "Nat* in Autunno" },
  { id: 4, name: "Nat* in Inverno" },
];

const zodiacs = [
  { id: 1, name: "Aquarius" },
  { id: 2, name: "Pisces" },
  { id: 3, name: "Aries" },
  { id: 4, name: "Tauros" },
  { id: 5, name: "Gemini" },
  { id: 6, name: "Cancer" },
  { id: 7, name: "Leo" },
  { id: 8, name: "Virgo" },
  { id: 9, name: "Libra" },
  { id: 10, name: "Scorpio" },
  { id: 11, name: "Sagitter" },
  { id: 12, name: "Capricorn" },
];

const friends = [
  {
    id: 1,
    name: "Ire",
    type1: 5,
    type2: 6,
    generation: 4,
    hair: 3,
    house: 2,
    engagement: 2,
    season: 4,
    zodiac: 2,
  },
  {
    id: 2,
    name: "Depa",
    type1: 1,
    type2: 7,
    generation: 1,
    hair: 2,
    house: 2,
    engagement: 2,
    season: 2,
    zodiac: 6,
  },
  {
    id: 3,
    name: "Pol",
    type1: 2,
    type2: 3,
    generation: 5,
    hair: 3,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 10,
  },
  {
    id: 4,
    name: "Beppe",
    type1: 3,
    type2: 4,
    generation: 2,
    hair: 3,
    house: 2,
    engagement: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 5,
    name: "Viga",
    type1: 3,
    type2: 7,
    generation: 2,
    hair: 2,
    house: 1,
    engagement: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 6,
    name: "Cava",
    type1: 6,
    type2: 7,
    generation: 1,
    hair: 2,
    house: 2,
    engagement: 1,
    season: 4,
    zodiac: 2,
  },
  {
    id: 7,
    name: "Mazi",
    type1: 1,
    type2: 2,
    generation: 1,
    hair: 3,
    house: 2,
    engagement: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 8,
    name: "Boss",
    type1: 1,
    type2: 5,
    generation: 1,
    hair: 3,
    house: 1,
    engagement: 2,
    season: 1,
    zodiac: 3,
  },
  {
    id: 9,
    name: "Quod",
    type1: 3,
    type2: 4,
    generation: 3,
    hair: 2,
    house: 2,
    engagement: 1,
    season: 1,
    zodiac: 2,
  },
  {
    id: 10,
    name: "Dago",
    type1: 2,
    type2: 3,
    generation: 5,
    hair: 2,
    house: 2,
    engagement: 2,
    season: 3,
    zodiac: 11,
  },
  {
    id: 11,
    name: "Ubi",
    type1: 1,
    type2: 2,
    generation: 1,
    hair: 3,
    house: 1,
    engagement: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 12,
    name: "Vero",
    type1: 3,
    type2: 5,
    generation: 3,
    hair: 2,
    house: 2,
    engagement: 2,
    season: 2,
    zodiac: 6,
  },
  {
    id: 13,
    name: "Sara",
    type1: 5,
    type2: 7,
    generation: 3,
    hair: 3,
    house: 2,
    engagement: 2,
    season: 3,
    zodiac: 9,
  },
  {
    id: 14,
    name: "Santy",
    type1: 6,
    type2: 7,
    generation: 3,
    hair: 1,
    house: 2,
    engagement: 2,
    season: 2,
    zodiac: 6,
  },
  {
    id: 15,
    name: "Marty",
    type1: 6,
    type2: 7,
    generation: 1,
    hair: 2,
    house: 2,
    engagement: 1,
    season: 4,
    zodiac: 12,
  },
  {
    id: 16,
    name: "Noe",
    type1: 4,
    type2: 7,
    generation: 3,
    hair: 2,
    house: 1,
    engagement: 2,
    season: 2,
    zodiac: 6,
  },
  {
    id: 17,
    name: "Narcos",
    type1: 6,
    type2: 2,
    generation: 4,
    hair: 3,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 10,
  },
  {
    id: 18,
    name: "Freank",
    type1: 1,
    type2: 5,
    generation: 3,
    hair: 2,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 9,
  },
  {
    id: 19,
    name: "Miky",
    type1: 3,
    type2: 5,
    generation: 4,
    hair: 1,
    house: 2,
    engagement: 2,
    season: 2,
    zodiac: 8,
  },
  {
    id: 19,
    name: "Sem",
    type1: 5,
    type2: 6,
    generation: 3,
    hair: 1,
    house: 2,
    engagement: 1,
    season: 4,
    zodiac: 1,
  },
  {
    id: 21,
    name: "Claudia",
    type1: 1,
    type2: 6,
    generation: 1,
    hair: 1,
    house: 2,
    engagement: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 22,
    name: "Bea",
    type1: 3,
    type2: 7,
    generation: 5,
    hair: 2,
    house: 1,
    engagement: 2,
    season: 4,
    zodiac: 12,
  },
  {
    id: 23,
    name: "Fra Dago",
    type1: 1,
    type2: 2,
    generation: 3,
    hair: 2,
    house: 2,
    engagement: 2,
    season: 4,
    zodiac: 1,
  },
  {
    id: 24,
    name: "Tullio",
    type1: 4,
    type2: 5,
    generation: 3,
    hair: 1,
    house: 1,
    engagement: 2,
    season: 1,
    zodiac: 3,
  },
  {
    id: 25,
    name: "Rik",
    type1: 6,
    type2: 7,
    generation: 3,
    hair: 2,
    house: 1,
    engagement: 2,
    season: 4,
    zodiac: 12,
  },
  {
    id: 26,
    name: "Laura",
    type1: 6,
    type2: 7,
    generation: 1,
    hair: 3,
    house: 1,
    engagement: 2,
    season: 1,
    zodiac: 3,
  },
  {
    id: 27,
    name: "Franceschina",
    type1: 1,
    type2: 4,
    generation: 5,
    hair: 1,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 8,
  },
  {
    id: 28,
    name: "Ruben",
    type1: 1,
    type2: 5,
    generation: 3,
    hair: 3,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 8,
  },
  {
    id: 29,
    name: "Davi",
    type1: 2,
    type2: 6,
    generation: 1,
    hair: 1,
    house: 1,
    engagement: 2,
    season: 3,
    zodiac: 8,
  },
  {
    id: 30,
    name: "Alessio",
    type1: 2,
    type2: 5,
    generation: 1,
    hair: 2,
    house: 1,
    engagement: 2,
    season: 1,
    zodiac: 4,
  },
  {
    id: 31,
    name: "Cigno",
    type1: 3,
    type2: 6,
    generation: 6,
    hair: 3,
    house: 1,
    engagement: 3,
    season: 1,
    zodiac: 4,
  },
  {
    id: 32,
    name: "Ele",
    type1: 4,
    type2: 7,
    generation: 4,
    hair: 2,
    house: 2,
    engagement: 1,
    season: 3,
    zodiac: 10,
  },
];

const data = {
  friendAttributes,
  types,
  generations,
  hairs,
  houses,
  engagements,
  seasons,
  zodiacs,
  friends,
};

// Friend repository
function getFriendById(id) {
  return friends.find((friend) => friend.id === id);
}

function getFriendByName(name) {
  return friends.find((friend) => friend.name === name);
}

// Generation repository
function getGenerationById(id) {
  return generations.find((generation) => generation.id === id);
}

// Type repository
function getTypeById(id) {
  return types.find((type) => type.id === id);
}

// Hair repository
function getHairById(id) {
  return hairs.find((hair) => hair.id === id);
}

// House repository
function getHouseById(id) {
  return houses.find((house) => house.id === id);
}

// Engagement repository
function getEngagementById(id) {
  return engagements.find((engagement) => engagement.id === id);
}

// Season repository
function getSeasonById(id) {
  return seasons.find((season) => season.id === id);
}

// Zodiac repository
function getZodiacById(id) {
  return zodiacs.find((zodiac) => zodiac.id === id);
}

// Mappers
const mapAttributesOnRepo = {
  1: getTypeById,
  2: getTypeById,
  3: getGenerationById,
  4: getHairById,
  5: getHouseById,
  6: getEngagementById,
  7: getSeasonById,
  8: getZodiacById,
};

// States creation
function getGameState() {
  return JSON.parse(localStorage.getItem(GAME_STATE_NAMESPACE));
}

function setGameState(gameState) {
  return localStorage.setItem(GAME_STATE_NAMESPACE, JSON.stringify(gameState));
}

function getFrameAttributes() {
  // Create a copy of the friend attributes
  const possibleAttributes = [...friendAttributes];
  const numPossibleAttributes = possibleAttributes.length;

  // Save here the attributes already used, since the same attribute
  // should never appear trice in the same row/column
  const usedAttributeIds = [];

  // Get six random attributes (duplicates are allowed on the same row/column only)
  const rowAttributes = [];
  const colAttributes = [];

  // Get 3 random attributes for the external row
  for (let r = 0; r < 3; r++) {
    if (r < 2) {
      const random = randomIntFromInterval(0, numPossibleAttributes - 1);
      rowAttributes.push(possibleAttributes[random]);

      // Push the used attribute in usedAttributes
      usedAttributeIds.push(possibleAttributes[random].id);
    } else {
      // At the third iteration, forcely choose a different attribute
      // Filter already used attributes out
      const unusedAttributes = possibleAttributes.filter(
        (attribute) =>
          !usedAttributeIds.some(
            (usedAttributeId) => usedAttributeId === attribute.id
          )
      );
      // Choose a random attribute from the remaining attributes
      const random = randomIntFromInterval(0, unusedAttributes.length - 1);
      rowAttributes.push(unusedAttributes[random]);
    }
  }

  // Remove the attributes already used for building the external row
  const remainingAttributes = possibleAttributes.filter(
    (attribute) =>
      !rowAttributes.some((rowAttribute) => rowAttribute.id === attribute.id)
  );

  // Get 3 random attributes for the external column
  // from the attributes not yet used
  for (let c = 0; c < 3; c++) {
    if (c < 2) {
      const random = randomIntFromInterval(0, numPossibleAttributes - 4);
      colAttributes.push(remainingAttributes[random]);

      // Push the used attribute in usedAttributes
      usedAttributeIds.push(remainingAttributes[random].id);
    } else {
      // At the third iteration, forcely choose a different attribute
      // Filter already used attributes out
      const unusedAttributes = possibleAttributes.filter(
        (attribute) =>
          !usedAttributeIds.some(
            (usedAttributeId) => usedAttributeId === attribute.id
          )
      );
      // Choose a random attribute from the remaining attributes
      const random = randomIntFromInterval(0, unusedAttributes.length - 1);
      colAttributes.push(unusedAttributes[random]);
    }
  }

  return { rowAttributes, colAttributes };
}

function getFrame() {
  const { rowAttributes, colAttributes } = getFrameAttributes();

  // Save here the variants already used, since the same variant
  // should never appear twice in the frame
  const usedAttributeVariants = [];

  const rowAttributeVariants = [];
  const colAttributeVariants = [];
  // Choose a random variant for each attribute
  // taking care of never having the same variant
  for (let r = 0; r < 3; r++) {
    // Get the attribute variants
    const attribute = rowAttributes[r];
    const attributeVariants = [...data[attribute.model]];

    // Filter already used variants out
    const unusedAttributeVariants = attributeVariants.filter(
      (variant) =>
        !usedAttributeVariants.some(
          (usedVariant) =>
            usedVariant.attributeId === attribute.id &&
            usedVariant.variantId === variant.id
        )
    );

    // Get a random, yet not used variant
    const random = randomIntFromInterval(0, unusedAttributeVariants.length - 1);
    const variant = unusedAttributeVariants[random];

    // Push the variant in the row attribute variants
    rowAttributeVariants.push({
      variant,
      attribute,
    });

    // Push the used variant in used attribute variants
    usedAttributeVariants.push({
      attributeId: attribute.id,
      variantId: variant.id,
    });
  }

  for (let c = 0; c < 3; c++) {
    // Get the attribute variants
    const attribute = colAttributes[c];
    const attributeVariants = [...data[attribute.model]];

    // Filter already used variants out
    const unusedAttributeVariants = attributeVariants.filter(
      (variant) =>
        !usedAttributeVariants.some(
          (usedVariant) =>
            usedVariant.attributeId === attribute.id &&
            usedVariant.variantId === variant.id
        )
    );

    // Get a random, yet not used variant
    const random = randomIntFromInterval(0, unusedAttributeVariants.length - 1);
    const variant = unusedAttributeVariants[random];

    // Push the variant in the column attribute variants
    colAttributeVariants.push({
      variant,
      attribute,
    });

    // Push the used variant in used attribute variants
    usedAttributeVariants.push({
      attributeId: attribute.id,
      variantId: variant.id,
    });
  }

  return { rowAttributeVariants, colAttributeVariants };
}

function buildDoku() {
  // Define the matrix as an empty array
  const matrix = []; // Read top to bottom, left to right

  // Get frame attributes
  const { rowAttributeVariants, colAttributeVariants } = getFrame();

  // Create a copy of friends
  let possibilities = [...friends];
  const usedFriends = friends.map((friend) => {
    return {
      friendId: friend.id,
      counter: 0,
    };
  });

  // Create a possible matrix by looking at the friends
  // who fit the attribute variants in the created frame
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const index = possibilities.findIndex((possible) => {
        if (
          rowAttributeVariants[r].attribute.name.slice(0, 4) !== "type" &&
          colAttributeVariants[c].attribute.name.slice(0, 4) !== "type"
        ) {
          // If the row and column attributes are not types
          return (
            possible[rowAttributeVariants[r].attribute.name] ===
              rowAttributeVariants[r].variant.id &&
            possible[colAttributeVariants[c].attribute.name] ===
              colAttributeVariants[c].variant.id
          );
        } else if (
          rowAttributeVariants[r].attribute.name.slice(0, 4) === "type" &&
          colAttributeVariants[c].attribute.name.slice(0, 4) !== "type"
        ) {
          // The row attribute only is a type
          return (
            (possible.type1 === rowAttributeVariants[r].variant.id ||
              possible.type2 === rowAttributeVariants[r].variant.id) &&
            possible[colAttributeVariants[c].attribute.name] ===
              colAttributeVariants[c].variant.id
          );
        } else if (
          rowAttributeVariants[r].attribute.name.slice(0, 4) !== "type" &&
          colAttributeVariants[c].attribute.name.slice(0, 4) === "type"
        ) {
          // The column attribute only is a type
          return (
            possible[rowAttributeVariants[r].attribute.name] ===
              rowAttributeVariants[r].variant.id &&
            (possible.type1 === colAttributeVariants[c].variant.id ||
              possible.type2 === colAttributeVariants[c].variant.id)
          );
        } else {
          // Both the row and the column attribute are types
          return (
            (possible.type1 === rowAttributeVariants[r].variant.id ||
              possible.type2 === rowAttributeVariants[r].variant.id) &&
            (possible.type1 === colAttributeVariants[c].variant.id ||
              possible.type2 === colAttributeVariants[c].variant.id)
          );
        }
      });

      // Push in the matrix the friend found
      matrix.push(possibilities[index]);

      if (possibilities[index]) {
        // Add 1 to the friend counter
        const usedFriendIndex = usedFriends.findIndex(
          (f) => f.friendId === possibilities[index].id
        );
        usedFriends[usedFriendIndex].counter++;

        // If some friend has been used more than MAX_FRIEND_USAGE times
        // remove that friend for the possible friends to choose
        usedFriends.forEach((usedFriend) => {
          if (usedFriend.counter >= MAX_FRIEND_USAGE) {
            possibilities = possibilities.filter(
              (p) => p.id !== usedFriend.friendId
            );
          }
        });
      } else {
        break;
      }
    }
  }

  // Return the matrix and the external attributes
  // Note that the matrix can have undefined values!!
  return { matrix, rowAttributeVariants, colAttributeVariants };
}

function newGame() {
  const savedDate = getGameState()?.today;
  const today = getToday();

  // Create a new doku only if there is no today in local storage
  if (!savedDate || today - savedDate !== 0) {
    // Clear old local storage
    localStorage.clear();

    // Try to build a doku until there exist a solution for the doku,
    // i.e. there is a matrix without undefined values
    let doku = buildDoku();
    while (doku?.matrix?.some((item) => !item)) {
      doku = buildDoku();
    }

    // Store all new game states in local storage
    const { rowAttributeVariants, colAttributeVariants } = doku;
    const newGameState = {
      today,
      row0: rowAttributeVariants[0],
      row1: rowAttributeVariants[1],
      row2: rowAttributeVariants[2],
      col0: colAttributeVariants[0],
      col1: colAttributeVariants[1],
      col2: colAttributeVariants[2],
      ps: 9,
      score: 0,
    };

    setGameState(newGameState);
  }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// ELEMENTS SELECTION
const cells = document.querySelectorAll(".inside");
const extCornerLeft = document.querySelector("#ext-corner-left");
const extCornerRight = document.querySelector("#ext-corner-right");
const extRow0 = document.querySelector("#ext-row-0");
const extRow1 = document.querySelector("#ext-row-1");
const extRow2 = document.querySelector("#ext-row-2");
const extCol0 = document.querySelector("#ext-col-0");
const extCol1 = document.querySelector("#ext-col-1");
const extCol2 = document.querySelector("#ext-col-2");
const psCell = document.querySelector("#ps");
const scoreCell = document.querySelector("#score");
const overlay = document.querySelector(".overlay");
const formModal = document.querySelector("#form-modal");
const btnCloseFormModal = document.querySelector("#close-form-modal");
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const listInput = document.querySelector("#input");
const hiddenInputWithCellId = document.querySelector("#cell-id-input");
const infoBtn = document.querySelector("#info-btn");
const infoModal = document.querySelector("#info-modal");
const btnCloseInfoModal = document.querySelector("#close-info-modal");
const gameOverModal = document.querySelector("#game-over-modal");
const btnCloseGameOverModal = document.querySelector("#close-game-over-modal");
const winModal = document.querySelector("#win-modal");
const btnCloseWinModal = document.querySelector("#close-win-modal");

// HELPER FUNCTIONS
const renderFrameCell = (gameState, cell, cellName) => {
  const cellAttribute = gameState[cellName].attribute;
  const cellVariant = gameState[cellName].variant;

  if (cellAttribute.hasImg) {
    const img = document.createElement("img");
    img.classList.add("cell-sprite");
    img.setAttribute(
      "src",
      `./assets/${cellAttribute.model}/${cellVariant.name}.png`
    );
    cell.appendChild(img);
  } else {
    cell.textContent = cellVariant.name;
  }
};

const renderBoard = () => {
  const gameState = getGameState();

  console.log(renderFrameCell(gameState, extRow0, "row0"));

  // Render values in the external frame
  renderFrameCell(gameState, extRow0, "row0");
  renderFrameCell(gameState, extRow1, "row1");
  renderFrameCell(gameState, extRow2, "row2");
  renderFrameCell(gameState, extCol0, "col0");
  renderFrameCell(gameState, extCol1, "col1");
  renderFrameCell(gameState, extCol2, "col2");
  psCell.textContent = `Punti vita: ${gameState.ps}`;
  scoreCell.textContent = `Punti: ${gameState.score}`;
  if (gameState.ps === 0) {
    // If the ps are over, disable all cells and make summary btn appear
    cells.forEach((cell) => cell.classList.add("disabled"));
    extCornerRight.textContent = "RECAP!";
    extCornerRight.classList.add("summary");
    if (gameState.score === 9) {
      // If the user won, show the win modal
      openWinModal();
      extCornerRight.addEventListener("click", openWinModal);
    } else {
      // If the user lost, show the game over modal
      openGameOverModal();
      extCornerRight.addEventListener("click", openGameOverModal);
    }
  }

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cell = document.querySelector(`#cell-${r}-${c}`);
      const friendInCell = gameState[`cell-${r}-${c}`];
      // If the friend in the cell has already been found,
      // set the right name and sprite to the cell and disable the button
      if (friendInCell) {
        cell.textContent = "";

        // Clear everything in the cell
        while (cell.lastElementChild) {
          cell.removeChild(cell.lastElementChild);
        }

        // Set the sprite
        const img = document.createElement("img");
        img.classList.add("cell-sprite");
        img.setAttribute("src", `./assets/sprites/${friendInCell}.png`);
        cell.appendChild(img);

        // Set the name
        const p = document.createElement("p");
        p.textContent = friendInCell;
        cell.appendChild(p);

        // Disable the cell
        cell.classList.add("disabled");
        cell.removeEventListener("click", onCellClick);
      } else {
        cell.textContent = "???";
        if (gameState.ps > 0) {
          cell.addEventListener("click", onCellClick);
        }
      }
    }
  }
};

const getNonReusableFriends = () => {
  // Retrieve the game state
  const gameState = getGameState();

  // Push all already used friends in an array
  const usedFriends = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const friendInCell = gameState[`cell-${r}-${c}`];
      if (friendInCell) {
        // Push all friends already used in the usedFriends array
        usedFriends.push(friendInCell);
      }
    }
  }

  // TODO: logic to count how many times friends are used
  // and compare it with MAX_FRIEND_USAGE
  return usedFriends;
};

const createFriendList = () => {
  for (const f of friends) {
    const option = document.createElement("option");
    option.value = f.name;
    list.appendChild(option);
  }
};

const isFriendRight = (friend, cellId) => {
  const gameState = getGameState();
  const r = cellId.split("-")[1];
  const c = cellId.split("-")[2];

  if (
    gameState[`row${r}`].attribute.name.slice(0, 4) !== "type" &&
    gameState[`col${c}`].attribute.name.slice(0, 4) !== "type"
  ) {
    // If the row and column attributes are not types
    return (
      friend[gameState[`row${r}`].attribute.name] ===
        gameState[`row${r}`].variant.id &&
      friend[gameState[`col${c}`].attribute.name] ===
        gameState[`col${c}`].variant.id
    );
  } else if (
    gameState[`row${r}`].attribute.name.slice(0, 4) === "type" &&
    gameState[`col${c}`].attribute.name.slice(0, 4) !== "type"
  ) {
    // The row attribute only is a type
    return (
      (friend.type1 === gameState[`row${r}`].variant.id ||
        friend.type2 === gameState[`row${r}`].variant.id) &&
      friend[gameState[`col${c}`].attribute.name] ===
        gameState[`col${c}`].variant.id
    );
  } else if (
    gameState[`row${r}`].attribute.name.slice(0, 4) !== "type" &&
    gameState[`col${c}`].attribute.name.slice(0, 4) === "type"
  ) {
    // The col attribute only is a type
    return (
      friend[gameState[`row${r}`].attribute.name] ===
        gameState[`row${r}`].variant.id &&
      (friend.type1 === gameState[`col${c}`].variant.id ||
        friend.type2 === gameState[`col${c}`].variant.id)
    );
  } else {
    // Both the row and the column attribute are types
    return (
      (friend.type1 === gameState[`row${r}`].variant.id ||
        friend.type2 === gameState[`row${r}`].variant.id) &&
      (friend.type1 === gameState[`col${c}`].variant.id ||
        friend.type2 === gameState[`col${c}`].variant.id)
    );
  }
};

const openFormModal = function () {
  formModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeFormModal = function () {
  formModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openInfoModal = function () {
  infoModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeInfoModal = function () {
  infoModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openWinModal = function () {
  winModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeWinModal = function () {
  winModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openGameOverModal = function () {
  gameOverModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeGameOverModal = function () {
  gameOverModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const onCellClick = (e) => {
  openFormModal();
  const cellId = e.target.id;

  // Add clicked cell id to hidden input tag in the form
  hiddenInputWithCellId.setAttribute("value", cellId);
};

const onFormSubmit = (e) => {
  e.preventDefault();

  // Get the data from the form
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const friendName = data.friend;
  const cellId = data.cell;

  // Check if the chosen friend is the right one
  const friend = getFriendByName(friendName);
  if (!friend) {
    alert("Devi scegliere un a-micio nella lista degli amici!!");
  }
  const nonReusableFriends = getNonReusableFriends();
  if (nonReusableFriends.includes(friendName)) {
    alert(
      `Non puoi utilizzare lo stesso a-micio più di ${
        MAX_FRIEND_USAGE === 1 ? "una volta" : `${MAX_FRIEND_USAGE} volte`
      }!!`
    );
    return;
  }
  const isRight = isFriendRight(friend, cellId);

  const gameState = getGameState();
  if (isRight) {
    // Store in local storage the cell and friend as key-value pairs
    gameState[cellId] = friendName;

    // Increment the score
    gameState.score = gameState.score + 1;
  }

  // Manage ps
  if (gameState.ps > 0) {
    gameState.ps = gameState.ps - 1;
  }

  // Save the new state
  setGameState(gameState);

  // Re-render the board with the updated state
  renderBoard();

  // TODO: Reset datalist default value

  // Close the form modal
  closeFormModal();
};

const makeLogoSay = () => {
  extCornerLeft.addEventListener("click", () => {
    alert("MIAO!");
  });
};

// ACTUAL LOGIC
// Render the board
newGame();
renderBoard();
createFriendList();
makeLogoSay();

// Add event listener to info button
infoBtn.addEventListener("click", openInfoModal);

// Logic for closing the modals
btnCloseFormModal.addEventListener("click", closeFormModal);
overlay.addEventListener("click", closeFormModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !formModal.classList.contains("hidden")) {
    closeFormModal();
  }
});
btnCloseInfoModal.addEventListener("click", closeInfoModal);
overlay.addEventListener("click", closeInfoModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !infoModal.classList.contains("hidden")) {
    closeInfoModal();
  }
});
btnCloseGameOverModal.addEventListener("click", closeGameOverModal);
overlay.addEventListener("click", closeGameOverModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !gameOverModal.classList.contains("hidden")) {
    closeGameOverModal();
  }
});
btnCloseWinModal.addEventListener("click", closeWinModal);
overlay.addEventListener("click", closeWinModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !winModal.classList.contains("hidden")) {
    closeWinModal();
  }
});

form.addEventListener("submit", onFormSubmit);
