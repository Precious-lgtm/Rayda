import * as React from "react";
import { Box, Button } from "@mui/material";
import { AddAlarm, Notifications, NotificationsNone } from "@mui/icons-material";
import { BoxContainer, FootNote, IntroContainer, NotifLabel, WelcomeLabel } from "../features/styles/Styles";

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
                <Button>
                    <NotificationsNone sx = {{width: "4.5vw", fill: "black", height: "4.5vh", zIndex: 100}} />
                    <NotifLabel>2</NotifLabel>
                </Button>
            </Box>
        </BoxContainer>
    )
}

export default Header;