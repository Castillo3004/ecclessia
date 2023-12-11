import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithRedirect } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly auth = inject( Auth );
  private readonly googleProvider = new GoogleAuthProvider();
  private readonly facebookProvider = new FacebookAuthProvider();
  private readonly twitterProvider = new TwitterAuthProvider();


  constructor() {
    // this.signOut();
  }



  get userState$(){
    return authState( this.auth );
  }


  async login( email: string, password: string ): Promise<void>{

    try {
      await signInWithEmailAndPassword(this.auth, email, password );

      const customClaims = (await this.auth.currentUser!.getIdTokenResult()).claims;
      console.log(customClaims);

    } catch (error) {
      console.log( error );
    }

  }




  async loginGoogle(): Promise<void>{

    try {
      await signInWithRedirect( this.auth, this.googleProvider );

    } catch (error) {
      console.log('Google login:', error);

    }
  }

  async loginFacebook(): Promise<void>{

    try {
      await signInWithRedirect( this.auth, this.facebookProvider );

    } catch (error) {
      console.log('Facebook' ,error);
    }

  }

  async loginTwitter(): Promise<void>{
    try {

      await signInWithRedirect( this.auth, this.twitterProvider)
    } catch (error) {

    }
  }


  async signOut(): Promise<void>{

    try {
      await this.auth.signOut()
    } catch (error) {
      console.log(error);
    }
  }




}
