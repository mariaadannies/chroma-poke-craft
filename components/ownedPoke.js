import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';


const OwnedPokemon = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        import('../utils/sessionStorage').then(({ getCollection }) => {
            const storedCollection = getCollection();
            setCollection(storedCollection);
        });
        console.log("before");
        console.log(collection);
    }, []);

    const handleRelease = (pokemon) => {
        // Remove the released Pokémon from the collection
        console.log(pokemon.id);
        const updatedCollection = collection.filter((owned) => owned.id !== pokemon.id);

        alert(`You released ${pokemon.name} from your collection.`);

        // Update the state
        setCollection(updatedCollection);
        import('../utils/sessionStorage').then(({ updateCollection }) => {
            updateCollection(updatedCollection);
        });
        console.log("after");    
        console.log(collection);

    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Owned Pokemon</h1>
            <br></br>
            <br></br>
            {collection.length === 0 ? (
                <div>No Pokemon Owned</div>
            ) : (
                <ul className={styles.cardList}>
                    {collection.map((pokemon) => (
                        <div className={styles.myCard}>
                            <div className={styles.innerCard}>
                                <div className={styles.frontSide}>
                                    <img className={styles.title} src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                                    <p className={styles.title}>{pokemon.name}</p>
                                </div>
                                <div className={styles.backSide}>
                                    <p className={styles.title}>{pokemon.name}</p>
                                    <button onClick={() => handleRelease(pokemon)}>Release</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OwnedPokemon;
