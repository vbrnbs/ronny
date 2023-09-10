import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER
};

const WebcamCapture = ({ firebase, setFirebase }: any) => {
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const webcamRef = useRef(null) as any;
  const [imgSrc, setImgSrc] = useState(null);

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
    const outputPath = `Reg.No-${new Date().toISOString()}${Math.random()}.jpg`;
    const saved = await base64ToJpg(imageSrc, outputPath);
    if (saved) {
        console.log("Image saved:", outputPath);
    } else {
        console.log("Failed to save image.");
    }
  }, [webcamRef, firebase]);

  const base64ToJpg = async (base64Text: string, outputPath: any) => {
    const base64Data = base64Text.replace(/^data:image\/jpeg;base64,/, '');
    const response = await fetch(`data:image/jpeg;base64,${base64Data}`);
    if (!response.ok) return false;

    const blob = await response.blob();
    setFirebase([...firebase, blob]);

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = outputPath;
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
            <div className='flex flex-col gap-2 m-2 cursor-pointer'>
              <button onClick={capture} >add more</button>
              
              <button onClick={() => setFirebase([])}>delete all</button>
            </div>
          ) : (
            <button onClick={capture}>Capture photo</button>
          )}
        </div>

        <div>
          {firebase && firebase.length}
          {firebase && firebase.map((file: any, idx: number) => {
            return (
              <div key={idx}>
                <img src={URL.createObjectURL(file)} alt="firebase" />
                <button onClick={() => {}} >delete</button>
              </div>
            )
          })}
        </div>
        
      </div>
    </>
  );
};

export default WebcamCapture;
