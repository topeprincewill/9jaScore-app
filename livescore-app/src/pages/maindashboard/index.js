import { Box, useMediaQuery } from "@mui/material";
import DashboardBox from "../../DashBoardbox";
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Column1 from "./column1";
import Column2 from "./column2";
import Column3 from "./column3";
import KeyboardNavigation from "../../components/Tabs";
import { useDarkMode } from '../../DarkModeContext';

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

    const { isDarkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <div style = {{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222',}}>
        <ThemeProvider theme={theme}>
            <div   >
            <KeyboardNavigation style = {{width: '100%'}} />
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
            
            <DashboardBox  gridArea="a" style = {{height: '80vh', borderRadius: '2vh', border: 'black' }} >
               <Column1  />
            </DashboardBox>
            <DashboardBox  gridArea="b" ><Column2/></DashboardBox>
            
            <DashboardBox  gridArea="c" style = {{marginRight: '50px', height: '60vh'}}><Column3/></DashboardBox>
            
        </Box>
        </div>
        </ThemeProvider>
        </div>
    );
};

export default Maindashboard;