import * as React from "react";
import { Box, Button } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";
import { BoxContainer, FootNote, IntroContainer, NotifLabel, WelcomeLabel } from "../features/styles/Styles";

/**
 * @returns This page contains the Header of the webpage 
 */
function Header() {
    return (
        <BoxContainer>
            <IntroContainer>
                <WelcomeLabel>Welcome</WelcomeLabel>
                <FootNote >
                    Your current sales auction and activity.
                </FootNote>
            </IntroContainer>
            <Box>
                <Button sx = {{marginTop: '-1vh'}}>
                    <NotificationsNone sx = {{width: "4.5vw", fill: "black", height: "4.5vh", zIndex: 100}} />
                    <NotifLabel>2</NotifLabel>
                </Button>
            </Box>
        </BoxContainer>
    )
}

export default Header;