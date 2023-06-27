let dolarBlueVenta = 0

const pesos = document.querySelector('.ui-pdp-price__second-line span .andes-money-amount__fraction').textContent
if(pesos){
    fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => response.json())
    .then(data => {
        dolarBlueVenta = data.blue.value_avg
    })
    .then(()=>{

        const pesosFormatted = pesos.split('.').join('')
        const pesosConversion = pesosFormatted / dolarBlueVenta
        
        const priceContainer = document.querySelector('.ui-pdp-price__second-line')
        const dolarChild = document.createElement('span')
        dolarChild.classList.add('priceConverted')
        dolarChild.innerText = pesosConversion.toFixed(2) + ' USD'
        priceContainer.appendChild(dolarChild)

    })
    .catch(error => console.log(error))
}




