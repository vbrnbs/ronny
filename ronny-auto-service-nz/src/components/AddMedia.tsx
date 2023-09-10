import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import WebcamCapture from "./WebcamCapture";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig: any = {
  apiKey: "AIzaSyAyAWLSf9A3e1qQd4N-j_8_CCcSwLKrpts",
  authDomain: "ronny-nzgorge.firebaseapp.com",
  projectId: "ronny-nzgorge",
  storageBucket: "ronny-nzgorge.appspot.com",
  messagingSenderId: "37839314828",
  appId: "1:37839314828:web:7b665c39aabf73934d00a9",
  measurementId: "G-HCV190EENX",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function AddMedia() {
  // State to store uploaded file
  const [file, setFile] = useState<any>(null);
  const [photo, setPhoto] = useState(false);
  const [firebase, setFirebase] = useState([]);

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {

    
    // if (!file) {
    //   alert("Please upload an image first!");
    // }
    firebase && 
    firebase.map((file: any) => {
    const storageRef = ref(storage, `/files/${"Reg.No"}-${new Date().toISOString()}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  });
    };

  return (
    <div className="">
      {photo ? (
        <div>
          <button onClick={() => setPhoto(!photo)}>cancel</button>
          <WebcamCapture setFirebase={setFirebase} firebase={firebase} />
          {firebase.length > 0 && (
            <div>
              <button onClick={handleUpload}
              className="bg-yellow-500 p-4">Upload to Firebase</button>
              <p>{percent} "% done"</p>
            </div>
          )}
        </div>
      ) : (
        <div className="">
          <button onClick={() => setPhoto(!photo)}
          className="bg-blue-500 p-4">Add photo</button>
          <input
            type="file"
            multiple
            onChange={handleChange}
            accept="/image/*"
          />

          {file && (
            <div>
              <button onClick={handleUpload}
              className="bg-yellow-500 p-4">Upload to Firebase</button>
              <p>{percent}% done</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AddMedia;
