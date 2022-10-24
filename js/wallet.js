const compraBtc= document.getElementById('precio-btc'),
      compraEth= document.getElementById('precio-eth'),
      usdt = document.getElementById('precio-usdt'),
      input7 = document.getElementById("ingreso7"), 
      input2 = document.getElementById("ingreso2"),
      input3 = document.getElementById("ingreso3"),
      input4 = document.getElementById("ingreso4"),
      input5 = document.getElementById("ingreso5"),
      input6 = document.getElementById("ingreso6"),
      input = document.getElementById("ingreso"),
      btnSearch = document.querySelector("#btnSearch"),
      text12 = document.getElementById('cotizacion'),
      total = document.getElementById('total');
    

class Cripto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
const USDT = new Cripto('USDT', 800),
    BTC = new Cripto('BTC', 300), 
    ETH = new Cripto('ETH', 200),
    Total = new Cripto('Total',1300 )


//Deposito
BtnDeposito.addEventListener('click', ()=>{
    let deposito =  parseInt(input7.value); 
    USDT.precio = USDT.precio + deposito;
    Total.precio = USDT.precio + ETH.precio + BTC.precio;
   
    Swal.fire({
        position: 'right',
        icon: 'success',
        title: 'Deposito Exitoso',
        showConfirmButton: false,
        timer: 2500
      })
    
    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso7").value=""},0);
  

    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
    })

  
//Retiro
BtnRetiro.addEventListener('click', ()=>{
    let retiro = parseInt(input2.value);
    if (retiro <= USDT.precio) {
        USDT.precio = USDT.precio - retiro;
        Total.precio = USDT.precio + ETH.precio + BTC.precio;

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Retiro Exitoso',
        showConfirmButton: false,
        timer: 2500
    })} else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Saldo Insuficiente!',
        footer: 'Revisa tu monto ingresado'
    })}

    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso2").value=""},0);    

    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
})

// Compra BTC 
btnBitcoin.addEventListener('click', ()=>{
    let comprarBtc = parseInt(input3.value);
    if (comprarBtc <= USDT.precio) {
        USDT.precio = USDT.precio - comprarBtc;
        BTC.precio = BTC.precio + comprarBtc;
        Total.precio = USDT.precio + ETH.precio + BTC.precio;

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra Exitosa',
        showConfirmButton: false,
        timer: 2500
    })} else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Saldo Insuficiente!',
        footer: 'Revisa tu monto ingresado'
    })}
   
    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`

    compraBtc.innerHTML= `
    <p>${'$' + BTC.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso3").value=""},0); 
    
    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
 })

// Venta BTC  
 btnBitcoin2.addEventListener('click', ()=>{
    let venderBtc = parseInt(input4.value);
    if (venderBtc <= BTC.precio) {
        USDT.precio = USDT.precio + venderBtc;
        BTC.precio = BTC.precio - venderBtc;
        Total.precio = USDT.precio + ETH.precio + BTC.precio;

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Venta Exitosa',
            showConfirmButton: false,
            timer: 2500
        })} else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Saldo Insuficiente!',
            footer: 'Revisa tu monto ingresado'
        })}
    
    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`
    
    compraBtc.innerHTML= `
    <p>${'$' + BTC.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso4").value=""},0);

    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
    })

// Compra ETH  
btnEther.addEventListener('click', ()=>{
    let comprarEth = parseInt(input5.value);
    if (comprarEth <= USDT.precio) {
        USDT.precio = USDT.precio - comprarEth;
        ETH.precio = ETH.precio + comprarEth;
        Total.precio = USDT.precio + ETH.precio + BTC.precio;

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra Exitosa',
            showConfirmButton: false,
            timer: 2500
        })} else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Saldo Insuficiente!',
            footer: 'Revisa tu monto ingresado'
        })}

    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`

    compraEth.innerHTML= `
    <p>${'$' + ETH.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso5").value=""},0); 
    
    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
    })

// Venta ETH    
btnEther2.addEventListener('click', ()=>{
    let venderEth = parseInt(input6.value);
    if (venderEth <= ETH.precio) {
        USDT.precio = USDT.precio + venderEth;
        ETH.precio = ETH.precio - venderEth;
        Total.precio = USDT.precio + ETH.precio + BTC.precio;
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Venta Exitosa',
            showConfirmButton: false,
            timer: 2500
        })} else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Saldo Insuficiente!',
            footer: 'Revisa tu monto ingresado'
        })} 
    
    usdt.innerHTML=`
    <p>${'$' + USDT.precio}</p>`
    
    compraEth.innerHTML= `
    <p>${'$' + ETH.precio}</p>`
    setTimeout(function(){document.getElementById("ingreso6").value=""},0);    
    })

    total.innerHTML=`
    <p>${'$' + Total.precio}</p>`
    setTimeout(function(){document.getElementById("total").value=""},0);
        

//Array Cotizaciones Criptos
  const valorCripto = [{
    id: 1,
    nombre: 'bitcoin',
    sigla: 'btc', 
    precio: 19900,
    cap: '$371 mil millones'  
},
{
    id: 2,
    nombre: 'ethereum',
     sigla: 'eth', 
    precio: 1320,
    capitalizacion: '$164 mil millones'  
},
{
    id: 3,
    nombre: 'theter',
    sigla: 'usdt', 
    precio: 1,
    cap: '$68 mil millones'  
},
{
    id: 4,
    nombre: 'usd Coin',
    sigla: 'usdc', 
    precio: 1,
    cap: '$43 mil millones'  
},
{
    id: 5,
    nombre: 'bnb',
    sigla: 'bnb', 
    precio: 280,
    cap: '$43 mil millones'  
},
{
    id: 6,
    nombre: 'xrp',
    sigla: 'xrp', 
    precio: 0.51,
    cap: '$22 mil millones'  
},
{
    id: 7,
    nombre: 'binance usd',
    sigla: 'busd', 
    precio: 0.99,
    cap: '$21 mil millones'  
},
{
    id: 8,
    nombre: 'cardano',
    sigla: 'ada', 
    precio: 0.42,
    cap: '$12 mil millones'  
},
{
    id: 9,
    nombre: 'solana',
    sigla: 'sol', 
    precio: 32,
    cap: '$10 mil millones'  
},
{
    id: 10,
    nombre: 'dogecoin',
    sigla: 'doge', 
    precio: 0.06,
    cap: '$7 mil millones'  
},
];
  //Buscador
  function buscarServicio(arr, filtro) {
    const encontrado = arr.find((el) => {
      return el.sigla.includes(filtro);
    });
    return encontrado;
  }
  function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.sigla.includes(filtro);
    })
    return filtrado;
  }
  
  btnSearch.addEventListener('click', ()=>{
    let resultado = filtrarServicio(valorCripto,input.value.toLowerCase() )
    cotizacion.innerHTML= `
    <h3>${resultado[0].nombre}</h3>
    <ul>${'. ' + 'Top ' + resultado[0].id}</ul>
    <ul>${'. ' + 'Sigla: ' + resultado[0].sigla}</ul>
    <ul>${'. ' + 'Precio: $' + resultado[0].precio}</ul>
    <ul>${'. ' + 'Capitalización: ' + resultado[0].cap}</ul>
    `
    setTimeout(function(){document.getElementById("ingreso").value=""},0);   
  })