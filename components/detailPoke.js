import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { getCollection, updateCollection } from '../utils/sessionStorage';
import styles from '../styles/detail.module.css';

const PokemonDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pokemon, setPokemon] = useState(null);
    const [isCatching, setIsCatching] = useState(false);
    const [isCaught, setIsCaught] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching pokemon:', error);
            }
        };

        fetchPokemon();
    }, [id]);

    const handleCatch = () => {
        const successProbability = Math.random() < 0.5;

        if (successProbability) {
            let ownedPokemon = getCollection();
            console.log(ownedPokemon);
            const isAlreadyOwned = ownedPokemon.some((owned) => owned.id === pokemon.id);

            if (!isAlreadyOwned) {
                ownedPokemon.push(pokemon);
                updateCollection(ownedPokemon);
                alert(`You caught ${pokemon.name}!`);
                console.log(ownedPokemon);
                setIsCaught(true);
            } else {
                alert(`You already caught ${pokemon.name}!`);
            }

        } else {
            alert('Oh no! The pokemon escaped!');
        }
    };

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const { name, sprites, types, weight, height, abilities, moves, stats } = pokemon;

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th colSpan="12">
                                <h1 className={styles.title}>{name}</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="12"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td colSpan="4" rowSpan="3">
                                <img className={styles.image} src={sprites.front_default} alt={name} />
                            </td>
                            <td></td>
                            <td colSpan="2">
                                <p className={styles.title}>Types</p>
                            </td>
                            <td colSpan="2">
                                <ul className={styles.list}>
                                    {types.map((type) => (
                                        <li key={type.type.name}>{type.type.name}</li>
                                    ))}
                                </ul>
                            </td>
                            <td colSpan="2"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td></td>
                            <td colSpan="2">Weight</td>
                            <td colSpan="2">
                                <p>{weight}</p>
                            </td>
                            <td colSpan="2"></td>
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td></td>
                            <td colSpan="2">Height</td>
                            <td colSpan="2">
                                <p>{height}</p>
                            </td>
                            <td colSpan="2"></td>
                        </tr>
                        <tr>
                            <td colSpan="12"></td>
                        </tr>
                        <tr>
                            <td colSpan="4">Moves</td>
                            <td colSpan="4">Abilities</td>
                            <td colSpan="4">Stats</td>
                        </tr>
                        {moves.map((move, index) => (
                            <tr key={move.move.name}>
                                {(index % 4 === 0) && (
                                    <>
                                        <td>{move.move.name}</td>
                                        <td>{index + 1 < moves.length ? moves[index + 1].move.name : ''}</td>
                                        <td>{index + 2 < moves.length ? moves[index + 2].move.name : ''}</td>
                                        <td>{index + 3 < moves.length ? moves[index + 3].move.name : ''}</td>
                                    </>
                                )}
                                {index === 0 && (
                                    <td colSpan="4" rowSpan={moves.length}>
                                        <ul className={styles.list}>
                                            {abilities.map((ability) => (
                                                <li key={ability.ability.name}>{ability.ability.name}</li>
                                            ))}
                                        </ul>
                                    </td>
                                )}
                                {index === 0 && (
                                    <td colSpan="4" rowSpan={moves.length}>
                                        <ul className={styles.list}>
                                            {stats.map((stat) => (
                                                <li
                                                    key={stat.stat.name}
                                                    className={`${styles.listItem}`}
                                                >
                                                    <span>{stat.stat.name} : {stat.base_stat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                )}
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="12">
                                    <button
                                        disabled={isCatching}
                                        onClick={handleCatch}
                                        className={styles.button}
                                    >
                                        {isCatching ? 'Catching...' : 'Catch'}
                                        <div class="hoverEffect">
                                        <div></div>
                                        </div>
                                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PokemonDetail;
