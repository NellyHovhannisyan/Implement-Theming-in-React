import React, { useState, useEffect } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const NewCard = styled(Card)`
  width: 450px;
  background-color: ${(props) => props.bg} !important;
  color: ${(props) => props.color} !important;
  margin: 25px auto;

  & img {
    height: 350px;
    object-fit: contain;
  }
  & p {
    color: ${(props) => props.color};
  }
`;
const NewButton = styled(Button)`
  margin: 20px;
`;

function Content() {
  const [theme, setTheme] = useState({
    bgColor: (props) => props.theme.bgColors.lightTheme,
    textColor: (props) => props.theme.textColors.lightColor,
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const reset = () => {
    setTheme({
      bgColor: (props) => props.theme.bgColors.lightTheme,
      textColor: (props) => props.theme.textColors.lightColor,
    });
  };

  useEffect(() => {
    if (isClicked) {
      setTheme({
        bgColor: (props) => props.theme.bgColors.darkTheme,
        textColor: (props) => props.theme.textColors.darkColor,
      });
    } else {
      reset();
    }
  }, [isClicked]);
  return (
    <>
      <NewButton
        mt={3}
        variant="contained"
        color="secondary"
        onClick={handleButtonClick}
      >
        Change Theme
      </NewButton>

      <NewCard bg={theme.bgColor} color={theme.textColor}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://i.ytimg.com/vi/EbMt875tB3U/maxresdefault.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Minions
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              minus vel, libero corporis nemo veniam.
            </Typography>
          </CardContent>
        </CardActionArea>
      </NewCard>
    </>
  );
}

export default Content;
