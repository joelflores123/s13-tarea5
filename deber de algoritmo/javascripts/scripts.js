class Ejercicios {
    ejercicio1() {
        let serieTexto = document.getElementById("serie").value;
        let valores = serieTexto.split(",").map(valor => parseInt(valor.trim()));
        let $respuesta = document.getElementById("resp");
        let sumaPerfectos = 0;
        let numerosPerfectos = [];

        for (let i = 0; i < valores.length; i++) {
            let sumaFactores = 0;
            for (let j = 1; j < valores[i]; j++) {
                if (this.calcularResto(valores[i], j)) {
                    sumaFactores = this.sumarNumeros(sumaFactores, j);
                }
            }
            if (sumaFactores === valores[i]) {
                sumaPerfectos = this.sumarNumeros(sumaPerfectos, valores[i]);
                numerosPerfectos.push(valores[i]);
            }
        }
        this.ejecucion(`SERIE: ${valores}\n LOS NUMEROS PERFECTOS QUE HAY EN LA SERIE SON: ${numerosPerfectos}\n LA SUMA DE NUMEROS PERFECTOS:${sumaPerfectos}`, $respuesta);
    }
    sumarNumeros(a, b) {
        return a + b;
    }
    calcularResto(a, b) {
        return a % b === 0;
    }
    eleveados(a, b) {
        return a ** b;
    }
    sacarMod(a, b) {
        return a % b;
    }
    sacarDivi(a, b) {
        return a / b;
    }
    sacarMult(a, b) {
        return a * b;
    }
    ejecucion(texto, respuesta) {
            respuesta.textContent = texto;
            console.log(respuesta);

        }
        /*limpiador*/
    limpiar() {
        document.getElementById("serie").value = "";
        document.getElementById("opc1").value = "";
        document.getElementById("opc2").value = "";
        document.getElementById("resp").textContent = "";
    }
    ejercicio2() {
        let serieTexto = document.getElementById("serie").value;
        let valores = serieTexto.split(",").map(valor => parseInt(valor.trim()));
        let $respuesta = document.getElementById("resp");
        let numerosPrimos = [];
        let esPrimo = true;

        for (let i = 0; i < valores.length; i++) {
            esPrimo = true;
            for (let j = 2; j < valores[i]; j++) {
                if (this.calcularResto(valores[i], j)) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo && valores[i] > 1) {
                numerosPrimos.push(valores[i]);
            }
        }
        this.ejecucion(`SERIE: ${valores}\n LOS NúMEROS PRIMOS SON: ${numerosPrimos}`, $respuesta);
    }
    ejercicio3() {
        let numeroOpcion1 = document.getElementById("opc1").value;
        let numeroOpcion2 = document.getElementById("opc2").value;
        let valor1 = numeroOpcion1.split(",").map(valor => parseInt(valor.trim()));
        let valor2 = numeroOpcion2.split(",").map(valor => parseInt(valor.trim()));
        let operacion, i = 0
        let $respuesta = document.getElementById("resp");


        while (i <= valor2) {
            operacion = this.eleveados(valor1, i);
            i += 1
        }
        this.ejecucion(`La BASE ES: ${valor1}\n EL EXPONENTE ES: ${valor2}\n EL RESULTADO ES: ${operacion}`, $respuesta);
    }
    ejercicio4() {
        let serieTexto = document.getElementById("serie").value;
        let valores = serieTexto.split(",").map(valor => parseInt(valor.trim()));
        let $respuesta = document.getElementById("resp");
        let numerosElevados = [];

        for (let i = 0; i < valores.length; i++) {
            numerosElevados.push(this.eleveados(valores[i], valores[i]));
        }
        this.ejecucion(`LA SERIE ES: ${serieTexto}\n SUS NUMEROS ELEVADOS SON: ${numerosElevados}`, $respuesta);
    }
    ejercicio5() {
        let valor = parseInt(document.getElementById('opc1').value);
        let $respuesta = document.getElementById("resp");
        let result = "";

        for (let i = 1; i <= 12; i++) {
            result += `${valor} X ${i} = ${valor*i}\n`;
        }
        this.ejecucion(`${result}`, $respuesta);
    }
    ejercicio6() {
        let valor1 = parseInt(document.getElementById('opc1').value);
        let valor2 = parseInt(document.getElementById('opc2').value);
        let $respuesta = document.getElementById("resp");
        let divi = []
        for (let i = valor2; i < valor1; i++) {
            if (this.calcularResto(valor1, i)) {
                divi.push(i);
            }
        }
        this.ejecucion(`TU NUMERO ES: ${valor1}\n DIVISOR INICIAL: ${valor2}\n TUS DIVISORES SON: ${divi.join(",")}`, $respuesta)
    }
    ejercicio7() {
        let valor1 = parseInt(document.getElementById('opc1').value);
        let valor2 = parseInt(document.getElementById('opc2').value);
        let $respuesta = document.getElementById("resp");
        let divi = []
        let sumdivi = 0;
        for (let i = valor2; i < valor1; i++) {
            if (this.calcularResto(valor1, i)) {
                divi.push(i);
                sumdivi = this.sumarNumeros(sumdivi, i);
            }
        }
        this.ejecucion(`TUS DIVISORES SON: ${divi.join(",")}\n Y LA SUMA DE LOS DIVISORES SON: ${sumdivi}`, $respuesta)
    }
    ejercicio8() {
        let serieTexto = parseInt(document.getElementById("serie").value);
        let $respuesta = document.getElementById("resp");
        let digitos = []

        let numero = serieTexto;

        while (numero > 0) {
            digitos.push(this.sacarMod(numero, 10)); // Agregar el último dígito al arreglo
            numero = Math.floor(this.sacarDivi(numero, 10)); // Eliminar el último dígito de la serie
        }

        /*digitos.reverse(); // Revertir el orden de los dígitos*/
        this.ejecucion(`EL NUMERO ES: ${serieTexto}\nTUS DIGITOS DEL NUMERO INGRESADO ES: ${digitos}`, $respuesta)
    }
    ejercicio9() {
        let serieTexto = parseInt(document.getElementById("serie").value);
        let $respuesta = document.getElementById("resp");
        let digitos = []

        let numero = serieTexto,
            sum = 0;

        while (numero > 0) {
            let digito = this.sacarMod(numero, 10); // Agregar el último dígito al arreglo
            digitos.push(digito);
            sum = this.sumarNumeros(sum, digito);
            numero = Math.floor(this.sacarDivi(numero, 10)); // Eliminar el último dígito de la serie


        }

        /*digitos.reverse(); // Revertir el orden de los dígitos*/
        this.ejecucion(`EL NUMERO ES: ${serieTexto}\nTUS DIGITOS DEL NUMERO INGRESADO ES: ${digitos}\n LA SUMA DE LOS DIGITOS ES: ${sum} `, $respuesta)
    }
    ejercicio10() {
        let serieTexto = parseInt(document.getElementById("serie").value);
        let $respuesta = document.getElementById("resp");
        let digitos = []
        let presetPares = []
        let numero = serieTexto


        while (numero > 0) {
            let digito = this.sacarMod(numero, 10); // Agregar el último dígito al arreglo
            digitos.push(digito);
            numero = Math.floor(this.sacarDivi(numero, 10)); // Eliminar el último dígito de la serie

        }
        for (let i = 0; i < digitos.length; i++) {
            if (digitos[i] % 2 == 0) {
                presetPares.push(digitos[i]);
            }
        }
        this.ejecucion(`EL NUMERO ES: ${serieTexto}\n TUS DIGITOS SON: ${digitos}\n LOS DIGITOS PARES SON: ${presetPares}`, $respuesta);
    }
    ejercicio11() {
        let serieTexto = parseInt(document.getElementById("serie").value);
        let $respuesta = document.getElementById("resp");
        let primerdigito = []
        let numero = serieTexto

        while (numero >= 10) {
            numero = Math.floor(this.sacarDivi(numero, 10))
        }
        primerdigito.push(numero)
        this.ejecucion(`LA SERIE ES: ${serieTexto}\n EL PRIMER DIGITO ES: ${primerdigito}`, $respuesta)
    }
    ejercicio12() {
        let serieTexto = parseInt(document.getElementById("serie").value);
        let $respuesta = document.getElementById("resp");

        let ultimoDigito = this.sacarMod(serieTexto, 10);

        this.ejecucion(`LA SERIE ES: ${serieTexto}\n EL  ULTIMO DIGITO ES: ${ultimoDigito}`, $respuesta)
    }
    ejercicio13() {
        let valor = parseInt(document.getElementById('opc1').value);
        let $respuesta = document.getElementById("resp");
        let result = 1;

        if (valor === 0 || valor === 1) {
            result = 1;
        } else {
            for (let i = 2; i <= valor; i++) {
                result = this.sacarMult(result, i);
            }
        }
        this.ejecucion(`EL NUMERO ES: ${valor}\n EL RESULTADO ES: ${result}`, $respuesta)
    }
    ejercicio14() {
        let serieTexto = document.getElementById("serie").value;
        let valores = serieTexto.split(",").map(valor => parseInt(valor.trim()));
        let $respuesta = document.getElementById("resp");
        let factoriales = [],
            factorial;

        for (let i = 0; i < valores.length; i++) {
            factorial = 1;
            let numero = valores[i];
            for (let j = 1; j <= numero; j++) {
                factorial = this.sacarMult(factorial, j);
            }
            factoriales.push(factorial);
        }
        this.ejecucion(`LA SERIE ES: ${valores}\n LOS FACTORIALES DE CADA DIGITO ES: ${factoriales}`, $respuesta);
    }
    ejercicio15() {
        let numeroOpcion1 = document.getElementById("opc1").value;
        let numeroOpcion2 = document.getElementById("opc2").value;
        let valor1 = parseInt(numeroOpcion1);
        let valor2 = parseInt(numeroOpcion2);
        let digitos = [];
        let $respuesta = document.getElementById("resp");

        for (let i = valor1; i < valor2; i++) {
            digitos.push(i);
        }
        this.ejecucion(`EL NUMERO INICIAL ES: ${valor1}\n NUMERO FINAL: ${valor2}\n RANGO DE VALORES EXCLUIDO EL FINAL: ${digitos}`, $respuesta);
    }
}

