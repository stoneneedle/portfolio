import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed2 = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus commodi, nam architecto repellat alias suscipit quam voluptatum laudantium quos in officiis aspernatur ipsam maxime itaque sit veritatis reiciendis nisi.
          Libero saepe, laudantium porro quos vero voluptate natus rerum voluptatibus consequuntur? Perferendis eius non ipsam cum nostrum qui, ex assumenda. Tenetur aliquid eius nobis harum sunt soluta quidem ipsum mollitia!
          Consequatur officia nam ipsa qui minus, praesentium laboriosam rem modi consequuntur aut quo perspiciatis expedita a quasi labore magnam! Commodi quis quas, reiciendis voluptatibus perferendis recusandae harum accusamus iste molestias!</p>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed2;
