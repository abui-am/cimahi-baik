import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import Lightbox from "react-image-lightbox";
import { Fade } from "react-awesome-reveal";

const photos = [
  {
    src: "/images/1.jpg ",
    name: "image1",
  },
  {
    src: "/images/2.jpg ",
    name: "image2",
  },
  {
    src: "/images/3.jpg ",
    name: "image3",
  },
  {
    src: "/images/4.jpg ",
    name: "image4",
  },
  {
    src: "/images/5.jpg ",
    name: "image5",
  },
  {
    src: "/images/6.jpg ",
    name: "image6",
  },
  {
    src: "/images/7.jpg ",
    name: "image7",
  },
  {
    src: "/images/8.jpg ",
    name: "image8",
  },
  {
    src: "/images/9.jpg ",
    name: "image9",
  },
  {
    src: "/images/10.jpg ",
    name: "image10",
  },
  {
    src: "/images/11.jpg ",
    name: "image11",
  },
  {
    src: "/images/12.jpg ",
    name: "image12",
  },
];

const useStyles = makeStyles((theme) => ({
  base: {
    padding: "80px 0px",
  },
  image: {
    objectFit: "cover",
    borderRadius: 8,
    cursor: "pointer",
  },
  text: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: "56px",
    textAlign: "center",
    marginBlockStart: 0,
    marginBlockEnd: "24px",
    color: "#121212",
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
      lineHeight: 1.3,
    },
  },
  carousel: {
    "& .react-multiple-carousel__arrow": {
      zIndex: 100,
    },
  },
}));
const Galery = () => {
  const classes = useStyles();

  const dataSet = photos.map((photo) => photo.src);
  const [imgIndex, setIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const openLightbox = (index) => {
    setIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };
  return (
    <section className={classes.base}>
      <Fade direction="up" triggerOnce>
        <h5 className={classes.text}>Gallery</h5>
      </Fade>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass={classes.carousel}
          dotListClass=""
          draggable
          focusOnSelect={false}
          partialVisbile
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 80,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {photos.map((photo, index) => {
            return useMemo(
              () => (
                <div style={{ padding: 10 }} key={photo.name}>
                  <div
                    style={{
                      height: 226,
                      borderRadius: 8,
                      position: "relative",
                    }}
                  >
                    <Image
                      layout="fill"
                      src={photo.src}
                      className={classes.image}
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                </div>
              ),
              [photos]
            );
          })}
        </Carousel>

        {!!isOpen && (
          <Lightbox
            clickOutsideToClose={false}
            mainSrc={dataSet[imgIndex]}
            nextSrc={dataSet[(imgIndex + 1) % dataSet.length]}
            prevSrc={dataSet[(imgIndex + dataSet.length - 1) % dataSet.length]}
            onCloseRequest={() => closeLightbox()}
            onMovePrevRequest={() =>
              setIndex((imgIndex + dataSet.length - 1) % dataSet.length)
            }
            onMoveNextRequest={() => setIndex((imgIndex + 1) % dataSet.length)}
          />
        )}
      </div>
    </section>
  );
};

export default Galery;
