//Ingreso a la Cuenta
function saludar(usuario) {
    alert('Bienvenido ' + usuario);
}
saludar(prompt('Ingrese su nombre: '));

let pass = '1234';
alert('Ingresa su clave numerica')
passaword = prompt('Ingresa contraseña');

while (passaword != pass) {
    console.log('Error, ingresa nuevamente');
    //condicion de salida
    passaword = prompt('Ingresa contraseña');
}

//Wallet
class Cripto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const USDT = new Cripto('USDT', 800),
    BTC = new Cripto('BTC', 300),
    ETH = new Cripto('ETH', 200);

//Menu wallet
let opcion = prompt('Elegi una opcion: \n1 -USDT \n2 -BTC \n3 -ETH  \n4 -Comprar BTC \n5 -Vender BTC \n6 -Comprar ETH \n7 -Vender ETH \n8 -Depósito  \n9 -Retiro \n Presiona X para finalizar');

while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
        case '1':
            alert('Tu saldo en USDT es $' + USDT.precio + '.')
            break;

        case '2':
            alert('Tu saldo en BTC es $' + BTC.precio + '.');
            break;

        case '3':
            alert('Tu saldo en ETH es $' + ETH.precio + '.');
            break;

        case '4':
            let comprarBtc = parseInt(prompt('Ingresa el monto que deseas comprar de Bitcoin.'));
            if (comprarBtc <= USDT.precio) {
                USDT.precio = USDT.precio - comprarBtc;
                BTC.precio = BTC.precio + comprarBtc;
                alert('Compra exitosa. Tu saldo en BTC es $' + BTC.precio + '.')
            } else {
                alert('Saldo insuficiente')
            }
            break;

        case '5':
            let venderBtc = parseInt(prompt('Ingresa el monto que deseas vender de Bitcoin.'));
            if (venderBtc <= BTC.precio) {
                USDT.precio = USDT.precio + venderBtc;
                BTC.precio = BTC.precio - venderBtc;
                alert('Venta exitosa. Tu saldo en BTC es $' + BTC.precio + '.')
            } else {
                alert('Saldo insuficiente')
            }
            break;

        case '6':
            let comprarEth = parseInt(prompt('Ingresa el monto que deseas comprar de Ethereum.'));
            if (comprarEth <= USDT.precio) {
                USDT.precio = USDT.precio - comprarEth;
                ETH.precio = ETH.precio + comprarEth;
                alert('Compra exitosa. Tu saldo en ETH es $' + ETH.precio + '.')
            } else {
                alert('Saldo insuficiente')
            }
            break;

        case '7':
            let venderEth = parseInt(prompt('Ingresa el monto que deseas vender de Ethereum.'));
            if (venderEth <= ETH.precio) {
                USDT.precio = USDT.precio + venderEth;
                ETH.precio = ETH.precio - venderEth;
                alert('Venta exitosa. Tu saldo en ETH es $' + ETH.precio + '.')
            } else {
                alert('Saldo insuficiente')
            }
            break;

        case '8':
            let deposito = parseInt(prompt('Ingresa el monto a depositar en USDT.'));
            USDT.precio = USDT.precio + deposito;
            alert('Deposito exitoso. Tu nuevo saldo es $' + USDT.precio + '.')
            break;

        case '9':
            let retiro = parseInt(prompt('Ingresa el monto a retirar'));
            if (retiro <= USDT.precio) {
                USDT.precio = USDT.precio - retiro;
                alert('Retiro exitoso. Tu nuevo saldo es $ ' + USDT.precio + '.')
            } else {
                alert('Saldo insuficiente')
            }

            break;

        default:
            alert('Opcion no valida')
            break;
    }
    opcion = prompt('Elegi una opcion: \n1 -USDT \n2 -BTC \n3 -ETH  \n4 -Comprar BTC \n5 -Vender BTC \n6 -Comprar ETH \n7 -Vender ETH \n8 -Depósito \n9 -Retiro \n Presiona X para finalizar');

}

//Cotización Y Busqueda 
const valorCripto = [{
        id: 1,
        nombre: 'Bitcoin',
        sigla: 'BTC',
        precio: 19900
    },
    {
        id: 2,
        nombre: 'Ethereum',
        sigla: 'ETH',
        precio: 1320
    },
    {
        id: 3,
        nombre: 'Theter',
        sigla: 'USDT',
        precio: 1
    },
    {
        id: 4,
        nombre: 'USD Coin',
        sigla: 'USDC',
        precio: 1
    },
    {
        id: 5,
        nombre: 'BNB',
        sigla: 'BNB',
        precio: 280
    },
    {
        id: 6,
        nombre: 'XRP',
        sigla: 'XRP',
        precio: 0.51
    },
    {
        id: 7,
        nombre: 'Binance USD',
        sigla: 'BUSD',
        precio: 0.99
    },
    {
        id: 8,
        nombre: 'Cardano',
        sigla: 'ADA',
        precio: 0.42
    },
    {
        id: 9,
        nombre: 'Solana',
        sigla: 'SOL',
        precio: 32
    },
    {
        id: 10,
        nombre: 'Dogecoin',
        sigla: 'DOGE',
        precio: 0.06
    },
]

//Ranking Cripto
const nombre = valorCripto.map((criptos) => {
    return {
        id: criptos.id,
        nombre: criptos.nombre,
        sigla: criptos.sigla,
        precio: criptos.precio,
    }
})
console.log('Top 10 de criptomonedas segun su capitalización:');
console.log(nombre);

//Buscar cripto por la sigla
console.log('Busqueda por la sigla')
let buscarNombre = prompt('Ingrese el nombre abreviado de la cripto que desea encontrar');

const buscar = valorCripto.find((el) => el.sigla === buscarNombre.toUpperCase())
console.log(buscar);


//Filtrar cripto segun el precio
console.log('Criptos con un valor mayor a $10:');
const filtrado = valorCripto.filter((el) => {
    return el.precio > 10
})

console.log(filtrado);


//Consulta para agregar alguna cripto a la billetera
const nombres = ['BTC', 'ETH'];
console.log(nombres);

nombres.push(prompt('Ingrese la criptomoneda que le gustaría que agreguemos a nuestra billetera'));
console.log(nombres);