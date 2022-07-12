function compra() {

    let resu = sessionStorage.getItem('nome5');
    let resu2 = sessionStorage.getItem('nome1');
    let resu3 = sessionStorage.getItem('nome3');
    let resu4 = sessionStorage.getItem('nome4');
    let resu5 = sessionStorage.getItem('nome');

    let resu6 = parseInt(resu) + parseInt(resu2) + parseInt(resu3) + parseInt(resu4) + parseInt(resu5);

    document.getElementById("total").innerHTML = "R$" + resu6 + ",00";
    document.getElementById("vista").value = "R$" + resu6 + ",00";


    let parcela = document.getElementById("parcela");
    parcela.addEventListener("click", (e) => {
        switch (parcela.value) {
            case "1":
                document.getElementById("cartao").value = "parcelas";
                break;

            case "2":
                document.getElementById("cartao").value = "R$" + (resu6 / 2).toFixed(2);
                break;

            case "3":
                document.getElementById("cartao").value = "R$" + (resu6 / 3).toFixed(2);
                break;

            case "4":
                document.getElementById("cartao").value = "R$" + (resu6 / 4).toFixed(2);
                break;
        }
    })
}        