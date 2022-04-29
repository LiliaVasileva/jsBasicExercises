function petShop(input){
    let count_dog_food = Number(input[0])
    let count_cat_food = Number(input[1])
    let dog_food_price = count_dog_food * 2.50
    let cat_food_price = count_cat_food * 4
    let all_food_price = dog_food_price + cat_food_price
    console.log(`${all_food_price} lv.`)
}

petShop(["5 ","4 "])
petShop(["13","9"])