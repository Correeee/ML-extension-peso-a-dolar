let dolarBlueVenta = 0
// const ofertas = document.getElementsByClassName('ui-item__installments ui-item__installments--free')

// if (ofertas) {
//     const ofertasInterval = setInterval(() => {

//         if (ofertas.length > 0) {
//             clearInterval(ofertasInterval)
//             for (let i = 0; i < ofertas.length; i++) {
//                 const element = ofertas[i];
//                 element.style.fontSize = '0.8rem'
//             }
//         }
//     }, 1000);
// }

const pesos = document.querySelector('.ui-pdp-price__second-line span .andes-money-amount__fraction')
if (pesos) {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(response => response.json())
        .then(data => {
            dolarBlueVenta = data.blue.value_avg
        })
        .then(() => {

            const pesosFormatted = pesos.textContent.split('.').join('')
            const pesosConversion = pesosFormatted / dolarBlueVenta

            const priceContainer = document.querySelector('.ui-pdp-price__second-line')
            const dolarChild = document.createElement('span')
            dolarChild.classList.add('priceConverted')
            dolarChild.innerText = pesosConversion.toFixed(2) + ' USD'
            priceContainer.appendChild(dolarChild)

        })
        .catch(error => console.log(error))
}

// const pesosHome = document.getElementsByClassName('price-tag ui-item__price')

// if (pesosHome) {

//     const pesosHomeInterval = setInterval(() => {
//         if (pesosHome.length != 0) {
//             clearInterval(pesosHomeInterval)

//             fetch('https://api.bluelytics.com.ar/v2/latest')
//                 .then(response => response.json())
//                 .then(data => {
//                     dolarBlueVenta = data.blue.value_avg
//                 })
//                 .then(() => {
//                     for (let i = 0; i < pesosHome.length; i++) {
//                         const priceParent = pesosHome[i]
//                         const price = pesosHome[i].children;
//                         const priceExtract = price[1].textContent.split(' pesos').toString()
//                         const priceNumber = priceExtract.split('$').join('')

//                         const finalPrice = priceNumber.split('.').join('')
//                         let finalPriceTotalSplit = finalPrice

//                         if (finalPrice.includes(',')) {
//                             finalPriceTotalSplit = finalPrice.split(',')[0]
//                         }

//                         const pesosConversion = (finalPriceTotalSplit / dolarBlueVenta).toFixed(2)
//                         const div = document.createElement('div')
//                         div.classList.add('priceConvertedHome')
//                         div.innerText = pesosConversion + ' USD'
//                         priceParent.appendChild(div)

//                     }

//                 })
//                 .catch(error => console.log(error))

//         }
//     }, 1000);

// }

// const ofertasSection = document.getElementsByClassName('andes-money-amount andes-money-amount--cents-superscript')


// if (ofertasSection) {
//     const ofertasSectionInterval = setInterval(() => {
//         if (ofertasSection.length != 0) {
//             clearInterval(ofertasSectionInterval)

//             fetch('https://api.bluelytics.com.ar/v2/latest')
//             .then(response => response.json())
//             .then(data => {
//                 dolarBlueVenta = data.blue.value_avg

//             })
//             .then(() => {
    
//                 for (let i = 0; i < ofertasSection.length; i++) {
                    
//                     let price = ofertasSection[i].childNodes;
//                     price = price[2]
//                     const priceText = price.textContent.split('.').join('')
                    
//                     const pesosConversion = (priceText / dolarBlueVenta).toFixed(2)

//                     const div = document.createElement('div')
//                     div.classList.add('priceConvertedHome')
//                     div.innerText = pesosConversion + ' USD'
//                     price.appendChild(div)

//                 }
    
//             })
//             .catch(error => console.log(error))

//         }
//     }, 1000);
// }





