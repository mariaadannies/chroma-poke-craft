export const getCollection = () => {
    if (typeof localStorage !== 'undefined') {
      const collection = localStorage.getItem('ownedPokemon');
      return collection ? JSON.parse(collection) : [];
    } else {
      return [];
    }
  };
  
  export const updateCollection = (updatedCollection) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ownedPokemon', JSON.stringify(updatedCollection));
    }
  };
  