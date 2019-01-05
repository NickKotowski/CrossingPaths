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
