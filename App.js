import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View,Platform,Dimensions,Button} from 'react-native';
import * as React from 'react';
import {PropTypes} from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';                    //Android
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';                //iOS


const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const Stack=createNativeStackNavigator();

const App=()=>
{
 Platform.OS==="web" && (console.log("Web"))
 return(
	<NavigationContainer>
	   <Tab.Navigator>
	      <Tab.Screen name="Home" component={Home}/>
	      <Tab.Screen name="Settings" component={Settings}/>
	      <Tab.Screen name="Details" component={Details}/>
	   </Tab.Navigator>
	</NavigationContainer>);
}

//Components always defined below App

const Home=({navigation})=>
{
 return(
	<View style={styles.container}>
	   <StatusBar barStyle="dark-content"/>
	   <Text>{"Home Screen!!!"}</Text>
	   <Button
	          title={"Settings"}
	          onPress={()=>
		  {
		     navigation.navigate("Settings");
		  }
		}/>
	  <Button
	          title={"Details"}
	          onPress={()=>navigation.navigate("Details")}/>
	</View>);
}

const Settings=({navigation})=>
{
 return(
	<View style={styles.container}>
	   <StatusBar barStyle="dark-content"/>
	   <Text>{`Settings`}</Text>
	   <Button 
	          title={"Home"}
	          onPress={()=>navigation.navigate("Home")}/>
	   <Button
	          title={"Details"}
	          onPress={()=>navigation.navigate("Details")}/>
	</View>);
}

const Details=({navigation})=>
{

	return(
		<View style={styles.container}>
		    <Text>{"This is Details"}</Text>
		    <Button
		            title={"Home"}
		            onPress={()=>navigation.navigate("Home")}/>
		    <Button
		            title={"Settings"}
		            onPress={()=>navigation.navigate("Settings")}/>
		</View>);
}


const styles=StyleSheet.create({
	container:{
		   flex:1,
		   flexDirection:'column',
		   alignItems:'center',
		   justifyContent:'center',
		   ...Platform.select({
			   android:{
				    paddingTop:StatusBar.currentHeight,
			            backgroundColor:'coral'},
			   default:{
				    backgroundColor:'blueviolet'} 
		                     })
	          },
});

export default App;
