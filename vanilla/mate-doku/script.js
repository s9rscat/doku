"use strict";

// Constants
const GAME_STATE_NAMESPACE = "mate-game-state";
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
  { id: 1, name: "gender", model: "genders" },
  { id: 2, name: "hair", model: "hairs" },
  { id: 3, name: "location", model: "locations" },
  { id: 4, name: "degree", model: "degrees" },
  { id: 5, name: "curriculum", model: "curricula" },
  { id: 6, name: "zanco", model: "zanco" },
  { id: 7, name: "origin", model: "origins" },
  { id: 8, name: "pep", model: "peps" },
  { id: 9, name: "season", model: "seasons" },
  { id: 10, name: "zodiac", model: "zodiacs" },
];

const genders = [
  { id: 1, name: "Femmina" },
  { id: 2, name: "Maschio" },
];

const hairs = [
  { id: 1, name: "Capelli biondi" },
  { id: 2, name: "Capelli castani" },
  { id: 3, name: "Capelli neri" },
];

const degrees = [
  { id: 1, name: "Triennale in Mate" },
  { id: 2, name: "Magistrale in Mate" },
  { id: 3, name: "Dottorato in Mate" },
  { id: 4, name: "Non laureat* in Mate" },
];

const locations = [
  { id: 1, name: "Vive in Italia" },
  { id: 2, name: "Vive in Europa (non UE)" },
  { id: 3, name: "Vive in Europa (UE, non Italia)" },
  { id: 4, name: "Vive in paese extra-europeo" },
];

const curricula = [
  { id: 1, name: "Curriculum generale" },
  { id: 2, name: "Curriculum applicativo" },
  { id: 3, name: "Non ha frequentato in magistrale" },
];

const zanco = [
  { id: 1, name: "Ha dato un esame con Zanco" },
  { id: 2, name: "Non ha dato esami con Zanco" },
];

const origins = [
  { id: 1, name: "Origini MI" },
  { id: 2, name: "Origini MB" },
  { id: 3, name: "Origini CO/LC/VA" },
  { id: 4, name: "Origini BG/BR" },
  { id: 5, name: "Origini LO/PV" },
  { id: 6, name: "Origini extra-lombarda" },
];

const peps = [
  { id: 1, name: "E' stato candidat* di Lista ideale" },
  { id: 2, name: "E' stato candidat* di Obiettivo studenti" },
  {
    id: 3,
    name: "Non espost* politicamente (non candidat* in lista di ateneo)",
  },
];

const seasons = [
  { id: 1, name: "Nato in Primavera" },
  { id: 2, name: "Nato in Estate" },
  { id: 3, name: "Nato in Autunno" },
  { id: 4, name: "Nato in Inverno" },
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
    name: "Francesca Guffanti",
    gender: 1,
    hair: 2,
    location: 4,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 3,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 2,
    name: "Andrea Cappelletti",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 1,
    season: 3,
    zodiac: 9,
  },
  {
    id: 3,
    name: "Nicola Daprà",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 2,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 4,
    name: "Alessandro Landoni",
    gender: 2,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 1,
    origin: 3,
    peps: 1,
    season: 4,
    zodiac: 1,
  },
  {
    id: 5,
    name: "Leonardo Fiore",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 2,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 6,
    name: "Mirco De Pascale",
    gender: 2,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 1,
    zanco: 1,
    origin: 2,
    peps: 3,
    season: 2,
    zodiac: 6,
  },
  {
    id: 7,
    name: "Camilla Feroldi",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 1,
    peps: 3,
    season: 4,
    zodiac: 2,
  },
  {
    id: 8,
    name: "Paola Lamperti",
    gender: 1,
    hair: 1,
    location: 2,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 3,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 9,
    name: "Federico Girotti",
    gender: 2,
    hair: 1,
    location: 1,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 1,
    zodiac: 5,
  },
  {
    id: 10,
    name: "Lorenzo Zambon",
    gender: 2,
    hair: 3,
    location: 2,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 4,
    zodiac: 2,
  },
  {
    id: 11,
    name: "Stefano Decio",
    gender: 2,
    hair: 3,
    location: 4,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 1,
    season: 3,
    zodiac: 10,
  },
  {
    id: 12,
    name: "Stefano Nicoli",
    gender: 2,
    hair: 3,
    location: 2,
    degree: 2,
    curriculum: 2,
    zanco: 1,
    origin: 4,
    peps: 3,
    season: 3,
    zodiac: 11,
  },
  {
    id: 13,
    name: "Gabriele Lobbia",
    gender: 2,
    hair: 3,
    location: 3,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 14,
    name: "Greta Coraglia",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 1,
    zodiac: 4,
  },
  {
    id: 15,
    name: "Ludovico Marini",
    gender: 2,
    hair: 2,
    location: 4,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 16,
    name: "Giacomo Allaria",
    gender: 2,
    hair: 1,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 17,
    name: "Chiara Magnani",
    gender: 1,
    hair: 3,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 1,
    peps: 3,
    season: 2,
    zodiac: 7,
  },
  {
    id: 18,
    name: "Claudio Agostini",
    gender: 2,
    hair: 1,
    location: 3,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 2,
    peps: 1,
    season: 1,
    zodiac: 3,
  },
  {
    id: 19,
    name: "Noemi Chignoli",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 19,
    name: "Luca Frittoli",
    gender: 2,
    hair: 1,
    location: 1,
    degree: 3,
    curriculum: 2,
    zanco: 1,
    origin: 2,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 21,
    name: "Andrea Zanatta",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 5,
    peps: 3,
    season: 1,
    zodiac: 4,
  },
  {
    id: 22,
    name: "Sofia Guarato",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 1,
    peps: 3,
    season: 1,
    zodiac: 2,
  },
  {
    id: 23,
    name: "Elisabetta Peviani",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 5,
    peps: 3,
    season: 1,
    zodiac: 5,
  },
  {
    id: 24,
    name: "Agostina Ferrari",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 5,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 25,
    name: "Anna Cascarano",
    gender: 1,
    hair: 2,
    location: 2,
    degree: 2,
    curriculum: 2,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 3,
    zodiac: 9,
  },
  {
    id: 26,
    name: "Simone Maletto",
    gender: 2,
    hair: 2,
    location: 4,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 1,
    season: 2,
    zodiac: 8,
  },
  {
    id: 27,
    name: "Gianluca Redondi",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 1,
    peps: 3,
    season: 1,
    zodiac: 5,
  },
  {
    id: 28,
    name: "Giulia Liberatore",
    gender: 1,
    hair: 3,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 5,
    peps: 3,
    season: 2,
    zodiac: 7,
  },
  {
    id: 29,
    name: "Leonardo Bottelli",
    gender: 2,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 3,
    peps: 3,
    season: 4,
    zodiac: 1,
  },
  {
    id: 30,
    name: "Aurora Cecco",
    gender: 1,
    hair: 1,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 4,
    peps: 3,
    season: 3,
    zodiac: 10,
  },
  {
    id: 31,
    name: "Giacomo Perna",
    gender: 2,
    hair: 2,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 2,
    peps: 3,
    season: 1,
    zodiac: 5,
  },
  {
    id: 32,
    name: "Giulio Colombo",
    gender: 2,
    hair: 2,
    location: 1,
    degree: 3,
    curriculum: 1,
    zanco: 1,
    origin: 4,
    peps: 3,
    season: 2,
    zodiac: 8,
  },
  {
    id: 33,
    name: "Lara Colombo",
    gender: 1,
    hair: 2,
    location: 1,
    degree: 4,
    curriculum: 3,
    zanco: 2,
    origin: 2,
    peps: 3,
    season: 3,
    zodiac: 11,
  },
  {
    id: 34,
    name: "Alessandro Canzoni",
    gender: 2,
    hair: 3,
    location: 1,
    degree: 2,
    curriculum: 1,
    zanco: 1,
    origin: 6,
    peps: 3,
    season: 4,
    zodiac: 12,
  },
  {
    id: 35,
    name: "Silvia Muraca",
    gender: 1,
    hair: 1,
    location: 1,
    degree: 2,
    curriculum: 2,
    zanco: 2,
    origin: 3,
    peps: 3,
    season: 4,
    zodiac: 12,
  },
];

