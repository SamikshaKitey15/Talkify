import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import "../styles/home.css";
import { Button, IconButton, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";



function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  
  return (
    <div className="FullBox">
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ display: "flex", alignItems: "Center" }}>
            <img src="https://vectorified.com/images/chat-app-icon-18.jpg" />
            Talkify
          </h2>
        </div>
        <div className="hislogout" style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            style={{ color: "white"  }}
            onClick={() => navigate("/history")}
          >
            <RestoreIcon />
            <p style={{ fontSize: "15px", fontWeight: "580"}}> HISTORY</p>&nbsp;
          </IconButton>
          <Button
            style={{ fontSize: "15px", color: "white", fontWeight: "580",padding:"0"  }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            LOGOUT
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <h1 style={{ fontSize: "2.7rem", color: "black" }}>
            <span style={{ color: "#FF9839" }}>TURNING</span> MOMENTS <br></br>
            INTO MEMORIES WITH FLAWLESS CALLS . . .
          </h1>
          <Card className="card"
            sx={{
              minWidth: 275,
              opacity: "0.9",
              borderRadius: "20px",
              backgroundColor: "rgb(242, 239, 239)",
            }}
          >
            <CardContent  style={{color:"black"}}>
              <Typography sx={{ fontSize: 25, mb: 2 }}>
                Connect with Talkify
              </Typography>
              <div style={{ display: "flex", gap: "10" }}>
                <TextField
                  onChange={(e) => setMeetingCode(e.target.value)}
                  label="Enter Meeting Code"
                  id="outlined-basic"
                  variant="outlined"
                ></TextField>
                <Button
                  style={{ marginLeft: "8px" }}
                  onClick={handleJoinCall}
                  variant="contained"
                >
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rightPanel">
          <img
            src=" https://assets-v2.lottiefiles.com/a/3d13279e-117f-11ee-8997-2fd24cabd7b8/BCwZkze0jG.gif"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
