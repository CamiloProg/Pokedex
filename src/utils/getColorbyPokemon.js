import { POKEMON_TYPE_COLORS } from "./constants"

const getColorbyPokemon = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorbyPokemon;
