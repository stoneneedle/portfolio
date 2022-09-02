import { AvatarGroup, Avatar, Typography } from "@mui/material";

const Frameworks = () => {
  const imgs = [
    {
      caption: 'React',
      source: 'https://reactjs.org/logo-og.png'
    },
    {
      caption: 'Angular',
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
    },
    {
      caption: 'NodeJS',
      source: 'https://www.pngitem.com/pimgs/m/288-2880547_node-node-js-hd-png-download.png'
    },
    {
      caption: 'JavaScript',
      source: 'https://www.pngitem.com/pimgs/m/116-1167737_logo-javascript-pattern-copyright-framework-free-download-javascript.png'
    },
    {
      caption: 'HTML5',
      source: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png'
    },
    {
      caption: 'CSS3',
      source: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'
    },
    {
      caption: 'Java',
      source: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
    },
  ];

  const imgsDisplay = imgs.map((img, index) => {
    return (<Avatar
      key={index}
      alt={img.caption}
      src={img.source}
    />);
  });

  return (
    <>
      <Typography variant="h6" fontWeight={100}>
        Frameworks
      </Typography>
      <AvatarGroup max={7}>
        {imgsDisplay}
      </AvatarGroup>
    </>
  );
}

export default Frameworks;