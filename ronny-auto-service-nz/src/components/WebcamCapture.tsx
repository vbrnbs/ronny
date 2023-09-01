import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER
};

const WebcamCapture = ({ setFile }: any) => {
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

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    // Convert and save base64 image
    const outputPath = 'captured_image.jpg';
    const saved = await base64ToJpg(imageSrc, outputPath);
    if (saved) {
      console.log(typeof outputPath)
      setFile(outputPath);
      console.log("Image saved:", outputPath);
    } else {
      console.log("Failed to save image.");
    }
  }, [webcamRef]);

  const base64ToJpg = async (base64Text: string, outputPath: any) => {
    // console.log("base64Text:", base64Text);
    const base64Data = base64Text.replace(/^data:image\/jpeg;base64,/, '');
    const response = await fetch(`data:image/jpeg;base64,${base64Data}`);
    if (!response.ok) return false;

    // const blob = await response.blob();

    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // // link.download = outputPath;
    // link.click();

    return true;
  };

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
