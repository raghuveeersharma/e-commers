import { Button } from "@headlessui/react";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Grid2
        className="bg-black text-white mt-10"
        container
        spacing={40}
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid2 className="text-center" xs={12} md={3} sm={6}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Help{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2 className="text-center" xs={12} md={4} sm={6}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Help{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2 className="text-center" xs={12} md={4} sm={6}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Help{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2 className="text-center" xs={12} md={4} sm={6}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              {" "}
              Help{" "}
            </Button>
          </div>
        </Grid2>
        <Grid2 className=" mx-auto " item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </a>
          </Typography>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Footer;
