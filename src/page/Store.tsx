import Grid from "@mui/material/Grid2";
import logo from "../assets/images/logo.png";
import { Box, CardMedia, Typography } from "@mui/material";
import vid from "../assets/videos/dior.mp4";
import prototype from "../assets/images/prototype.jpeg";
import { useRef } from "react";

const items = [
  {
    video: vid,
    images: [prototype, prototype],
    name: "Batates",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sint a accusantium, deleniti dicta expedita. Aliquid ipsam reprehenderit ipsa quod corporis nesciunt eveniet, laboriosam, voluptatem a perferendis reiciendis. Dolore, maiores.",
  },
  {
    video: vid,
    images: [prototype, prototype],
    name: "Batates",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sint a accusantium, deleniti dicta expedita. Aliquid ipsam reprehenderit ipsa quod corporis nesciunt eveniet, laboriosam, voluptatem a perferendis reiciendis. Dolore, maiores.",
  },
  {
    video: vid,
    images: [prototype, prototype],
    name: "Batates",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sint a accusantium, deleniti dicta expedita. Aliquid ipsam reprehenderit ipsa quod corporis nesciunt eveniet, laboriosam, voluptatem a perferendis reiciendis. Dolore, maiores.",
  },
];
function Store() {
  const videoref = useRef<HTMLVideoElement>(null);

  const handleLoad = () => {
    videoref.current?.play();
  };

  return (
    <>
      <Grid container width={"100vw"}>
        <Grid size={12}>
          <CardMedia
            image={logo}
            component="img"
            height={800}
            width={"100vw"}
          />
        </Grid>
        <Grid size={12} textAlign={"center"} margin={"40px"}>
          <Typography
            fontSize={"1.5em"}
            align="center"
            color="secondary"
            fontWeight={800}
          >
            Card Holders
          </Typography>
        </Grid>

        {items.map((item, idx) => (
          <div key={idx}>
            <Grid container alignItems={"center"}>
              <Grid size={{ xs: 12, md: 8 }}>
                {/* <CardMedia component="video" loop preload="mp4" muted autoPlay >
                  <source src={item.video} type="video/mp4" />
                </CardMedia> */}
                <video
                  src={item.video}
                  width={"100%"}
                  height={"100%"}
                  playsInline
                  autoPlay
                  loop
                  muted
                  ref={videoref}
                  onLoad={handleLoad}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }} padding={"20px"}>
                <Typography
                  fontSize={"1.5em"}
                  align="center"
                  color="secondary"
                  fontFamily={"sans-serif"}
                  fontWeight={400}
                >
                  {item.name}
                </Typography>
                <Typography
                  fontSize={"1em"}
                  align="center"
                  fontFamily={"sans-serif"}
                  color="secondary"
                  fontWeight={100}
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid size={12} textAlign={"center"}>
              <Typography
                fontSize={"1em"}
                align="center"
                color="secondary"
                fontWeight={500}
                margin={"40px"}
              >
                Photos
              </Typography>
            </Grid>
            <Grid
              container
              columnSpacing={"40px"}
              justifyContent={"center"}
              padding={{ xs: 0, md: "0 40px" }}
            >
              {item.images.map((image, idx) => (
                <Grid size={{ xs: 12, md: 6 }} key={idx}>
                  <CardMedia image={image} component="img" />
                </Grid>
              ))}
            </Grid>
            <Grid size={12}>
              <Box height={"116px"} />
            </Grid>
          </div>
        ))}
      </Grid>
    </>
  );
}

export default Store;
