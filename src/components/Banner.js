import { ThumbUpAltOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import * as React from "react";
import { 
    BannerContainer, 
    BannerWrapper, 
    ButtonText, 
    ColoredBanner, 
    ContentBanner, 
    Label, LogoContainer, 
    LogoTexts, Snippet 
} from "../features/styles/Styles";

/**
 * 
 * @returns The Banner of the Webpage
 */

function Banner() {
    return (
        <BannerContainer>
            <BannerWrapper>
                <ColoredBanner/>
                <ContentBanner>
                    <LogoContainer/>
                    <LogoTexts>
                        <Label>Starts in: 3 days : 2 hours : 24 minutes</Label>
                        <Box sx = {{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <Snippet>Not Live</Snippet>
                            <label>Layers Auction </label>
                        </Box>
                    </LogoTexts>
                    <ButtonText>
                        <ThumbUpAltOutlined />
                        <label style = {{lineHeight: "12px", fontWeight: "semibold", marginLeft: "1vw" }}>Accept Invite</label>
                    </ButtonText>
                </ContentBanner>
            </BannerWrapper>
        </BannerContainer>
    )
}

export default Banner;