import Server_Urls from "./Server_Urls";
import React from "react";
export const PostApi = async (url, params) => {
  var formBody = [];

  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch(Server_Urls.BASE_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((response) => {
      const result = response;

      return result;
    })
    .catch((e) => {
      console.log("POST Response", "Response Body -> " + JSON.stringify(e));
    });
};
