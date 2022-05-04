function yardGreening(input){
    let cubicМeters  = Number(input[0]);
    let priceDiscount = (cubicМeters * 7.61) * 0.18
    let finalPrice = (cubicМeters * 7.61) - priceDiscount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${priceDiscount} lv.`)
}

yardGreening(["550"])
yardGreening(["150"])