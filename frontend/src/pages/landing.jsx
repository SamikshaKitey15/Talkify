import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function LandingPage() {
  const routTo = useNavigate();
  return (
    <div className="LandingPageContainer">
      <nav style={{ backgroundColor: "rgb(37, 150, 190)" }}>
        <div className="navHeader">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBlock: "1rem",
            }}
          >
            <img src="https://vectorified.com/images/chat-app-icon-18.jpg" />
            Talkify
          </h2>
        </div>
        <div className="navList">
          <p
            onClick={() => {
              routTo("/guestUser");
            }}
          >
            JOIN AS GUEST
          </p>

          <p
            onClick={() => {
              routTo("/auth");
            }}
          >
            REGISTER
          </p>

          <p
            onClick={() => {
              routTo("/auth");
            }}
          >
            LOGIN
          </p>
        </div>
      </nav>

      <div className="LandingMainContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "3rem 5rem 0 5rem",
          }}
        >
          <h1 style={{ fontSize: "2.7rem", color: "black" }}>
            <span style={{ color: "#FF9839", fontSize: "3.5rem" }}>Bridge</span>{" "}
            the gap, <br></br>
            no matter the distance.
            <br></br>
            <span style={{ color: "#FF9839", fontSize: "3.5rem" }}>
              Connect
            </span>{" "}
            with your loved ones only on Talkify . . . 
          </h1>

          <div
            className="cardBody"
            style={{ marginTop: "1rem", width: "3rem" }}
          >
            <Card
              sx={{
                minWidth: 400,
                opacity: "0.7",
                borderRadius: "20px",
                backgroundColor: "rgb(242, 239, 239)",
              }}
            >
              <CardContent style={{ color: "black" }}>
                <Typography sx={{ fontSize: 25, mb: 2 }}>Talkify</Typography>
                <Typography sx={{ mb: 4 }}>
                  <LocalPhoneIcon />
                  &nbsp;Incoming call . . .
                </Typography>
                <div className="bothbuttons">
                  <Link
                    className="GetStartedButton"
                    style={{ backgroundColor: "red", width: "100%" }}
                    to={"/auth"}
                  >
                    Decline
                  </Link>
                  &nbsp;
                  <Link
                    style={{ width: "100%", backgroundColor:"green" }}
                    className="GetStartedButton"
                    to={"/auth"}
                  >
                    Get Started
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="LandingMainImage">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/518/121/original/vector-man-and-woman-with-smartphones-concept-illustration-texting-messaging-chatting-social-media-customer-assistance-dating-communication.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// https://assets-v2.lottiefiles.com/a/3d13279e-117f-11ee-8997-2fd24cabd7b8/BCwZkze0jG.gif

// https://cdn.dribbble.com/users/1894420/screenshots/11700268/online-video-chat.gif

// https://cdn.dribbble.com/users/1003944/screenshots/15741863/media/e7c05a6423abe7506c5067508cb8a64b.gif?resize=400x0
