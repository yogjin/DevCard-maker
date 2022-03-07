import firebase from '../../config/firebase-config';
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebase);

const googleProvider = new GoogleAuthProvider();

function signInWithRedirectGoogle() {
  signInWithRedirect(auth, googleProvider);
}

export default signInWithRedirectGoogle;
