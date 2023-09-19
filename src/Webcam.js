import React, {useState} from "react";
import Webcam from "react-webcam";

export const WebcamComponent = () => {
        const [error, setError] = useState(false);



    return error ? <div> no camera </div> : <Webcam onUserMediaError={(error) => { setError(true); console.log(error)}} />

};