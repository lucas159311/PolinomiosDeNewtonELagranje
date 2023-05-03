//tem como finalidade limpar todo o conteudo da tela e os inputs para receber novos valores
function Limpar(){
    document.getElementById("Pontos").value="";
    document.getElementById("Entrada").value="0";
    document.getElementById("Resultados").innerHTML = "";

    //(1,3),(2,5),(3,7),(4,9)
}

//tem como finalidade verificar se está tudo preenchido corretamente
function VerificaCampos(){
    let pontos = document.getElementById("Pontos").value;
    let entrada = document.getElementById("Entrada").value;

    if(pontos == "" || entrada == ""){
        return false;
    }else{
        return true;
    }
}

//tem como finalidade resgatar a matriz digitada pelo usuario no primeiro input
function RecuperaMatriz(){
    //removendo as virgulas e os parenteses
    let bruto = document.getElementById("Pontos").value;
    let aux1 = bruto.substring(1);
    aux1 = aux1.substring(0, (aux1.length - 1));
    aux1 = aux1.split('),(');

    //formando matriz
    let matriz = Array();
    for(let i = 0; i < aux1.length; i++){
        let auxMat = aux1[i].split(',');
        matriz.push(Array(auxMat[0],auxMat[1]));
    }

    return matriz;
}

//tem como finalidade retornar o calculo com base nos polinomios de lagrange
function Lagrange(){
    if(VerificaCampos()){
        let matriz = RecuperaMatriz();
        let x = document.getElementById("Entrada").value;
        let resultado = 0;
        for (let i = 0; i < matriz.length; i++){
            let termo = matriz[i][1];
            for (let j = 0; j < matriz.length; j++){
                if (i !== j){
                    termo *= (x - matriz[j][0]) / (matriz[i][0] - matriz[j][0]);
                }
            }
                resultado += termo;
        }
            FormataResultado(x,resultado,1);
            console.log(resultado);
    }else{
        alert("Dados inválidos, preencha todos os campos para continuar...");
    }
}

//tem como finalidade retornar o calculo com base nos polinomios de newton
function Newton(){
    if(VerificaCampos()){
        let matriz = RecuperaMatriz();
        let x = document.getElementById("Entrada").value;
        let resultado = 0;
        for (let i = 0; i < matriz.length; i++){
            let termo = matriz[i][1];
            for (let j = 0; j < matriz.length; j++){
                if (i !== j){
                    termo *= (x - matriz[j][0]) / (matriz[i][0] - matriz[j][0]);
                }
            }
            resultado += termo;
        }

            FormataResultado(x,resultado,2);
            console.log(resultado);
    }else{
        alert("Dados inválidos, preencha todos os campos para continuar...");
    }
}

//tem como finalidade formar a string que sera exibida o valor 
function FormataResultado(x,result,teo){
    if(teo == 1){ // lagrange
        let texto = '<p style="margin-top: 1%">Utilizando o Polinômio de Lagrange chegamos aos seguintes resultados:<br>';
        texto += 'X = ' + x + '<br>';
        texto += 'Y = ' + result + '</p>';
        document.getElementById("Resultados").innerHTML = texto;
    }else{ // newton
        let texto = '<p style="margin-top: 1%">Utilizando o Polinômio de Newton chegamos aos seguintes resultados:<br>';
        texto += 'X = ' + x + '<br>';
        texto += 'Y = ' + result + '</p>';
        document.getElementById("Resultados").innerHTML = texto;
    }
}