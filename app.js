function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>"    
    return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let modelo = "";
    let marca = "";
    let descricao = "";
    let tags = "";

for (let dado of dados) {

    marca = dado.marca.toLowerCase()
    modelo = dado.modelo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (modelo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.modelo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <img src="${dado.imagem}" alt="trator" class="imagem">
                        <a href=${dado.link} target="_blank">mais informações</a>
                    </div>
        `;
    }
   
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado. Voçê precisa digitar o nome de um trator</p>"
}

section.innerHTML = resultados
}


