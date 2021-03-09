import React from "react";
import CSwiper from "../Components/CSwiper";
import { createSkillChipSlide } from "../ComponentFactory";
import { Chip, Container, IconButton, makeStyles, Paper, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { mdiFire } from "@mdi/js";
import Icon from "@mdi/react";
import { Link, useHistory } from "react-router-dom";

const useSwiperStyles = makeStyles((theme: Theme) => ({
  "@global": {
    ".swiper-pagination-progressbar-fill": {
      background: theme.palette.primary.main + " !important",
    },
    ".swiper-pagination": {
      bottom: "0px !important",
      top: "45px !important",
      height: "2px !important"
    },
  },
}));

export const Home = (props: any) => {
  const { menuOpen, setMenuOpen } = props;
  const theme = useTheme();
  const [Toggle, setToggle] = React.useState(true);
  // const [ActiveLocation, setActiveLocation] = React.useState(0);
  // const history = useHistory();
const matches = useMediaQuery(theme.breakpoints.up("sm"));
  // const [IsSearching, setIsSearching] = React.useState(false);
  useSwiperStyles();
  const activeLocationStyle = { background: theme.palette.primary.main };
  const imgHeader = !menuOpen ? "Want your coding job done in no time?" : "carmnk - web and app developer";
   return (
     <React.Fragment>
       <div style={{ position: "relative", top: 0, background: "#333", paddingBottom: !!matches ? 32 : 64 }}>
         <Container style={{ position: "relative", top: 0, boxSizing: "border-box" }} disableGutters maxWidth="md">
           <div
             style={{
               height: !!matches ? 512 : 384,
               opacity: !menuOpen ? 1 : 0,
               position: "relative",
               top: 0,
               backgroundSize: "cover",
               boxSizing: "border-box",
               backgroundImage: "url(https://github.com/carmnk/resources/raw/main/images/IMG_20200806_115021.jpg)",
               backgroundPosition: "bottom",
               borderRadius: 10,
             }}
           />
         </Container>
       </div>

       <div style={{ textAlign: "center", margin: 20 }}>
         <Typography color="primary" variant="h2" component="h1">
           Hi I'm carmnk, web and app developer
         </Typography>
         <Typography color="textSecondary" variant="h3" component="h2">
           focussing on React projects
         </Typography>
       </div>
       <Container maxWidth="md" style={{ marginTop: 20, paddingBottom: 20 }}>
         <CSwiper
           spaceBetween={10}
           slidesPerView={"auto"}
           navigation={false}
           pagination={{ type: "progressbar" }}
           freeMode={true}
           height={50}
           slides={[
             createSkillChipSlide("Fullstack", activeLocationStyle),
             createSkillChipSlide("Typescript", activeLocationStyle),
             createSkillChipSlide("React", activeLocationStyle),
             createSkillChipSlide("Node.js", activeLocationStyle),
             createSkillChipSlide("Mongo/NoSQL", activeLocationStyle),
             createSkillChipSlide("Vanilla JS", {}),
             createSkillChipSlide("CSS/JSS"),
             createSkillChipSlide("HTML", {}),
           ]}
         />
         <div
           style={{
             display: "grid",
             gridTemplateColumns: "32px auto max-content",
             marginTop: 20,
             alignItems: "center",
           }}
         >
           <div>
             <Icon path={mdiFire} color={theme.palette.primary.main} size={"32px"} />
           </div>
           <div>
             <Typography component="span">Trending</Typography>
           </div>
           <div>
             <Typography component="span" color="primary">
               view all
             </Typography>
           </div>
         </div>
         <div>
           <Button
             color="primary"
             onClick={() => {
               setToggle(!Toggle);
             }}
           >
             Toggle
           </Button>
         </div>
         <Typography variant="h1">Typo Header H1</Typography>
         <Typography variant="h2">Typo Header H2</Typography>
         <Typography variant="h3">Typo Header H3</Typography>
         <Typography variant="h4">Typo Header H3</Typography>
         <Typography variant="h5">Typo Header H3</Typography>
         <Typography variant="h6">Typo Header H3</Typography>
         <Typography variant="body1">Typo Header Body1</Typography>
         <Typography variant="body2">Typo Header Body2</Typography>
       </Container>
     </React.Fragment>
   );
};
export default Home;
