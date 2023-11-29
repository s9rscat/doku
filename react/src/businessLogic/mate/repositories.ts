import data from "./data";

// Friend repository
export function getFriendById(id: number) {
  return data.friends.find((friend) => friend.id === id);
}

export function getFriendByName(name: string) {
  return data.friends.find((friend) => friend.name === name);
}

// Gender repository
export function getGenderById(id: number) {
  return data.genders.find((gender) => gender.id === id);
}

// Hair repository
export function getHairById(id: number) {
  return data.hairs.find((hair) => hair.id === id);
}

// Location repository
export function getLocationById(id: number) {
  return data.locations.find((location) => location.id === id);
}

// Degree repository
export function getDegreeById(id: number) {
  return data.degrees.find((degree) => degree.id === id);
}

// Curriculum repository
export function getCurriculumById(id: number) {
  return data.curricula.find((curriculum) => curriculum.id === id);
}

// Zanco repository
export function getZancoById(id: number) {
  return data.zanco.find((zanco) => zanco.id === id);
}

// Origin repository
export function getOriginById(id: number) {
  return data.origins.find((origin) => origin.id === id);
}

// Pep repository
export function getPepById(id: number) {
  return data.peps.find((pep) => pep.id === id);
}
