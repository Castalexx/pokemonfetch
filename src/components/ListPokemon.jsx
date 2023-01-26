import { useState } from 'react';
import axios from 'axios'


const ListPokemon = (props) => {
	const [listPoke, setListPoke] = useState([]);

	const fetchPokemon = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
			.then(response => response.data)
			.then(response => setListPoke(response.results))
	};

	return (
		<div>
			<button className='btn btn-primary' onClick={fetchPokemon}>Fetch Pokemon</button>
			<ul className='center-list'>
				{listPoke.length > 0 && listPoke.map((eachPokemon)=>{
					return (
					<li>{eachPokemon.name}</li>
					)
				})}
			</ul>
		</div>
    );
}
export default ListPokemon;