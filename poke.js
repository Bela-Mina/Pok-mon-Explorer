


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
        document.querySelector("#pokInput").value=""
        //console.log(data)
//
        const dataImage = data.sprites.front_default
        //
        const Images = document.querySelector("#pokImage");

        Images.src = dataImage
        Images.style.display = "block"
        const message = document.querySelector("#result");

        message.textContent = "";
    }
    catch(error) {
        
        const message = document.querySelector("#result")
        const Images = document.querySelector("#pokImage");
        Images.style.display = "none"

        message.textContent = "Pokémon not found. Please check the name and try again." 
        //console.log(error)
}
 }
