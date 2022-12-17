import CharacterCard from "../../components/CharacterCard";

const character = {
  created: "2017-11-04T18:48:46.250Z",
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
  status: "Alive",
  type: "",
};

describe("CharacterCard.cy.ts", () => {
  it("playground", () => {
    cy.mount(<CharacterCard character={character} />);
    cy.get('button').should('contains.text', 'Rick Sanchez');
  });
});
