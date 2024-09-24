const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let currentId = 1;

//Recebe os detalhes de um Pokémon e exibe essas informações dentro do container.
//Renderiza um cartão (.card) com a imagem, nome e ID do Pokémon.
const renderDetails = (details) => {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="card text-center">
            <img src="${details.sprites.other.home.front_default}" class="img-fluid"/>
            <h2>${details.name}</h2>
            <p>#${details.id}</p>
        </div>
    `;
}


// Função assíncrona (Carrega os dados de um Pokémon específico a partir da API usando o ID fornecido (nextId).)
//Atualiza a variável currentId com o novo ID.
//Chama a função renderDetails() para exibir os detalhes do Pokémon na página.
const loadPokemonData = async (nextId) => {
  const response = await fetch(apiURL + nextId);
  const data = await response.json();
  currentId = +nextId;
  renderDetails(data);
};

// Configura os eventos de clique e submissão de formulário para os elementos interativos.
// nextButton: Carrega o próximo Pokémon ao incrementar o currentId.
// previusButton: Carrega o Pokémon anterior ao decrementar o currentId.
const loadActionEvents = () => {
  const previusButton = document.getElementById("previus");
  const nextButton = document.getElementById("next");
  const searchForm = document.getElementById("search-form");

  nextButton.addEventListener("click", () => {
    loadPokemonData(currentId + 1);
  });

  previusButton.addEventListener("click", () => {
    loadPokemonData(currentId - 1);
  });

  searchForm.addEventListener("submit", (ev) => { //Intercepta o evento padrão de submissão do formulário (ev.preventDefault()).
    ev.preventDefault();
    const input = document.getElementById("search-input");
    loadPokemonData(input.value);
  });
};

loadPokemonData(currentId); //loadPokemonData(currentId): Carrega os dados do Pokémon com o ID inicial (1).
loadActionEvents(); //loadActionEvents(): Configura os eventos de ação para navegação e busca.