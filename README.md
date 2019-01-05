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
  getUser(id) {
    const ref = firebase.firestore().collection('users')
    ref.doc(id).get().then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        // throw error that doc doesn't exist
      }
    })
  }
  setUser(user) {
    const ref = firebase.firestore().collection('users')
    ref.set(user).then((uid) => {
      if(uid) {
        return uid;
      } else {
        //throw error that it did not go too well
      }
    })
  }
}
export const firebaseService = new FirebaseService()
```
