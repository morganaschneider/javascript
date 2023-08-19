// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(60, 1.63) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos