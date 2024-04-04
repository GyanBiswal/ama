import React from 'react'
import "./Home.css"
import SimpleImageSlider from "react-simple-image-slider";
import Product from './Product';

const images = [
    { url: "https://m.media-amazon.com/images/I/71TrkWGP76L._SX3000_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Makeup-PC_Rev._CB561514457_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/HSSapril/GW_Showpieces--more_3000x1200_PC._CB561573205_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/september/itelP55/NEWFOLDERAPPARIO/DD116844716_IN_WLD_itel_P55-4G-P55_New-Launch_tallhero_3000x1200_3._CB561985571_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Benz_newlaunch/OpenSale/GW/Salelive/D123068930_WLD_OnePlus_Benz_NewLaunch_DesktopTall_Hero_3000x1200._CB561984335_.jpg" },
];
  


function Home() {
  return (
    <div className='home'>
        <div className="home-container">
            <div className="home-image">
                <SimpleImageSlider
                    width={'100%'}
                    height={500}
                    images={images}
                    navStyle={2}
                    showNavs={true}
                    // slideDuration={5000}
                    loop={true}
                />
            </div>
            <div className="home-row">
                <Product
                    id = {1726539}
                    title={'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage'}
                    price={109390}
                    image='https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg'
                    rating={5}
                />
                <Product
                    id = {2673639}
                    title={'Fastrack Limitless Glide Advanced UltraVU HD Display'}
                    price={1399}
                    image='https://m.media-amazon.com/images/I/61JtVmcxb0L._AC_UY436_FMwebp_QL65_.jpg'
                    rating={4}
                />
                <Product
                    id = {2743539}
                    title={'Amazon Echo Dot 4th Gen with clock | Smart speaker with powerful bass, LED display and Alexa (Blue)'}
                    price={5499}
                    image='https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY436_FMwebp_QL65_.jpg'
                    rating={4}
                />
                <Product
                    id = {4723239}
                    title={'New Balance Men 9060 Natural Indigo Sneakers (U9060IND)'}
                    price={23999}
                    image='https://m.media-amazon.com/images/I/61AsWU5IloL._SY695_.jpg'
                    rating={4}
                />
            </div>
            <div className="home-row">
                <Product
                    id = {2723999}
                    title={'Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)'}
                    price={57990}
                    image='https://m.media-amazon.com/images/I/81MRU+3RJLL._SX679_.jpg'
                    rating={5}
                />
                <Product
                    id = {9723899}
                    title={'kotart Gond art Wall paintings for living room - Paintings wall decoration Wall frames for home decor Set of 6 Multicolo (F)'
                    }
                    price={1719}
                    image='https://m.media-amazon.com/images/I/71MHsaf6QLL._SX679_.jpg'
                    rating={5}
                />
            </div>
            <div className="home-row">
                <Product
                    id = {3313899}
                    title={'The Psychology of Money'
                    }
                    price={275}
                    image='https://m.media-amazon.com/images/I/61-hMfd7NGL._AC_UY436_FMwebp_QL65_.jpg'
                    rating={4}
                />
                <Product
                    id = {9793811}
                    title={'It Ends With Us'
                    }
                    price={310}
                    image='https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg'
                    rating={4}
                />
                <Product
                    id = {5323812}
                    title={'The Secret'
                    }
                    price={210}
                    image='https://m.media-amazon.com/images/I/81lOhiZO2CL._SY522_.jpg'
                    rating={5}
                />
                <Product
                    id = {182811}
                    title={'The Power of Your Subconscious Mind'
                    }
                    price={149}
                    image='https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY522_.jpg'
                    rating={5}
                />
                <Product
                    id = {9723899}
                    title={'YOU CAN'
                    }
                    price={129}
                    image='https://m.media-amazon.com/images/I/41AnbvGOT3L._SY445_SX342_.jpg'
                    rating={4}
                />
                <Product
                    id = {5523419}
                    title={'The Monk Who Sold His Ferrari'
                    }
                    price={199}
                    image='https://m.media-amazon.com/images/I/61pZyTuNDYL._SY522_.jpg'
                    rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home