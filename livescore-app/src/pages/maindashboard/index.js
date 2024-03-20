import { Box, useMediaQuery } from "@mui/material";
import DashboardBox from "../../components/DashBoardbox";
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Column1 from "./column1";
import KeyboardNavigation from "../../components/Tabs";

const gridTemplateLargeScreens = `
   "a b c"
`;

const gridTemplateSmallScreens = `
  "a"
  "b"
  "c"
`;

const Maindashboard = () => {
    const theme = useTheme();
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    
    return (
        <ThemeProvider theme={theme}>
            <KeyboardNavigation/>
        <Box 
            width="100%" 
            height="100%" 
            display="grid" 
            gap="1.5rem"
            sx={{ 
                gridTemplateColumns: isAboveMediumScreens
                    ? "20% 50% 30%"
                    : "repeat(1, 1fr)",

                ...(isAboveMediumScreens 
                    ? {
                        gridTemplateRows: "minmax(500px, 1fr)",
                        gridTemplateAreas: gridTemplateLargeScreens,
                    } 
                    : {
                        gridAutoColumns: "1fr",
                        gridAutoRows: "minmax(200px, 1fr)",
                        gridTemplateAreas: gridTemplateSmallScreens,
                    }
                )
            }}
        >
            
            <DashboardBox  gridArea="a">
               <Column1 />
            </DashboardBox>
            <DashboardBox  gridArea="b"></DashboardBox>
            <DashboardBox  gridArea="c"></DashboardBox>
        </Box>
        </ThemeProvider>
    );
};

export default Maindashboard;