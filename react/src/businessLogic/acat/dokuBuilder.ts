import { GAME_STATE_NAMESPACE, MAX_FRIEND_USAGE } from "../constants";
import { getToday, randomIntFromInterval } from "../helpers";
import data from "./data";
import { Attribute, AttributeVariant, GameState } from "./types";

function getGameState(): GameState {
  const stringifiedGameState = localStorage.getItem(GAME_STATE_NAMESPACE);
  if (!stringifiedGameState) {
    return {};
  } else {
    return JSON.parse(stringifiedGameState);
  }
}

function setGameState(gameState: GameState) {
  return localStorage.setItem(GAME_STATE_NAMESPACE, JSON.stringify(gameState));
}

function getFrameAttributes() {
  // Create a copy of the friend attributes
  const possibleAttributes = [...data.friendAttributes];
  const numPossibleAttributes = possibleAttributes.length;

  // Save here the attributes already used, since the same attribute
  // should never appear trice in the same row/column
  const usedAttributeIds: number[] = [];

  // Get six random attributes (duplicates are allowed on the same row/column only)
  const rowAttributes: Attribute[] = [];
  const colAttributes: Attribute[] = [];

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
  const usedAttributeVariants: { attributeId: number; variantId: number }[] =
    [];

  const rowAttributeVariants: AttributeVariant[] = [];
  const colAttributeVariants: AttributeVariant[] = [];

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
  }

  return { rowAttributeVariants, colAttributeVariants };
}

function buildDoku() {
  // Define the matrix as an empty array
  const matrix = []; // Read top to bottom, left to right

  // Get frame attributes
  const { rowAttributeVariants, colAttributeVariants } = getFrame();

  // Create a copy of friends
  let possibilities = [...data.friends];
  const usedFriends = data.friends.map((friend) => {
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

export default function newGame() {
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
