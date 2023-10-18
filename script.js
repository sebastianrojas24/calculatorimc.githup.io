document.getElementById('calculateBtn').addEventListener('click', function () {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Asegúrate de que la fórmula se aplique correctamente
    const imc = weight / (height * height);
    const resultElement = document.getElementById('result');

    let state = '';

    if (gender === 'hombre') {
        if (imc < 18.5) {
            state = 'Bajo de peso';
        } else if (imc < 24.9) {
            state = 'Normal';
        } else if (imc < 29.9) {
            state = 'Sobrepeso';
        } else {
            state = 'Obeso';
        }
    } else if (gender === 'mujer') {
        if (imc < 18.5) {
            state = 'Bajo de peso';
        } else if (imc < 23.9) {
            state = 'Normal';
        } else if (imc < 28.9) {
            state = 'Sobrepeso';
        } else {
            state = 'Obeso';
        }
    }

    resultElement.innerHTML = `Tu IMC es: ${imc.toFixed(2)}. Estado: ${state}`;
});

  