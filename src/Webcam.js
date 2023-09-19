import React from "react";
import Webcam from "react-webcam";

export const WebcamComponent = () => <Webcam onUserMediaError={(error) => console.log(error)} />;