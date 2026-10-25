


const search = document.querySelector("#search-form");

search.addEventListener("submit", function(event)  {
        event.preventDefault()
        fetchData()
})

 async function fetchData() {
    try{
        const pokMan = document.querySelector("#pokInput")
        .value
        .trim()
        .toLowerCase()
        //const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokMan}`)
        if(!response.ok) {
            throw new Error("failed to fetch pokemon")
        }
        const data = await response.json()
        //console.log(data)
//
        const dataImage = data.sprites.front_default
        //
        const Images = document.querySelector("#pokImage");

        Images.src = dataImage
        Images.style.display = "block"
    }
    catch(error) {
        const errors = document.querySelector("#poke-result")
        errors.innerHTML = "Pokémon not found. Please check the name and try again."
        //console.log(error)
    }
}
///////////////////
//////////////////
////
