function selecionarAlimento_e_Tempo(alimento,tempo){
    
    let padrao;
    
    if (alimento == "pipoca" )  {
        padrao = 10;
    }else if (alimento == "macarrão" || alimento == "brigadeiro"){
        padrao = 8;
    }else if (alimento == "carne"){
        padrao = 15;
    }else if (alimento == "feijão"){
        padrao = 12;
    }else{
        console.log('Prato inexistente.');
    }
    
    if (tempo > 3 * padrao) {
        console.log("kabumm");
    }else if (tempo > 2 * padrao){
        console.log("Comida queimou.");
    }else if (tempo < padrao){
        console.log("Tempo insuficiente.");
    }else if(tempo >= padrao || tempo <= 2 * padrao){
        console.log("Prato pronto, bom apetite!!!");
    }
}

/*Para pipoca
selecionarAlimento_e_Tempo("pipoca",10)
selecionarAlimento_e_Tempo("pipoca",9)
selecionarAlimento_e_Tempo("pipoca",21)
selecionarAlimento_e_Tempo("pipoca",31)

selecionarAlimento_e_Tempo("macarrão",8)
selecionarAlimento_e_Tempo("macarrão",7)
selecionarAlimento_e_Tempo("macarrão",17)
selecionarAlimento_e_Tempo("macarrão",25)

selecionarAlimento_e_Tempo("brigadeiro",8)
selecionarAlimento_e_Tempo("brigadeiro",7)
selecionarAlimento_e_Tempo("brigadeiro",17)
selecionarAlimento_e_Tempo("brigadeiro",25)

selecionarAlimento_e_Tempo("carne",15)
selecionarAlimento_e_Tempo("carne",14)
selecionarAlimento_e_Tempo("carne",31)
selecionarAlimento_e_Tempo("carne",46)

Para feijão
selecionarAlimento_e_Tempo("feijão",12)
selecionarAlimento_e_Tempo("feijão",11)
selecionarAlimento_e_Tempo("feijão",25)
selecionarAlimento_e_Tempo("feijão",37)

 Para outro prato
selecionarAlimento_e_Tempo("arroz",10)*/

selecionarAlimento_e_Tempo("carne", 55);


