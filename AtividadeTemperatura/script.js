function converter() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    let temperaturaConvertida;

    if (unidadeOrigem === unidadeDestino) {
        temperaturaConvertida = temperatura; // Sem conversão se as unidades forem iguais
    } else if (unidadeOrigem === 'celsius' && unidadeDestino === 'fahrenheit') {
        temperaturaConvertida = (temperatura * 9/5) + 32;
    } else if (unidadeOrigem === 'celsius' && unidadeDestino === 'kelvin') {
        temperaturaConvertida = temperatura + 273.15;
    } else if (unidadeOrigem === 'fahrenheit' && unidadeDestino === 'celsius') {
        temperaturaConvertida = (temperatura - 32) * 5/9;
    } else if (unidadeOrigem === 'fahrenheit' && unidadeDestino === 'kelvin') {
        temperaturaConvertida = ((temperatura - 32) * 5/9) + 273.15;
    } else if (unidadeOrigem === 'kelvin' && unidadeDestino === 'celsius') {
        temperaturaConvertida = temperatura - 273.15;
    } else if (unidadeOrigem === 'kelvin' && unidadeDestino === 'fahrenheit') {
        temperaturaConvertida = ((temperatura - 273.15) * 9/5) + 32;
    }

    document.getElementById('resultado').textContent = temperaturaConvertida.toFixed(2);
}