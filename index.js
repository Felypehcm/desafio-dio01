
/*

Instruções para entrega
# Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/


let name = "Felype";
let xp = 10002;

let level ;


switch (true) {
    case (xp < 1000):
        level = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        level = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        level = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        level = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        level = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        level = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        level = "Imortal";
        break;
    case (xp >= 10001):
        level = "Radiante";
        break;
    default:
        level = "Nível Desconhecido";
}

console.log(`O Herói de nome ${name} está no nível de ${level}`);