// ejercicios ejecucciones.....
let ejercicio = new Ejercicios();

ejercicio.ejercicio1();
ejercicio.ejercicio2();
ejercicio.ejercicio3();
ejercicio.ejercicio4();
ejercicio.ejercicio5();
ejercicio.ejercicio6();
ejercicio.ejercicio7();
ejercicio.ejercicio8();
ejercicio.ejercicio9();
ejercicio.ejercicio10();
ejercicio.ejercicio11();
ejercicio.ejercicio12();
ejercicio.ejercicio13();
ejercicio.ejercicio14();
ejercicio.ejercicio15();

/*limpiar*/
ejercicio.limpiar();


/*limpiar*/
document.getElementById("btn-limpiar").addEventListener("click", function() {
    ejercicio.limpiar()

});


// Validación del input "serie"
let serieInput = document.getElementById('serie');
let serieMensaje = document.getElementById('mensaje-serie');
serieInput.addEventListener('input', function() {
    let valor = serieInput.value;
    if (!valor.match(/^[,\d]+$/)) {
        serieInput.setCustomValidity('Solo se aceptan números y comas');
        serieMensaje.textContent = 'Por favor ingrese solo números y comas';
        setTimeout(function() {
            serieMensaje.textContent = '';
        }, 3000);
    } else {
        serieInput.setCustomValidity('');
        serieMensaje.textContent = '';
    }
});

