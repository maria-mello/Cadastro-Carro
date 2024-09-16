function cadastrar(){
    let marca = document.getElementById ('marca').value
    let cor = document.getElementById ('cor').value
    let modelo = document.getElementById ('modelo').value

    const car = {
        marca: marca,
        cor: cor,
        modelo: modelo
    }

    localStorage.setItem('carro', JSON.stringify(car))
    alert('O carro foi cadastrado com sucesso!')
} 