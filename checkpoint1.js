function menu (prato, tempoInserido){
    let tempoPadrao;
    
    switch(prato){
        case 'pipoca':
            tempoPadrao = 10;
            resposta(tempoPadrao, tempoInserido);
            break;

        case 'macarrao':
        case 'brigadeiro':
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoInserido);
            break;

        case 'carne':
            tempoPadrao = 15;
            resposta(tempoPadrao, tempoInserido);
            break;

        case 'feijao':
            tempoPadrao = 12;
            resposta(tempoPadrao, tempoInserido);
            break;

        default:
            return `Prato inexistente. Selecione uma opção válida!`;      
    }  
    function resposta(tempoPadrao, tempoInserido){
        if(tempoInserido < tempoPadrao){
            console.log(`Tempo insuficiente!`);
        }else if (tempoInserido >= tempoPadrao*2 && tempoInserido<tempoPadrao*3){
          console.log(`A comida queimou`);  
        }else if(tempoInserido >= tempoPadrao*3){
           console.log(`KABUUMM!`) ;
        }else {
            console.log(`prato pronto. Bon Apetit!`);
        }
    } /* if else , quando necessita imprimir/mostrar algo, deve-se usar console.log("mensagem a ser expressa"); */
}

/* pipoca */
menu('feijao', 12); /* se tempo for 2x o padrão, queima */