const data = {
  friendAttributes,
  genders,
  hairs,
  locations,
  degrees,
  curricula,
  zanco,
  origins,
  peps,
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

// Gender repository
function getGenderById(id) {
  return genders.find((gender) => gender.id === id);
}

// Hair repository
function getHairById(id) {
  return hairs.find((hair) => hair.id === id);
}

// Location repository
function getLocationById(id) {
  return locations.find((location) => location.id === id);
}

// Degree repository
function getDegreeById(id) {
  return degrees.find((degree) => degree.id === id);
}

// Curriculum repository
function getCurriculumById(id) {
  return curricula.find((curriculum) => curriculum.id === id);
}

// Zanco repository
function getZancoById(id) {
  return zanco.find((zanco) => zanco.id === id);
}

// Origin repository
function getOriginById(id) {
  return origins.find((origin) => origin.id === id);
}

// Pep repository
function getPepById(id) {
  return peps.find((pep) => pep.id === id);
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
  1: getGenderById,
  2: getHairById,
  3: getLocationById,
  4: getDegreeById,
  5: getCurriculumById,
  6: getZancoById,
  7: getOriginById,
  8: getPepById,
  9: getSeasonById,
  10: getZodiacById,
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

      // Push the used attribute in usedAttributes
      usedAttributeIds.push(possibleAttributes[random].id);
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

    // Push the variant in the row attribute variants
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
const renderBoard = () => {
  const gameState = getGameState();

  // Render values in the external frame
  extRow0.textContent = gameState.row0.variant.name;
  extRow1.textContent = gameState.row1.variant.name;
  extRow2.textContent = gameState.row2.variant.name;
  extCol0.textContent = gameState.col0.variant.name;
  extCol1.textContent = gameState.col1.variant.name;
  extCol2.textContent = gameState.col2.variant.name;
  psCell.textContent = `Punti vita: ${gameState.ps}`;
  scoreCell.textContent = `Punti: ${gameState.score}`;
  if (gameState.ps === 0) {
    // If the ps are over, disable all cells and make summary btn appear
    cells.forEach((cell) => cell.classList.add("disabled"));
    extCornerRight.textContent = "RECAP";
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
      // set the right name to the cell and disable the button
      if (friendInCell) {
        cell.textContent = friendInCell;
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
    alert("Devi scegliere un mate nella lista dei mates!!");
  }
  const nonReusableFriends = getNonReusableFriends();
  if (nonReusableFriends.includes(friendName)) {
    alert(
      `Non puoi utilizzare lo stesso mate più di ${
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

  // Reset datalist default value
  listInput.setAttribute("value", " ");
  // list.setAttribute("value", " ");

  // Close the form modal
  closeFormModal();
};

const makeLogoSay = () => {
  extCornerLeft.addEventListener("click", () => {
    alert("exp(iπ) + 1 = 0");
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
