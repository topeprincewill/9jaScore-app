import { Box } from "@mui/material";
import { styled } from "@mui/system";


const DashboardBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? "#1a1a1a" : "#ffffff", /* Darker shade than black */
borderRadius: "1rem",
border: `0.001rem solid ${theme.palette.mode === 'dark' ? "#ffffff" : "#000000"}`,
boxShadow: "0.1rem 0.1rem 0.1rem 0.05rem rgba(0, 0, 0, .5)"
}))

export default DashboardBox;