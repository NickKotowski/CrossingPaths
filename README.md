First Hackathon!

To clean the project perform these

```
rm -rf node_modules/ ios/build android/build
npm install
```

Structure of the App:

Screens:

- Login
- YourPath
- AddNewEntry
- EditEntry (same as AddNewEntry but minor changes, information preloaded)
- AddLocation
- CrossingPaths
- PeopleYouAreFollowing
- FindNewPeople
- PathOfPersonYouFollow (basically like YourPath, but without Edit functions)
- (Info Screen)

Components:

- Button
  - onPress
  - title
- HeaderBackButton
- TextInput
  - label (if empty, dont show)
- Entry
  - type // 'short' / 'long'
  - actions // true / false
  - title
  - location: { long, lat }
  - startDate
  - endDate
  - comment
- ClickableTextComponent (same as Button essentially)
- Person
  - Name
  - Id
  - Location ( long/lat)
  - titleForLink
  - functionForLink


Subcomponents


styles:
- General
- BoldHeader


- GeneralContainer

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
