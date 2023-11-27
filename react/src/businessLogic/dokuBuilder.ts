import { friends } from "./data";
import { randomIntFromInterval } from "./helpers";
import { Friend, BaseData } from "./types";
import {
  getTypeById,
  getGenerationById,
  getBeardById,
  getEngagementById,
} from "./repositories";

export function buildDoku() {
  // Define the matrix as an empty array
  const matrix: Friend[] = []; // Read top to bottom, left to right

  // Create a copy of friends
  const possibilities = [...friends];
  const numOfPossibilities = possibilities.length;

  // Create a diagonal by taking 3 random friends
  const diagonal: Friend[] = [];
  for (let i = numOfPossibilities; i > numOfPossibilities - 3; i--) {
    const random = randomIntFromInterval(0, i - 1);
    diagonal.push(possibilities[random]);
    possibilities.splice(random, 1);
  }

  // Extract rows and cols attributes from the diagonal friends,
  // creating the external schema
  const extRow = [
    getTypeById(diagonal[0].type1),
    getTypeById(diagonal[1].type1),
    getGenerationById(diagonal[2].generation),
  ];
  const extCol = [
    getTypeById(diagonal[0].type2),
    getBeardById(diagonal[1].beard),
    getEngagementById(diagonal[2].engagement),
  ];

  // Create a possible matrix by looking at the friends
  // who fit the attributes in the external schema created
  for (let c = 0; c < 3; c++) {
    for (let r = 0; r < 3; r++) {
      if (c === r) {
        matrix.push(diagonal[c]);
      } else if (r === 2) {
        const index = possibilities.findIndex((possible) => {
          return (
            (possible.type1 === extCol[c]!.id ||
              possible.type2 === extCol[c]!.id) &&
            possible.generation === extRow[r]!.id
          );
        });
        matrix.push(possibilities[index]);
        // possibilities.splice(index, 1);
      } else if (c === 1) {
        const index = possibilities.findIndex(
          (possible) =>
            possible.beard === extCol[c]!.id &&
            (possible.type1 === extRow[r]!.id ||
              possible.type2 === extRow[r]!.id)
        );
        matrix.push(possibilities[index]);
        // possibilities.splice(index, 1);
      } else if (c === 2) {
        const index = possibilities.findIndex(
          (possible) =>
            possible.engagement === extCol[c]!.id &&
            (possible.type1 === extRow[r]!.id ||
              possible.type2 === extRow[r]!.id)
        );
        matrix.push(possibilities[index]);
        // possibilities.splice(index, 1);
      } else {
        const index = possibilities.findIndex(
          (possible) =>
            (possible.type1 === extCol[c]!.id ||
              possible.type2 === extCol[c]!.id) &&
            (possible.type1 === extRow[r]!.id ||
              possible.type2 === extRow[r]!.id)
        );
        matrix.push(possibilities[index]);
        // possibilities.splice(index, 1);
      }
    }
  }

  // Return the matrix and the external attributes
  // Note that the matrix can have undefined values!!
  return { matrix, extRow, extCol };
}

export function getDokuFrame(): {
  extRow: BaseData[];
  extCol: BaseData[];
} {
  let doku = buildDoku();
  while (doku?.matrix?.some((item) => !item)) {
    doku = buildDoku();
  }

  return {
    extRow: doku.extRow,
    extCol: doku.extCol,
  } as {
    extRow: BaseData[];
    extCol: BaseData[];
  };
}
