export default function fecthBitcoin(url, target){
    fetch(url)
    .then(res => res.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector(target)
        btcPreco.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4)
        console.log(bitcoin.BRL.sell)
    }).catch(erro =>{
        console.log(Error(erro))
    })
} 