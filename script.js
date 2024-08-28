// script.js
document.getElementById('encryptBtn').addEventListener('click', function() {
    encryptWord();
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    decryptWord();
});

document.getElementById('inputWord').addEventListener('input', function() {
    checkInput();
});

function encryptWord() {
    const input = document.getElementById("inputWord").value;
    if (!input) {
        // Si el cuadro de texto está vacío, no se hace nada
        return;
    }

    let encrypted = "";
    // Un ejemplo simple de cifrado (desplazamiento de caracteres)
    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) + 1);
    }
    document.getElementById("output").innerText = `Encriptado: ${encrypted}`;

    // Ocultar la imagen y mostrar el texto encriptado
    document.getElementById('placeholderImage').style.display = 'none';
    document.getElementById('output').style.display = 'block';
}

function decryptWord() {
    const input = document.getElementById("inputWord").value;
    if (!input) {
        // Si el cuadro de texto está vacío, no se hace nada
        return;
    }

    let decrypted = "";
    // Un ejemplo simple de descifrado (inverso del cifrado)
    for (let i = 0; i < input.length; i++) {
        decrypted += String.fromCharCode(input.charCodeAt(i) - 1);
    }
    document.getElementById("output").innerText = `Desencriptado: ${decrypted}`;

    // Ocultar la imagen y mostrar el texto desencriptado
    document.getElementById('placeholderImage').style.display = 'none';
    document.getElementById('output').style.display = 'block';
}

function checkInput() {
    const input = document.getElementById("inputWord").value;
    if (!input) {
        // Si el cuadro de texto está vacío, muestra la imagen y el mensaje predeterminado
        document.getElementById('placeholderImage').style.display = 'block';
        document.getElementById('output').style.display = 'block';
        document.getElementById('output').innerText = 'Ningún mensaje fue encontrado';
    }
}
