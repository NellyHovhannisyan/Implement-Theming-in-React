import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const NewCard = styled(Card)`
  width: 80%;
  background-color: ${(props) => props.theme.cardBackground} !important;
  color: ${(props) => props.theme.textColor} !important;
  margin: 25px auto;

  & img {
    height: 350px;
    object-fit: contain;
  }
  & p,
  & h3 {
    color: ${(props) => props.theme.textColor} !important;
  }
`;

function Content({ changeThemeMode }) {
  const handleButtonClick = () => {
    changeThemeMode();
  };

  return (
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <NewCard>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://66.media.tumblr.com/tumblr_m7v0lxN0po1rn95k2o1_500.gif"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="h3"
                align="center"
                color="secondary"
              >
                Minions
              </Typography>

              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img
                        src="https://pngimg.com/uploads/minions/minions_PNG57.png"
                        width="50px"
                        alt="minions"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  Minions actually speak a language known as “minion-ese”
                  however this language is easy to learn, especially if you know
                  some Spanish and Italian.
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img
                        src="https://p7.hiclipart.com/preview/762/595/577/evil-minion-minions-gif-clip-art-despicable-me-minions-holiday.jpg"
                        width="50px"
                        alt="minions"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  If you look at the hand of a minion, you will notice they only
                  have 3 fingers.{" "}
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img
                        src="https://www.searchpng.com/wp-content/uploads/2019/03/Minions-PNG-Image.png"
                        width="50px"
                        alt="minions"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  Minions are often seen wearing goggles, whether they have one
                  eye or two eyes, but no one known why they were goggles.
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img
                        src="https://pp.netclipart.com/pp/s/17-170197_minions-png-bob-y-kevin-minions.png"
                        width="50px"
                        alt="minions"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  The height of the average minion is about 105 centimeters or
                  41 inches tall or a little under 3 and a half feet tall.{" "}
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img
                        src="https://n7.nextpng.com/sticker-png/688/734/sticker-png-stuart-the-minion-kevin-the-minion-computer-icons-minions-bob-the-minion-minions-heroes-electric-blue-film-despicable-me.png"
                        width="50px"
                        alt="minions"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  The minions’ design was inspired by the Jawas from Star Wars
                  and the Oompa Loompas from Willy Wonka and the Chocolate
                  Factory. At first there were talks of the minions being tall
                  and orc-like. Thankfully that didn’t happen!{" "}
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </NewCard>
      </Box>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button
          mt={3}
          variant="contained"
          color="secondary"
          onClick={handleButtonClick}
        >
          Change Theme
        </Button>
      </Box>
    </>
  );
}

export default Content;
