import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import axios from "axios";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ReactMasonary = () => {
  const [photos, setPhotos] = useState([]);

  const config = {
    headers: {
      Authorization: "TXyCeZ0GtP0M11icf6Gwn1WBN78b3tlFpIhXOXR3TOaJygR6bAaINnOl",
    },
  };

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/curated?page=${1}`, config)
      .then((res) => {
        console.log(res.data.photos);
        setPhotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDownload = async (imageUrl, myurl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${myurl.split("/")[myurl.split("/").length - 2]}.jpeg`;
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>React Masonary</title>
      </Head>
      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="dark:bg-black min-h-[92]">
          <div className="dowBtn"></div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry>
              {photos.map((photo, key) => {
                return (
                  <div style={{ margin: "10px" }} key={key}>
                    <button
                      onClick={() =>
                        handleDownload(photo.src.original, photo.url)
                      }
                    >
                      Download
                    </button>
                    <img src={photo.src.original} alt={photo.photographer} />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ReactMasonary;
