/* ATUALIZA O ELEMENTO CSS DE ACORDO COM OS VALORES IMPUTADOS*/
function alterarBorderRadius () {

let superiorEsquerdo = document.getElementById("superiorEsquerdo").value
let superiorDireito = document.getElementById("superiorDireito").value
let inferiorEsquerdo = document.getElementById("inferiorEsquerdo").value
let inferiorDireito = document.getElementById("inferiorDireito").value

    document.getElementById("caixa").style.borderTopLeftRadius = `${superiorEsquerdo}%`;
    document.getElementById ("caixa").style.borderTopRightRadius = `${superiorDireito}%`; 
    document.getElementById("caixa").style.borderBottomLeftRadius = `${inferiorEsquerdo}%`;
    document.getElementById ("caixa").style.borderBottomRightRadius = `${inferiorDireito}%`;

    // ATUALIZA OS RESULTADOS NO TEXTO HTML EM TEMPO REAL
    function mostrarResultado () {
        
         let resultado = document.getElementById ("resultado")
        resultado.innerHTML = `Top-Left: ${superiorEsquerdo} % <br/> 
         Top-Right: ${superiorDireito}% <br/> Bottom-Left: ${inferiorEsquerdo}% <br/> Bottom-Right: ${inferiorDireito}%`
        }
    return mostrarResultado ()
}