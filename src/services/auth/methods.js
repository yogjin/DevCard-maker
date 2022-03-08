import firebase from '../../config/firebase-config';
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const auth = getAuth(firebase);

const googleProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
function signInWithRedirectGoogle() {
  signInWithRedirect(auth, googleProvider);
}
function signInWithRedirectGithub() {
  signInWithRedirect(auth, githubAuthProvider);
}
export { signInWithRedirectGoogle, signInWithRedirectGithub };
