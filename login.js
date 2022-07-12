    function login(){
         let nome = document.getElementById("name").value;
         let senha = document.getElementById("senha").value;

         if (nome == "" || senha ==""){
             alert("Por favor Digite o Usuario e a Senha Novamente !");

         } 
         else{
             sessionStorage.setItem("lastname", nome);
             alert("Bem Vindo: " + sessionStorage.getItem("lastname"));
             window.location.replace("home.html");
         }
    }


    function logado(){
        document.getElementById("user").innerHTML = sessionStorage.getItem("lastname");
    }