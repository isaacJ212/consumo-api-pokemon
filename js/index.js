const cartaContenedor = document.getElementById('carta-contenedor')
const generadorBoton = document.getElementById('generar-boton')

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

function generarID() {
    return Math.floor(Math.random() * 1025) + 1
}

async function fetchPokemon() {
    const pokemonID = generarID()
    const response = await fetch(`${apiUrl}${pokemonID}`)
    if (!response.ok) {
        throw new error('No se pudo obtener la información del Pokémon')
    }
    const data = response.json()
    return data
}

generadorBoton.addEventListener('click', async () => {
    try {
        const pokemonData = await fetchPokemon()
        mostrarInfoPokemon(pokemonData)
    } catch (error) {
        console.error(error)
        alert('Hubo un problema al generar la carta del Pokémon. Inténtalo de nuevo más tarde.')
    }

})

function mostrarInfoPokemon(pokemon) {
    const cartaHTML = `<div>
                        <img src='${pokemon.sprites.front_default}'>
                        <h1>${pokemon.name}</h1>
                        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                        <p><strong>Habilidad:</strong> ${pokemon.abilities[0].ability.name}</p>
                    </div>`
    cartaContenedor.innerHTML = cartaHTML
}