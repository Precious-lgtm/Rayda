import { Button, Box } from '@mui/material';
import * as React from 'react';
import { useGetAllProductsQuery } from '../features/apiSlice';
import { BannerContainer, ButtonText, Label, ProductButton, ProductContainer, ProductDetails, ProductHeader, ProductImage, ProductIntro, ProductItem } from '../features/styles/Styles';

const Products = () => {
    const { data } = useGetAllProductsQuery();
    console.log(data.data);
    return (
        <ProductContainer>
            <ProductHeader>
                <Label>Featured Items</Label>
                <ButtonText>
                    View Auction
                </ButtonText>
            </ProductHeader>
            {data.data && 
                data.data.length > 0 && 
                data.data.map((product, i) => (
                    <ProductItem>
                        <ProductImage>
                            <img style={{ width: "40%", height: "90%", borderRadius: "5px" }} src = {product.image} />
                        </ProductImage>
                        <ProductIntro>
                            <label style = {{ padding: "5px", fontSize: 11, borderRadius: "50%", backgroundColor: "#f1f1f1", marginLeft: "1vh" }}>KO</label>
                            <label style = {{ fontSize: 13, fontWeight: "bold", marginLeft: "2vh" }}>{product.name}</label>
                            <label style = {{ fontSize: 12, fontWeight: "normal", color: "#f0f0f0", marginLeft: "2vh" }}>(Highest Bidder)</label>
                        </ProductIntro>
                        <ProductDetails>
                            <label style = {{ fontSize: 14, fontWeight: "bold", marginLeft: "1vh" }}>{product.title}</label>
                            <label style = {{ fontSize: 13, fontWeight: "normal", color: "#000", marginLeft: "1vh", marginTop: "1vh"}}>Current Bid: 
                                <strong style = {{ marginLeft: "1vh"}}>{product.bid}</strong>
                            </label>
                        </ProductDetails>
                        <ProductButton>
                            Add to Wishlist
                        </ProductButton>
                    </ProductItem>
            ))}
        </ProductContainer>
    )
}

export default Products;