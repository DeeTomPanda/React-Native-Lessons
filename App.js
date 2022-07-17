import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View,Platform,Dimensions} from 'react-native';
import React from 'react';
import {PropTypes} from 'prop-types';

const grid_arr=new Array(10).fill(null).map((v,i)=>i+1);
console.log(grid_arr);

function Row(props) 
{
  return <View style={styles.row}>{props.children}</View>;
}

function Column(props)
{
  return <View style={styles.column}>{props.children}</View>
}
const Box=(props)=>
{
	return(
		<View style={styles.box}>
		   <Text>{props.children}</Text>
		</View>
	);
}

function App()
{
      return(
	      <View style={styles.container}>
	      <StatusBar hidden={true}/>
	      <Row>
                 <Column>
                    <Box>{'#1'}</Box>
                    <Box>{'#2'}</Box>
                 </Column>
	      <Column>
                    <Box>{'#3'}</Box>
                    <Box>{'#4'}</Box>
                 </Column>
	      </Row>
	      <Row>
                 <Column>
                   <Box>{'#5'}</Box>
                   <Box>{'#6'}</Box>
                 </Column>
	         <Column>
                   <Box>{'#7'}</Box>
                   <Box>{'#8'}</Box>
                 </Column>
              </Row>
	</View>
      );
   //}
}

const styles=StyleSheet.create(
	{
		container:{
			flex:1,
			flexDirection:'column',
			backgroundColor:"indigo",
			justifyContent:"space-around",
			alignItems:"center",
			...Platform.select({
				ios:{paddingTop:20},
				android:{paddingTop:StatusBar.currentHeight},
				default:{backgroundColor:'skyblue'}
			}),
		},
		box:{
			height:100,
			width:100,
			justifyContent:'center',
			alignItems:'center',	
			backgroundColor:'lightgray',
			borderWidth:1,
			borderStyle:'dashed',
			borderColor:'darkslategray',
			backgroundColor:'palegreen',
		},
		row:{
			flex:1,
			flexDirection:'row',
			justifyContent:'space-around',
			alignSelf:'stretch',
			alignItems:'center'
		},
		column:{
			flex:1,
			flexDirection:'column',
			justifyContent:'space-around',
			alignItems:'center',
			alignSelf:'stretch',
			backgroundColor:'purple'
		},
		text:{
			fontWeight:'bold',
		}
	});


Box.propTypes={
	children:PropTypes.node.isRequired
}
export default App;
