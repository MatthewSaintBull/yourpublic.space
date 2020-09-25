import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack,
} from "react-ui-cards";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";

function App() {
  const [walls, setWalls] = useState([]);
  useEffect(() => {
    async function getWalls() {
      fetch("https://run.mocky.io/v3/4c50a24c-2df1-4d30-b4aa-77d0a7c69e6a")
        .then((res) => res.json())
        .then((data) => {
          setWalls(data);
        });
    }
    getWalls();
  }, []);

  function followWall(link) {
    console.log("following", link);
    var win = window.open("https://" + link, "_blank");
    win.focus();
  }

  console.log(walls);
  return (
    <div className="App">
      <div className="header"></div>
      <StackGrid columnWidth={300} style={{padding: "100px"}}>
        {walls.map((wall) => {
          return (
            <FlippingCard>
              <FlippingCardBack>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    /* backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundImage: `url("${wall.back}")`, */
                  }}
                >
                  <Card>
                    <ImageHeader imageSrc={wall.back} />
                    <CardBody><AwesomeButton type="primary" action={()=>followWall(wall.link)}>Visit</AwesomeButton></CardBody>
                    <CardFooter>&copy; {wall.company} </CardFooter>
                  </Card>
                </div>
              </FlippingCardBack>
              <FlippingCardFront>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundImage:
                      "url(https://i.ibb.co/njFyZG0/Poster-festa-di-quartiere-verde-blu-retr-con-musicassetta.jpg)",
                  }}
                ></div>
              </FlippingCardFront>
            </FlippingCard>
          );
        })}
      </StackGrid>
    </div>
  );
}

export default App;
