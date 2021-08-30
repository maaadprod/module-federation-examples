import moduleFederation from "./moduleFederation";
import React from "react";

let remotes = null;


const remoteComponent = async function(route) {
  if (!remotes) {
    const response = await fetch("http://localhost:3001/dependencies.json");
    const newRemotesValue = await response.json();
    remotes = newRemotesValue;
  }
  return moduleFederation(remotes, route);
}

export default remoteComponent;