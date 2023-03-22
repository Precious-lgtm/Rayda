import * as React from "react";
import { Box, Button } from "@mui/material";
import { AddAlarm } from "@mui/icons-material";
import { BoxContainer } from "../features/styles/Styles";

function Header() {
    return (
        <BoxContainer>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
                marginLeft: "10px"
            }}>
                <label style = {{
                    lineHeight: "38px",
                    fontWeight: "600",
                    fontSize: "30px"
                }}>Welcome</label>
                <label style = {{
                    lineHeight: "24px",
                    fontWeight: "400",
                    fontSize: "16px"
                }}>Your current sales auction and activity</label>
            </Box>
            <Box>
                <Button>
                    <AddAlarm />
                    <label style = {{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                    }}>2</label>
                </Button>
            </Box>
        </BoxContainer>
    )
}

export default Header;