function click_calcular() {
    let valorA = Number(document.getElementById("a").value);
    let valorB = Number(document.getElementById("b").value);
    let valorC = Number(document.getElementById("c").value);

    if (valorA == "") alert("Informe o valor A");
    else if (valorB == "") alert("Informe o valor B");
    else if (valorC == "") alert("Informe o valor C");

    else {
        let delta = valorB ** 2 - 4 * valorA * valorC;
        let x1 = 0;
        let x2 = 0;

        if (delta < 0) alert(`Valor complexo`)
        else {
            x1 = ((-valorB) + Math.sqrt(delta)) / (2 * valorA);
            x2 = ((-valorB) - Math.sqrt(delta)) / (2 * valorA);
        }
        document.getElementById("valorx1").value = x1;
        document.getElementById("valorx2").value = x2;
    }
}

function click_limpar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
}