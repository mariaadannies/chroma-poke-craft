import React from 'react';
import { useRouter } from 'next/router';

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Pokemon Detail - {id}</h1>
      {/* Display pokemon details */}
    </div>
  );
};

export default PokemonDetail;
