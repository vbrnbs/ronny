import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const PhotoGallery = ({ firebase, setFirebase, storage }: any) => {
  const [file, setFile] = useState<any>(null);

  const handleUpload = () => {
    if (!file) {
      alert('Please upload an image first!');
      return;
    }

    const storageRef = ref(storage, `/files/${"Reg.No"}-${new Date().toISOString()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress if needed
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setFirebase([...firebase, url]); // Add the new photo URL to the firebase state
        });
      }
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]; // Use optional chaining
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleChange} accept="image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      {/* Display the photos from the firebase state */}
      {firebase.map((photoUrl: string, index: number) => (
        <div key={index}>
          <img src={photoUrl} alt={`Photo ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
