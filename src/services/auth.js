import firebase from '../config/firebase-config.js';
import { getAuth, signInWithRedirect, getRedirectResult } from 'firebase/auth';
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
function getSignInResult() {
  getRedirectResult(auth).then(console.log);
}
export { getSignInResult, signInWithRedirectGoogle, signInWithRedirectGithub };