// Validación del input "serie"
let serieinput = document.getElementById('serie');
let seriemensaje = document.getElementById('mensaje-serie');
serieinput.addEventListener('input', function() {
    let valor = serieinput.value;
    if (!valor.match(/^[\d,]+$/)) {
        seriemensaje.classList.add('active');
        setTimeout(function() {
            seriemensaje.classList.remove('active');
        }, 3000);
    } else {
        seriemensaje.classList.remove('active');
    }
});

// Validación del input "opc1"
let opc1input = document.getElementById('opc1');
let opc1mensaje = document.getElementById('mensaje-opc1');
opc1input.addEventListener('input', function() {
    let valor = opc1input.value;
    if (!valor.match(/^[\d,]+$/)) {
        opc1mensaje.classList.add('active');
        setTimeout(function() {
            opc1mensaje.classList.remove('active');
        }, 3000);
    } else {
        opc1mensaje.classList.remove('active');
    }
});

// Validación del input "opc2"
let opc2Input = document.getElementById('opc2');
let opc2Mensaje = document.getElementById('mensaje-opc2');
opc2Input.addEventListener('input', function() {
    let valor = opc2Input.value;
    if (!valor.match(/^[\d,]+$/)) {
        opc2Mensaje.classList.add('active');
        setTimeout(function() {
            opc2Mensaje.classList.remove('active');
        }, 3000);
    } else {
        opc2Mensaje.classList.remove('active');
    }
});