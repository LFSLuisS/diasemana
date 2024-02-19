

function diasemana() {

    var entrada = parseInt (document.getElementById("Dias").value);



switch (entrada) {

    case 1:
        document.getElementById("Resultado").innerHTML= "Domingo";
        break;

    case 2:
        document.getElementById("Resultado").innerHTML= "Segunda-feira";
        break;

    case 3:
        document.getElementById("Resultado").innerHTML= "Terça-feira";
        break;

    case 4:
        document.getElementById("Resultado").innerHTML= "Quarta-feira";
        break;

    case 5:
        document.getElementById("Resultado").innerHTML= "Quinta-feira";
        break;

    case 6:
        document.getElementById("Resultado").innerHTML= "Sexta-feira";
        break;

    case 7:
        document.getElementById("Resultado").innerHTML= "Sábado";
        break;

    default:
        console.log("Valor não encontrado");
        break;

}
        }


