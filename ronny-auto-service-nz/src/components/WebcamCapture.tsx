import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER
};

const WebcamCapture = ({setFile}) => {
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const webcamRef = useRef(null) as any;
  const [imgSrc, setImgSrc] = useState(null);

  const retake = () => {
    setImgSrc(null);
  };

  const handleClick = useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setFile(imageSrc)
    console.log(imageSrc)
  }, [webcamRef]);

  return (
    <>
      
      <div className="container">
      <button onClick={handleClick}>Switch camera</button>
      
      <Webcam
        height={600} 
        width={600} 
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          ...videoConstraints,
          facingMode
        }}
      />
      
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
      <div>
        {imgSrc && (
          <img src={imgSrc} alt="webcam" />
        )}
      </div>
      </div>
    </>
  );
};

export default WebcamCapture;

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

// https://www.npmjs.com/package/react-webcam
