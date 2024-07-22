/*calcular os produtos e da um desconto de 30% tem desconto de 10%. */

const cart = [10,244,99,2,20,33,250] 
let finalValue = 0

/* R$250,00 //10%
250*7 -> 1750/100

*/

function calculateDiscount(price,discount){
        const result =(price*discount) / 100

}

calculateDiscount(250,7)


cart.forEach(value => {
     const discount = calculateDiscount(value, 10)
     if(value > 30){
        finalValue = finalValue + (value - discount)
     }else{
        finalValue += value
     }
})

console.log (`o valor final da compra foi de R$ ${finalValue},
porém voce teve desconto,irá pagar apenas R$ ${finalValue}`)
