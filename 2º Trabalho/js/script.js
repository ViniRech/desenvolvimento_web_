window.onload = function() {
    const data = new Date();

    let mes = (data.getMonth() === 0) ? ` de janeiro de `
    : (data.getMonth() === 1) ? ` de fevereiro de `
    : (data.getMonth() === 2) ? ` de março de `
    : (data.getMonth() === 3) ? ` de abril de `
    : (data.getMonth() === 4) ? ` de maio de `
    : (data.getMonth() === 5) ? ` de junho de `
    : (data.getMonth() === 6) ? ` de julho de `
    : (data.getMonth() === 7) ? ` de agosto de `
    : (data.getMonth() === 8) ? ` de setembro de `
    : (data.getMonth() === 9) ? ` de outubro de `
    : (data.getMonth() === 10) ? ` de novembro de `
    : ` de dezembro de `;

    let dataAtual = data.getDate() + mes + data.getFullYear();
    document.querySelector(".cabecalho-data").textContent = dataAtual;
}

