import "./App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Procon NguyenAI
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "400" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Server" variant="outlined" />
            <TextField id="outlined-basic" label="Host" variant="outlined" />
            <TextField id="outlined-basic" label="Token" variant="outlined" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
