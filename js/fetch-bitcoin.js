export default function initFecthBitcoin(){
    fetch('https://blockchain.info/ticker')
    .then(res => res.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.innerHTML = (100 / bitcoin.BRL.sell).toFixed(4)
        console.log(bitcoin.BRL.sell)
    }).catch(erro =>{
        console.log(Error(erro))
    })
} 