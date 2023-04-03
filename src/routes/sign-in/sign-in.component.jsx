import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserProfileDocument(response);
  };

  // signInWithGooglePopup().then((resolve) => createUserProfileDocument(resolve));

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
