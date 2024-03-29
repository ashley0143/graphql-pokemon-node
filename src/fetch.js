import fetch from "node-fetch";

async function get(fetcher, options) {
  if (!options) var options = "sprite,num,species,color,gender,height,weight";
  return await fetch("https://graphqlpokemon.favware.tech/v8", {
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

export default get;
