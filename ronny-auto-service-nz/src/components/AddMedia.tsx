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
    measurementId: "G-HCV190EENX"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

 
function AddMedia() {
    // State to store uploaded file
    const [file, setFile] = useState<any>(null);
 
    // progress
    const [percent, setPercent] = useState(0);
 
    // Handle file upload event and update state
    function handleChange(event: any) {
        handleSetFile(event.target.files[0]);
    }

    function handleSetFile(event: any) {
        console.log(event)
        setFile(event);
    }
    
 
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
 
    return (
        <div>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
            <WebcamCapture setFile={setFile} />
        </div>
    );
}
 
export default AddMedia;