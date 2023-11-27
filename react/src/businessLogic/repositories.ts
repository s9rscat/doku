import {
  friends,
  types,
  hairs,
  beards,
  generations,
  engagements,
  houses,
} from "./data";

// Friend repository
export function getFriendById(id: number) {
  return friends.find((friend) => friend.id === id);
}

export function getFriendByName(name: string) {
  return friends.find((friend) => friend.name === name);
}

// Generation repository
export function getGenerationById(id: number) {
  return generations.find((generation) => generation.id === id);
}

// Type repository
export function getTypeById(id: number) {
  return types.find((type) => type.id === id);
}

// Beard repository
export function getBeardById(id: number) {
  return beards.find((beard) => beard.id === id);
}

// Hair repository
export function getHairById(id: number) {
  return hairs.find((hair) => hair.id === id);
}

// House repository
export function getHouseById(id: number) {
  return houses.find((house) => house.id === id);
}

// Engagement repository
export function getEngagementById(id: number) {
  return engagements.find((engagement) => engagement.id === id);
}
