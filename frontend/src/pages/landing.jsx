import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
          }}>
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
            <Card className="Card"
              sx={{
                minWidth: 400,
                opacity: "0.8",
                borderRadius: "20px",
                backgroundColor: "rgb(242, 239, 239)",
              }}>
              <CardContent className="cardContent" style={{ color: "black" }}>
                <Typography sx={{ fontSize: 25, mb: 2 }}>Talkify</Typography>
                <Typography className="incomeCall" style={{display:"flex", alignItems:"center"}} sx={{ mb: 4 }}>
                  <LocalPhoneIcon />
                  &nbsp;Incoming call . . .
                </Typography>
                <div className="bothbuttons">
                  <Link
                    className="GetStartedButton"
                    style={{ backgroundColor: "rgb(224, 34, 34)", width: "100%" }}
                    to={"/auth"}
                  >
                    DECLINE
                  </Link>
                  &nbsp;
                  <Link
                    style={{ width: "100%", backgroundColor:"rgb(34, 182, 42)" }}
                    className="GetStartedButton"
                    to={"/auth"}
                  >
                    GET STARTED
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




// videos.filter is not a function
// TypeError: videos.filter is not a function
//     at http://localhost:3000/static/js/bundle.js:1815:35
//     at basicStateReducer (http://localhost:3000/static/js/bundle.js:39819:43)
//     at updateReducerImpl (http://localhost:3000/static/js/bundle.js:39897:50)
//     at updateReducer (http://localhost:3000/static/js/bundle.js:39848:12)
//     at Object.useState (http://localhost:3000/static/js/bundle.js:48874:16)
//     at exports.useState (http://localhost:3000/static/js/bundle.js:54125:32)
//     at VideoMeet (http://localhost:3000/static/js/bundle.js:1589:74)
//     at react-stack-bottom-frame (http://localhost:3000/static/js/bundle.js:48333:18)
//     at renderWithHooks (http://localhost:3000/static/js/bundle.js:39650:20)
//     at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:40919:17)