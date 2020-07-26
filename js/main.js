function consultaCep() {
    $(".barra-progresso").show();    
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    //$.xyz serve pra acessar o Jquery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro); // formato jquery
            $("#bairro").html(response.bairro); // formato jquery
            $("#localidade").html(response.localidade); // formato jquery
            $("#uf").html(response.uf); // formato jquery
            $("#titulo_cep").html("CEP " + response.cep); // formato jquery
            $(".cep").show();
            $(".barra-progresso").hide();    

            //document.getElementById("logradouro").innerHTML = response.logradouro; // formato javascript
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //alert(response.logradouro);

        }
    })
}

$(function() {
    $(".cep").hide();    
    $(".barra-progresso").hide();    
})