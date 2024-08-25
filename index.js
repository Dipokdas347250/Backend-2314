const express = require('express')
const app = express()
const port = 4000



  const users =  [ "products",
    {title:"Apple iPhone Charger", brand:"Apple", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"Beats Flex Wireless Earphones", brand:"Beats", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"iPhone 12 Silicone Case with MagSafe Plum", brand:"Apple", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"Selfie Lamp with iPhone", brand:"GadgetMaster", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"Apple iPhone Charger", brand:"Apple", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"Selfie Stick Monopod", brand:"SnapTech", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
    {title:"Apple iPhone Charger", brand:"Apple", description:"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.", category:"mobile-accessories" , price:19.99, discountPercentage:1.01,rating:3.03, stock:4 ,},
   
    
  ] 







app.get('/', (req, res) => {
    res.send(users)
  })







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })