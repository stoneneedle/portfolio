import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography, } from "@mui/material";

const HomeSticky = () => {
  return (
    <Card sx={{ margin: 5 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            JG
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="James Groth"
        subheader="September 1, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      /> */}
      <CardHeader title="Welcome to jamesgroth.net!" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad, voluptatem possimus molestiae dolor molestias porro tempora deleniti consequatur rerum hic laudantium dolorum sit adipisci eos odio. Ex, debitis fuga!
          Exercitationem fugiat praesentium voluptates velit nobis, odit vero inventore ea laborum veniam minus impedit pariatur assumenda dolor ad sed aut numquam. Corrupti ipsam exercitationem maiores, hic quo itaque at nulla?
          Hic neque fugiat ab a assumenda ducimus dolorum tempore at, aliquid consequuntur magnam modi ratione autem provident architecto voluptatem non, explicabo eligendi et nisi, quod dolorem. Quod quasi omnis dignissimos.
          Ab, officiis perferendis autem voluptatum aliquam, aliquid temporibus omnis distinctio aperiam in ipsum! Voluptatem laudantium dolorem quas et nisi esse quia exercitationem placeat aperiam enim, consequatur quisquam delectus a voluptas.
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default HomeSticky;
