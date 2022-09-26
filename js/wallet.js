let pass = '1234';
alert('Ingresa su clave numerica')
passaword = prompt('Ingresa contraseña');

while (passaword != pass){
    console.log('Error, ingresa nuevamente');
    //condicion de salida
    passaword = prompt('Ingresa contraseña');
}


function saludar() {
    alert('Bienvenido Usuario!');
}
saludar();


let USDT = 800;
let BTC = 300;
let ETH = 200;
let opcion = prompt('Elegi una opcion: \n1 -USDT \n2 -BTC \n3 -ETH  \n4 -Comprar BTC \n5 -Comprar ETH \n6 -Vender BTC \n7 -Vender ETH \n8 -Depósito \n Presiona X para finalizar');

    while(opcion != 'X' && opcion != 'x'){  
        //menu wallet
        switch (opcion) {
            case '1':
                alert('Tu saldo en USDT es $' + USDT + '.')
                break;

            case '2':
                alert('Tu saldo en BTC es $' + BTC + '.');
                break;

            case '3':
                alert('Tu saldo en ETH es $' + ETH + '.');
                break;  
            
            case '4':
                let comprarBtc = parseInt(prompt('Ingresa el monto que deseas comprar de Bitcoin.'));

                if (comprarBtc <= USDT) {
                    USDT = USDT - comprarBtc;
                    BTC = BTC + comprarBtc;
                    alert('Compra exitosa. Tu saldo en BTC es $' + BTC + '.')
                }else{
                    alert('Saldo insuficiente')
                } 
                break;

            case '5':
                let comprarEth = parseInt(prompt('Ingresa el monto que deseas comprar de Ethereum.'));

                if (comprarEth <= USDT) {
                    USDT = USDT - comprarEth;
                    ETH = ETH + comprarEth;
                    alert('Compra exitosa. Tu saldo en ETH es $' + ETH + '.')
                }else{
                    alert('Saldo insuficiente')
                } 
                break;

            case '6':
                let venderBtc = parseInt(prompt('Ingresa el monto que deseas vender de Bitcoin.'));
                if (venderBtc <= BTC) {
                    USDT = USDT + venderBtc;
                    BTC = BTC - venderBtc;
                    alert('Venta exitosa. Tu saldo en BTC es $' + BTC + '.')
                }else{
                    alert('Saldo insuficiente')
                }
                break;

            case '7':
                let venderEth = parseInt(prompt('Ingresa el monto que deseas vender de Ethereum.'));
                if (venderEth <= ETH) {
                    USDT = USDT + venderEth;
                    ETH = ETH - venderEth;
                    alert('Venta exitosa. Tu saldo en ETH es $' + ETH + '.') 
                }else{
                    alert('Saldo insuficiente')
                }
                break;

            case '8':
                let deposito = parseInt(prompt('Ingresa el monto a depositar en USDT.'));
                USDT = USDT + deposito;
                alert('Deposito exitoso. Tu nuevo saldo es $' + USDT + '.')
                break;  
        
            default:
                alert('Opcion no valida')
                break;
        }
        opcion = prompt('Elegi una opcion: \n1 -USDT \n2 -BTC \n3 -ETH  \n4 -Comprar BTC \n5 -Comprar ETH \n6 -Vender BTC \n7 -Vender ETH \n8 -Depósito \n Presiona X para finalizar');

}