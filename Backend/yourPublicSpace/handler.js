"use strict";

module.exports.getWalls = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      [
        {
          id: "1214231421",
          company: "SherlTV",
          link: "twitch.tv/sherltv",
          back:
            "https://panels-images.twitch.tv/panel-87838630-image-f65795bd-584c-4844-a268-8af2905031e4",
        },
      ],
      null,
      2
    ),
  };

  callback(null, response);
};
