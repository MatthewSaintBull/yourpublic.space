import React, { useEffect, useState } from "react";
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import {config} from './config/config';

import StackGrid from "react-stack-grid";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack,
} from "react-ui-cards";
import { AwesomeButton } from "react-awesome-button";




function followWall(link) {
  var win = window.open("https://" + link, "_blank");
  win.focus();
}



function Home() {
  const [walls, setWalls] = useState([]);
  
  useEffect(() => {
    async function getWalls() {
      fetch(config.getWallsApi)
        .then((res) => res.json())
        .then((data) => {
          setWalls(data);
        });
    }
    getWalls();
  }, []);

  return (
    <StackGrid columnWidth={300} style={{ padding: "100px" }}>
      {walls.map((wall) => {
        return (
          <FlippingCard key={wall.id}>
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
                  <CardBody>
                    <AwesomeButton
                      type="primary"
                      action={() => followWall(wall.link)}
                    >
                      Visit
                    </AwesomeButton>
                  </CardBody>
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
  );
}
export default Home;
