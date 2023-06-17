export const getCollection = () => {
    const collection = localStorage.getItem('ownedPokemon');
    return collection ? JSON.parse(collection) : [];
};

export const updateCollection = (updatedCollection) => {
    localStorage.setItem('ownedPokemon', JSON.stringify(updatedCollection));
};
