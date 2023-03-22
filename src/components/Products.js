import * as React from 'react';
import { useState } from 'react';
import { useGetAllProductsQuery } from '../features/apiSlice';
import { 
    ButtonText, 
    Label, 
    ProductButton, 
    ProductContainer, 
    ProductDetails, 
    ProductHeader, 
    ProductImage, 
    ProductIntro, 
    ProductItem 
} from '../features/styles/Styles';
import { getFirstLetters, truncate } from '../features/functions';

const Products = () => {
    // The data for the products retrieved from the store
    const { data, error, isLoading } = useGetAllProductsQuery();  
    
    //These Images were added because those enlisted in the API were inaccessible
    const [productImages, setProductImages] = useState([
        {id: 1, name: "one", img: 'ImageLaptop.png'},
        {id: 2, name: "eight", img: 'ImageMac1.png'},
        {id: 3, name: "five", img: 'ImageLaptop1.png'},
        {id: 4, name: "six", img: 'ImageSamsung.png'},
        {id: 5, name: "three", img: 'ImageDesktop.png'},
        {id: 6, name: "four", img: 'ImageDesktop1.png'},
        {id: 7, name: "seven", img: 'ImageMac.png'},
        {id: 8, name: "two", img: 'ImagePhone.png'},
        
    ]);
    return (
        <ProductContainer>
            <ProductHeader>
                <Label>Featured Items</Label>
                <ButtonText>
                    View Auction
                </ButtonText>
            </ProductHeader>
            {isLoading ? (
                <ProductItem>
                    <label>Loading....Please Wait</label>
                </ProductItem>
                )
            : error ? (
                <ProductItem>
                    <label>Sorry. No Data to Display</label>
                </ProductItem>
            ) : data.data ? data.data.map((product, i) => (
                    <ProductItem>
                        <ProductImage>
                            <img style={{ width: "100%", height: "90%", borderRadius: "5px" }} src = {require('../products/' + productImages[i].img)} alt = {productImages[i].id} />
                        </ProductImage>
                        <ProductIntro>
                            <label style = {{ padding: "5px", fontSize: 11, borderRadius: "50%", backgroundColor: "#f1f1f1", marginLeft: "1vh" }}>{getFirstLetters(product.name)}</label>
                            <label style = {{ fontSize: 13, fontWeight: "bold", marginLeft: "2vh" }}>{product.name}</label>
                            <label style = {{ fontSize: 12, fontWeight: "normal", color: "gray", marginLeft: "2vh" }}>(Highest Bidder)</label>
                        </ProductIntro>
                        <ProductDetails>
                            <label style = {{ fontSize: 14, fontWeight: "bold", marginLeft: "1vh" }}>{truncate(product.title)}</label>
                            <label style = {{ fontSize: 13, fontWeight: "normal", color: "#000", marginLeft: "1vh", marginTop: "1vh"}}>Current Bid: 
                                <strong style = {{ marginLeft: "1vh"}}>{product.bid}</strong>
                            </label>
                        </ProductDetails>
                        <ProductButton>
                            Add to Wishlist
                        </ProductButton>
                    </ProductItem>
            )) : ""}
        </ProductContainer>
    )
}

export default Products;