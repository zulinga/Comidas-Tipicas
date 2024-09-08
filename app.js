function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    
    if(!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma comida foi encontrada. Você precisa buscar por uma comida ou algo parecido</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    // se no dado.titulo.includes campoPesquisa.
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena HTML para criar um novo elemento de resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link} " target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;

        }
        
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}

//console.log(dados);