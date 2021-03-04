import React from "react";
//import logo from './logo.svg';
import './App.css';
import CCard from "./CCard";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import CBottomNav from "./CBottomNav";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff1744",
    },
    secondary: {
      main: "#ff9800",
    },
    type: "light"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    <div style={{ margin: 50 }}>
      <CCard
        useHeader={true}
        useMedia={true}
        useContent={true}
        useActionArea={true}
        useFooter={true}
        mediaHeight={240}
        cardWidth={320}
        elevation={8}
        headerAvatar={<Avatar>C</Avatar>}
        headerAction={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
        headerTitle="Header_Title"
        headerSubTitle="Header_SubTitle"
        imageSrc="https://github.com/carmnk/resources/raw/main/images/food_small.jpg"
        imageToolTip="My_Picture"
        onActionAreaClick={() => { alert("hi!") }}
        content={
          <React.Fragment>
            <Typography gutterBottom variant="h5" component="h2">
              Content_Header
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Content_Text
          </Typography>
            <div style={{ position: "absolute", top: 180, height: 50, width: 50, background: "#f50057", border: "1px solid black", borderRadius: 25, boxSizing: "border-box" }}>
              <Typography style={{marginTop: 12}}>
                12:00
              </Typography>
            </div>
          </React.Fragment>
        }
        footerContent={
          <React.Fragment>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                alert("button clicked");
              }}
            >Share</Button>
            <Button size="small" color="primary">
              Learn More
          </Button>
          </React.Fragment>
        }
        muiCardProps={{}}
      />
      </div>
      <CBottomNav />
      {/* <IconButton color="primary">
        <Icon path={mdiAccount} size={1} color="#333" />
      </IconButton> */}
      
    </ThemeProvider>
  );
}

export default App;
