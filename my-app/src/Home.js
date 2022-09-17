import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className = 'home__image' src='https://m.media-amazon.com/images/I/71LH5oj5KhL._SX3000_.jpg' alt=''></img>

            <div className='home__row'>
                <Product
                     id = '54367932'
                     title = 'Mu6 Space2 Active Noise Cancelling Headphones, Touch Control, Hi-Fi Sound, Enhanced Bass, Wireless Bluetooth Headphones for Work Travel TV Call'
                     price = {99.99}
                     image = 'https://m.media-amazon.com/images/I/61BgJm5FXML._AC_UY436_QL65_.jpg'
                     rating = {4} 
                />
                <Product 
                    id = '49538094'
                    title = 'Unstoppable: Siggi B. Wilzig Astonishing Journey from Auschwitz Survivor and Penniless Immigrant to Wall Street Legend'
                    price = {15.99}
                    image = 'https://m.media-amazon.com/images/I/71K5UjDJ-1S._AC_UL640_QL65_.jpg'
                    rating= {4}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id = '12321341'
                    title = 'Hisense 50" ULED 4K' 
                    price = {399.99} 
                    image = 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-YzdiM2MxNmUt-w758._SY608_CB633778562_.jpg' 
                    rating = {5}
                />
                <Product 
                    id = '2678456'
                    title = '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray'
                    price = {1099.99}
                    image = 'https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY436_QL65_.jpg'
                    rating = {4}
                />
                <Product 
                    id = '36570891'
                    title = 'Echo Dot (4th Gen) | Sleek design with full sound, Bluetooth, and Alexa | Glacier White'
                    price = {79.99}
                    image = 'https://m.media-amazon.com/images/I/51F+N9Z3h0L._AC_UY436_QL65_.jpg'
                    rating = {3}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id = '90829332'
                    title = 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con'
                    price = {299.99}
                    image = 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY436_QL65_.jpg'
                    rating = {5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home
