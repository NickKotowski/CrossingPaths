First Hackathon!

To clean the project perform these

```
rm -rf node_modules/ ios/build android/build
npm install
```

# Back-end
Some code to interact with the database. This is almost-working code. For both iOS and Android, firebase is already installed.
```javascript
import firebase from 'react-native-firebase';

class FirebaseService {
  constructor() {
    this.ref = firebase.firestore().collection('users')
  }
  async getUser(id) {
    const doc = await this.ref.doc(id).get()
    if (doc.exists) {
      return doc.data()
    } else {
      // throw error that doc doesn't exist
    }
  }
  async setUser(user) {
    const uid = await this.ref.doc(user).set()
    if(uid) {
      return uid;
    } else {
      //throw error that it did not go too well
    }
  }
}
export const firebaseService = new FirebaseService()
```
