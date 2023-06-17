import { getCollection, updateCollection } from '../utils/sessionStorage';

const OwnedPokemonPage = () => {
  const collection = getCollection();
  console.log(collection);

  const handleRelease = (pokemon) => {
    // Remove the released Pokémon from the collection
    const updatedCollection = collection.filter((p) => p.id !== pokemon.id);
    updateCollection(updatedCollection);

    alert(`You released ${pokemon.name} from your collection.`);
  };

  return (
    <div>
      <h2>Owned Pokémon</h2>
      <ul>
        {collection.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} <button onClick={() => handleRelease(pokemon)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnedPokemonPage;
