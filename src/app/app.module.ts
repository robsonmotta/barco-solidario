import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { ContactProvider } from '../providers/contact/contact';
import { PatientProvider } from '../providers/patient/patient';
import { PatientOdontoProvider } from '../providers/patient-odonto/patient-odonto';
import { ChildProvider } from '../providers/child/child';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0SKtuss4QtLKzndxI_LjqqS3lK14afqM",
      authDomain: "barco-solidario.firebaseapp.com",
      databaseURL: "https://barco-solidario.firebaseio.com",
      projectId: "barco-solidario",
      storageBucket: "barco-solidario.appspot.com",
      messagingSenderId: "813814174017"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuthModule,
    ContactProvider,
    PatientProvider,
    PatientOdontoProvider,
    ChildProvider
  ]
})
export class AppModule {}
