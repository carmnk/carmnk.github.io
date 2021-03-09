import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  mdiAccount,
  mdiClipboardCheck,
  mdiCodeTags,
  mdiFire,
  mdiGithub,
  mdiLinkedin,
  mdiMail,
  mdiMapMarker,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { createSkillChipSlide } from "../ComponentFactory";
import CSwiper from "../Components/CSwiper";

export const Search = (props: any) => {
  const now = new Date();
  const hour = now.getHours();
  let inTwoHours = hour + 2;
  let day = "today";
  if (hour + 2 > 24) {
    inTwoHours = hour + 2 - 24;
    day = "tomrrow";
  }

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 128px",
          alignItems: "center",
          marginTop: !!matches ? theme.spacing(6) : theme.spacing(2.5),
        }}
      >
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button style={{ margin: `${theme.spacing(1)} 0` }}>
              <ListItemIcon>
                <Icon path={mdiFire} color={theme.palette.primary.main} size={"40px"} />
              </ListItemIcon>
              <Typography variant="h6" component="nav">
                News
              </Typography>
            </ListItem>
            <ListItem button style={{ margin: `${theme.spacing(1)} 0` }}>
              <ListItemIcon>
                <Icon path={mdiClipboardCheck} color={theme.palette.primary.main} size={"32px"} />
              </ListItemIcon>
              <Typography variant="h6" component="nav">
                Projects
              </Typography>
            </ListItem>
            <ListItem button style={{ margin: `${theme.spacing(1)} 0` }}>
              <ListItemIcon>
                <Icon path={mdiAccount} color={theme.palette.primary.main} size={"32px"} />
              </ListItemIcon>
              <Typography variant="h6" component="nav">
                About Me
              </Typography>
            </ListItem>
            <ListItem button style={{ margin: `${theme.spacing(1)} 0` }}>
              <ListItemIcon>
                <Icon path={mdiCodeTags} color={theme.palette.primary.main} size={"32px"} />
              </ListItemIcon>
              <Typography variant="h6" component="nav">
                Coding
              </Typography>
            </ListItem>
          </List>
        </div>
        <div style={{ justifySelf: "center" }}>
          <img
            src="https://github.com/carmnk/resources/raw/main/images/profil.jpg"
            style={{ borderRadius: "50%", width: 96 }}
          />
        </div>
      </div>
      <div style={{ marginTop: !!matches ? theme.spacing(5) : theme.spacing(1) }}>
        <CSwiper
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={false}
          pagination={{ type: "progressbar" }}
          freeMode={true}
          height={50}
          slides={[
            createSkillChipSlide("Fullstack", { background: theme.palette.primary.main }),
            createSkillChipSlide("Typescript", { background: theme.palette.primary.main }),
            createSkillChipSlide("React", { background: theme.palette.primary.main }),
            createSkillChipSlide("Node.js", { background: theme.palette.primary.main }),
            createSkillChipSlide("Mongo/NoSQL", { background: theme.palette.primary.main }),
            createSkillChipSlide("Vanilla JS", { background: "#fff" }),
            createSkillChipSlide("CSS/JSS", { background: "#fff" }),
            createSkillChipSlide("HTML", { background: "#fff" }),
          ]}
        />
      </div>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          marginTop: !!matches ? theme.spacing(3) : theme.spacing(1),
        }}
      >
        <div>
          <IconButton color="primary" size="small" onClick={() => {}}>
            <Icon path={mdiLinkedin} size={"48px"} />
          </IconButton>
          <IconButton color="primary" size="small" onClick={() => {}}>
            <Icon path={mdiGithub} size="48px" />
          </IconButton>
          <IconButton color="primary" size="small" onClick={() => {}}>
            <Icon path={mdiMapMarker} size="48px" />
          </IconButton>
          <IconButton color="primary" size="medium" onClick={() => {}}>
            <Icon path={mdiMail} size="48px" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Search;
