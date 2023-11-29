import data from "./data";

// Friend repository
export function getFriendById(id: number) {
  return data.friends.find((friend) => friend.id === id);
}

export function getFriendByName(name: string) {
  return data.friends.find((friend) => friend.name === name);
}

// Generation repository
export function getGenerationById(id: number) {
  return data.generations.find((generation) => generation.id === id);
}

// Type repository
export function getTypeById(id: number) {
  return data.types.find((type) => type.id === id);
}

// Beard repository
export function getBeardById(id: number) {
  return data.beards.find((beard) => beard.id === id);
}

// Hair repository
export function getHairById(id: number) {
  return data.hairs.find((hair) => hair.id === id);
}

// House repository
export function getHouseById(id: number) {
  return data.houses.find((house) => house.id === id);
}

// Engagement repository
export function getEngagementById(id: number) {
  return data.engagements.find((engagement) => engagement.id === id);
}
