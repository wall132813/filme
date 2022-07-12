function  addcart1(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma1", soma)
    window.location.replace("home.html");
}

function  addcart2(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma2", soma)
    window.location.replace("home.html");
}

function  addcart3(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma3", soma)
    window.location.replace("home.html");
}

function  addcart4(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma4", soma)
    window.location.replace("home.html");
}

function  addcart5(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma5", soma)
    window.location.replace("home.html");
}

function  addcart6(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma6", soma)
    window.location.replace("home.html");
}

function  addcart7(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma7", soma)
    window.location.replace("home.html");
}

function  addcart8(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma8", soma)
    window.location.replace("home.html");
}

function  addcart9(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma9", soma)
    window.location.replace("home.html");
}

function  addcart10(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma10", soma)
    window.location.replace("home.html");
}

function  addcart11(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma11", soma)
    window.location.replace("home.html");
}

function  addcart12(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma12", soma)
    window.location.replace("home.html");
}

function  addcart13(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma13", soma)
    window.location.replace("home.html");
}

function  addcart14(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma14", soma)
    window.location.replace("home.html");
}

function  addcart15(){
    let preço = document.getElementById("preco").innerHTML;
    preço = preço.replace("R$", "");
    // preço = preço.replace(",", ".");
    let quantidade =  document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma15", soma)
    window.location.replace("home.html");
}

// function  addcart2(){
//     let preço = document.getElementById("preco").innerHTML;
//     preço = preço.replace("R$", "");
//     // preço = preço.replace(",", ".");
//     let quantidade =  document.getElementById("qt").value;
//     let soma = preço * quantidade;
//     sessionStorage.setItem("soma2", soma)
//     window.location.replace("home.html");
// }


function session(){
    sessionStorage.setItem("soma1", 0);
    sessionStorage.setItem("soma2", 0);
    sessionStorage.setItem("soma3", 0);
    sessionStorage.setItem("soma4", 0);
    sessionStorage.setItem("soma5", 0);
    sessionStorage.setItem("soma6", 0);
    sessionStorage.setItem("soma7", 0);
    sessionStorage.setItem("soma8", 0);
    sessionStorage.setItem("soma9", 0);
    sessionStorage.setItem("soma10", 0);
    sessionStorage.setItem("soma11", 0);
    sessionStorage.setItem("soma12", 0);
    sessionStorage.setItem("soma13", 0);
    sessionStorage.setItem("soma14", 0);
    sessionStorage.setItem("soma15", 0);
    sessionStorage.setItem("soma16", 0);
    sessionStorage.setItem("soma17", 0);
    sessionStorage.setItem("soma18", 0);
    alert(sessionStorage.getItem("soma1"));

}



function getCard(){
    let totalCard = parseFloat(sessionStorage.getItem("soma1"))+
                    parseFloat(sessionStorage.getItem("soma2"))+
                    parseFloat(sessionStorage.getItem("soma3"))+
                    parseFloat(sessionStorage.getItem("soma4"))+
                    parseFloat(sessionStorage.getItem("soma5"))+
                    parseFloat(sessionStorage.getItem("soma6"))+
                    parseFloat(sessionStorage.getItem("soma7"))+
                    parseFloat(sessionStorage.getItem("soma8"))+
                    parseFloat(sessionStorage.getItem("soma9"))+
                    parseFloat(sessionStorage.getItem("soma10"))+
                    parseFloat(sessionStorage.getItem("soma12"))+
                    parseFloat(sessionStorage.getItem("soma13"))+
                    parseFloat(sessionStorage.getItem("soma14"))+
                    parseFloat(sessionStorage.getItem("soma15"))+
                    parseFloat(sessionStorage.getItem("soma16"))+
                    parseFloat(sessionStorage.getItem("soma17"))+
                    parseFloat(sessionStorage.getItem("soma18"));

                    document.getElementById("avista").value = "R$"+totalCard;
                    console.log( document.getElementById("avista").value = "R$"+totalCard);

    let parcela = document.getElementById("parcela");

    parcela.addEventListener("click", (e) =>{
        switch(parcela.value){
            case"1":
            document.getElementById("valor").value = "RS "+(totalCard).toFixed(2);
            break;
            case"2":
            document.getElementById("valor").value = "RS "+(totalCard/2).toFixed(2);
            break;
            case"3":
            document.getElementById("valor").value = "RS "+(totalCard/3).toFixed(2);
            break;
            case"4":
            document.getElementById("valor").value = "RS "+(totalCard/4).toFixed(2);
            break;
        }
    }
    )
}