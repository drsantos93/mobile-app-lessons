import { defaultStyles } from "@/styles/defaultStyles";
import { Text, View, ScrollView } from "react-native";
import { NavigationBar } from 'expo-navigation-bar';
// React Native styling
/*
  // CSS
  div {
    flex: 1,
    flex-direction: ewan,
    background-color: blue
    color: red
  }

  // React native StyleSheet
  var :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00f',
    color: '#f00'
  }

*/

/*
  // HTML    |  React Native
    <div>         <View>
    <p><h1>       <Text>
    <img>         <Image>
*/

// border in StyleSheet doesn't exist
// you need to apply borderColor, borderWidth to show borders on components
export default function Index() {
  
  return (
    // <></> => shorthand React Fragment
    <> 
      <NavigationBar hidden={true}/>
      <View
      style={[defaultStyles.container, {flex: 1}]}>
        <Text style={defaultStyles.textDesign}>
          Lesson 1
        </Text>
        <ScrollView
        style={{flex: 1, borderColor: '#f00', borderWidth: 1, borderRadius: 20, width: '90%'}} // only affects scrollview
      
        // affects children, but not the content inside the children
        contentContainerStyle={[defaultStyles.container]}>
          {Array.from({length: 100}).map((_, index)=>(
            <View
              key={index}
              style={[defaultStyles.boxes, {backgroundColor: '#ff0'}]}
            ></View>
          ))}
        
        </ScrollView>
        
      </View>  
    </>
  );
}
