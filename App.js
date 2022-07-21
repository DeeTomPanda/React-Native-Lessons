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
 return(
	<NavigationContainer>
	   <Stack.Navigator initialRouteName="Home">
	     <Stack.Screen name="Home" component={Home}/>
	     <Stack.Screen name="Settings" component={Settings}/>
	     <Stack.Screen 
	                   name="Details" 
	                   component={Details}
	                   options=
	                   {({route})=>(                              
			        //{route} is a dummy destructured prop
			        {    
			   	   headerRight:()=>
				   {
				      return(
					      <Button
					             title="headerRButton"
					             onPress={()=>{}}/>
				            )

				   },
				})
			   }/>
	   </Stack.Navigator>
	 </NavigationContainer>
       );	
}

//Components always defined below App

const Home=({navigation})=>
{
 return(
	<View style={styles.container}>
	 <View style={styles.innerContainer}>
	        <StatusBar barStyle="dark-content"/>
		<Text>{"Home Screen!!!"}</Text>
	        <Button
	                title={"Settings"}
	                onPress={()=>navigation.navigate("Settings")}/>
	        <Button
	                title={"Item #1"}
	                onPress={()=>navigation.navigate("Details",{
				title:"Item #1",})
			        }/>
	       <Button
	                title={"Item #2"}
	                onPress={()=>navigation.navigate("Details",{
				title:"Item #2",})
				}/>
	 </View>
	</View>
 );
}

const Settings=({navigation})=>
{
 return(
	<View style={styles.container}>
	   <StatusBar barStyle="dark-content"/>
	   <Text>{"Settings"}</Text>
	   <Button 
	          title={"Home"}
	          onPress={()=>navigation.navigate("Home")}/>
	</View>);
}

const Details=({route,navigation})=>
{
	const {title}=route.params;
        console.log(typeof(route.params));
	React.useLayoutEffect(()=>
	{
	     navigation.setOptions({title});
	},[]);

	return(
		<View style={styles.container}>
		    <Text>{"This is " + title}</Text>
		    <Button
		            title={"Home"}
		            onPress={()=>navigation.navigate("Home")}/>
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
	inner:{
		flex:1,
		justifyContent:'space-around',
		alignItems:'center'
	      }
});

export default App;
