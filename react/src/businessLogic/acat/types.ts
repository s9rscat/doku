export interface Attribute {
  id: number;
  name: FriendAttribute;
  model: Model;
}

export interface Variant {
  id: number;
  name: string;
}

export interface AttributeVariant {
  variant: Variant;
  attribute: Attribute;
}

type FriendAttribute =
  | "type1"
  | "type2"
  | "generation"
  | "hair"
  | "beard"
  | "house"
  | "engagement";

export interface Friend extends Record<FriendAttribute, number> {
  id: number;
  name: string;
}

export type AttributeModel =
  | "types"
  | "generations"
  | "hairs"
  | "beards"
  | "houses"
  | "engagements";

export type Model = AttributeModel | "friends";

export type DataBase = Record<Model, Attribute | Friend>;

export interface GameState {
  today?: number;
  row0?: AttributeVariant;
  row1?: AttributeVariant;
  row2?: AttributeVariant;
  col0?: AttributeVariant;
  col1?: AttributeVariant;
  col2?: AttributeVariant;
  ps?: number;
  score?: number;
  "cell-0-0"?: string;
  "cell-0-1"?: string;
  "cell-0-2"?: string;
  "cell-1-0"?: string;
  "cell-1-1"?: string;
  "cell-1-2"?: string;
  "cell-2-0"?: string;
  "cell-2-1"?: string;
  "cell-2-2"?: string;
}
