export type PropertyGeneric = Readonly<{
  name: string;
  url: string;
}>;

export type PokemonResult = Readonly<{
  count: number;
  next: string;
  previous: string;
  results: PropertyGeneric[];
}>;

export type Pokemon = Readonly<{
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  sprites: Sprite;
  stats: Stats[];
  types: PokemonType[];
  base_experience: number;
  abilities: Ability[];
  forms: PropertyGeneric[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  past_types: [];
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  species: PropertyGeneric;
}>;

export interface PokemonPayload {
  offset: number;
  limit: number;
}

export interface Ability {
  ability: PropertyGeneric;
  is_hidden: false;
  slot: number;
}

export interface GameIndex {
  game_index: number;
  version: PropertyGeneric;
}

export interface Move {
  move: PropertyGeneric;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PropertyGeneric;
  version_group: PropertyGeneric;
}

export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: PokemonImage;
}

export interface PokemonImage {
  dream_world: {
    front_default: string;
    front_female: string;
  };
  'official-artwork': {
    front_default: string;
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: PropertyGeneric;
}

export interface PokemonType {
  slot: number;
  type: PropertyGeneric;
}

export interface HeldItem {
  item: PropertyGeneric;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: PropertyGeneric;
}

export interface PastYypes {
  generation: PropertyGeneric;
  types: PokemonType[];
}

export enum PokemonColorType {
  grass = 'grass',
  electric = 'electric',
  water = 'water',
  ground = 'ground',
  rock = 'rock',
  fairy = 'fairy',
  poison = 'poison',
  bug = 'bug',
  dragon = 'dragon',
  psychic = 'psychic',
  flying = 'flying',
  fighting = 'fighting',
  fire = 'fire',
  normal = 'normal',
}

export const POKEMON_COLOR = [
  {
    type: PokemonColorType.grass,
    color: '#defde0',
  },
  {
    type: PokemonColorType.electric,
    color: '#fcf7de',
  },
  {
    type: PokemonColorType.water,
    color: '#def3fd',
  },
  {
    type: PokemonColorType.ground,
    color: '#f4e7da',
  },
  {
    type: PokemonColorType.rock,
    color: '#d5d5d4',
  },
  {
    type: PokemonColorType.fairy,
    color: '#fceaff',
  },
  {
    type: PokemonColorType.poison,
    color: '#98d7a5',
  },
  {
    type: PokemonColorType.bug,
    color: '#f8d5a3',
  },
  {
    type: PokemonColorType.dragon,
    color: '#97b3e6',
  },
  {
    type: PokemonColorType.psychic,
    color: '#eaeda1',
  },
  {
    type: PokemonColorType.flying,
    color: '#f5f5f5',
  },
  {
    type: PokemonColorType.fighting,
    color: '#e6e0d4',
  },
  {
    type: PokemonColorType.fire,
    color: '#fddfdf',
  },
  {
    type: PokemonColorType.normal,
    color: '#f5f5f5',
  },
];

