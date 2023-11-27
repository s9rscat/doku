export interface BaseData {
  id: number;
  name: string;
}

export interface Friend extends BaseData {
  type1: number;
  type2: number;
  generation: number;
  hair: number;
  beard: number;
  house: number;
  engagement: number;
}
