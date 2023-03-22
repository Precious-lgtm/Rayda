import * as React from 'react';
import { styled } from '@mui/system';
import banner from '../../images/banner.png';
import content from '../../images/content.png';
import '../../App.css';
import '../../fonts/IBMPlexSans-Regular.ttf';

/**
 * This container (MainContainer) wraps the entire
 * application. You'll find it in the App.js file.
 */
export const MainContainer = styled('div')({
    width: "auto",
    minHeight: "100vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3vh",
    fontFamily: "Regular"
});

/**
 * This container (BoxContainer) wraps the content in
 * each component.
 */
export const BoxContainer = styled('div')({
    width: "90vw",
    minHeight: "12vh",
    backgroundColor: "white",
    borderRadius: "5px",
    marginTop: "3px",
    padding: "6px",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 2.6px 1.95px"
});

export const BannerContainer = styled('div')({
    width: "90vw",
    minHeight: "12vh",
    backgroundColor: "white",
    borderRadius: "5px",
    marginTop: "5vh",
    padding: "6px",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
});

export const BannerWrapper = styled('div')({
    width: "98%",
    height: "auto",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
});

export const ColoredBanner = styled('div')({
    width: "100%",
    height: "20vh",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    borderRadius: "5px",
    display: "flex",
    marginTop: "6px",
    zIndex: 100,
    marginBottom: "-5vh"
});

export const ContentBanner = styled('div')({
    minHeight: "15vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "transparent",
});

export const LogoContainer = styled('div')({
    zIndex: 300,
    width: "12vw",
    height: "27vh",
    padding: "2px",
    marginTop: "-5vh",
    backgroundImage: `url(${content})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
});

export const Label = styled('label')({
    fontFamily: "bold",
    fontSize: 20,
    lineHeight: "40px"
});

export const Snippet = styled('li')({
    color: "#B54708",
    backgroundColor: "#FFFAEB",
    lineHeight: "20px",
    fontFamily: "semibold",
    fontSize: 16,
    padding: "1vh",
    borderRadius: "5px",
    marginRight: 10,
});

export const ButtonText = styled('label')({
    width: "auto",
    height: "auto",
    fontSize: 16,
    fontWeight: "bold",
    padding: "1vh",
    paddingLeft: "2.5vh",
    paddingRight: "2.5vh",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
});

export const ProductContainer = styled('div')({
    width: "90vw",
    minHeight: "12vh",
    backgroundColor: "white",
    borderRadius: "5px",
    marginTop: "5vh",
    padding: "6px",
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;"
});

export const ProductHeader = styled('div')({
    width: "98%",
    minHeight: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #f1f1f1"   
})

export const ProductItem = styled('div')({
    width: "21.6%",
    minHeight: "15vh",
    backgroundColor: "white",
    borderRadius: "5px",
    marginTop: "4vh",
    marginBottom: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
});

export const ProductImage = styled('div')({
    width: "100%",
    height: "18vh",
    backgroundColor: "rgb(245,245,245)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px"
});

export const ProductIntro = styled('div')({
    width: "100%",
    minHeight: "5vh",
    marginTop: "2vh",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
});

export const ProductDetails = styled('div')({
    width: "100%",
    minHeight: "8vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: "2vh",
    borderBottom: "1px solid #f1f1f1"
});

export const ProductButton = styled('button')({
    width: "100%",
    height: "5.5vh",
    backgroundColor: "#004CCC",
    fontSize: 14,
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    marginTop: "2vh"
});

export const NotifLabel = styled('label')({
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "1.5vw",
    height: "1.5vw",
    fontSize: 11,
    marginLeft: "-2vw",
    marginTop: "1vw",
    zIndex: 300
});

export const WelcomeLabel = styled('label')({
    lineHeight: "38px",
    fontWeight: "600",
    fontSize: "30px"
});

export const FootNote = styled('label')({
    lineHeight: "24px",
    fontWeight: "400",
    fontSize: "16px"
});

export const IntroContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "10px"
});