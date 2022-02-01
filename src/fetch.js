const fetch = require("node-fetch");

module.exports = async function fetch(fetcher, options) {
  if (!options) var options = "sprite,num,species,color,gender,height,weight";
  return await fetch("https://graphqlpokemon.favware.tech/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        getPokemon(pokemon: ${fetcher}) {
        ${options}
            }
      }
    `,
    }),
  }).then((res) => res.json());
}

