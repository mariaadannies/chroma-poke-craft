import React from 'react';
import { render, screen } from '@testing-library/react';
import OwnedPokemon from '../components/ownedPoke.js';

describe('OwnedPokemon', () => {
    test('displays owned Pokemon', () => {
        // Mock the collection data
        const mockCollection = [
            {
                id: 1,
                name: 'Pikachu',
                sprites: {
                    front_default: 'pikachu.png',
                },
            },
            {
                id: 2,
                name: 'Charizard',
                sprites: {
                    front_default: 'charizard.png',
                },
            },
        ];

        // Render the component
        render(<OwnedPokemon />, { initialState: { collection: mockCollection } });

        // Assert that the correct Pokemon are displayed
        expect(screen.getByText('Pikachu')).toBeInTheDocument();
        expect(screen.getByText('Charizard')).toBeInTheDocument();

        // Assert that the correct images are displayed
        expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'pikachu.png');
        expect(screen.getByAltText('Charizard')).toHaveAttribute('src', 'charizard.png');
    });

    test('displays message for empty collection', () => {
        // Render the component with an empty collection
        render(<OwnedPokemon />, { initialState: { collection: [] } });

        // Assert that the correct message is displayed
        expect(screen.getByText('No Pokemon Owned')).toBeInTheDocument();
    });
});

describe('OwnedPokemon', () => {
    test('removes released Pokemon from the collection', () => {
        // Mock the collection data
        const mockCollection = [
            {
                id: 1,
                name: 'Pikachu',
                sprites: {
                    front_default: 'pikachu.png',
                },
            },
            {
                id: 2,
                name: 'Charizard',
                sprites: {
                    front_default: 'charizard.png',
                },
            },
        ];

        // Mock the updateCollection function
        const updateCollectionMock = jest.fn();

        // Render the component
        render(<OwnedPokemon />, { initialState: { collection: mockCollection, updateCollection: updateCollectionMock } });

        // Click the release button for Pikachu
        const releaseButton = screen.getByText('Release');
        fireEvent.click(releaseButton);

        // Assert that the release button was clicked and the updateCollection function was called
        expect(releaseButton).toBeCalled();
        expect(updateCollectionMock).toBeCalledWith([{ id: 2, name: 'Charizard', sprites: { front_default: 'charizard.png' } }]);
    });
});