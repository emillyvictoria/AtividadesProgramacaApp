function sortear (){
    const tipoJogo = document.getElementById('tipoJogo').value
    let numeros = []
    let maxNum, quantidade

    if (tipoJogo === 'megasena') {
        maxNum = 60
        quantidade = 6
     } else if (tipoJogo === 'quina') {
        maxNum = 80
        quantidade = 5
     } else if (tipoJogo === 'lotofacil') {
        maxNum = 25
        quantidade = 15
     }

     while (numeros.length < quantidade) {
        const num = Math.floor(Math.random()*maxNum)+1
        if (!numeros.includes(num)) {
            numeros.push(num)
        }
     }

     numeros.sort((a,b) => a-b)
     document.getElementById('resp').textContent = numeros.join(', ')


}