import { Injectable, inject } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, sendEmailVerification } from '@angular/fire/auth';


interface ErrorResponse {
  code: string,
  message: string,
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly auth = inject( Auth );


  async signUp(email: string, password: string): Promise<void>{
    try {

      // Create account
      await createUserWithEmailAndPassword( this.auth, email, password);

      await this.auth.currentUser?.getIdTokenResult().then( claims => {
        claims.claims =
          { rol: 'SUPER_USER' }
      })




      // Send email
      // await this.sendEmailVerification( user );
      //Redirect to welcome message


    } catch ( error: unknown ) {
      const {code, message} = error as ErrorResponse;
      console.log('Code', code);
      console.log('Message', message);

    }
  }


  async sendEmailVerification( user: User ): Promise<void>{

    try {
      await sendEmailVerification( user );

    } catch (error:unknown) {
      console.log(error);
    }
  }

}
