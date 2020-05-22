import React, { Component } from 'react';
import {Text,View,FlatList,ImageBackground,Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name:"",
	  	namestatus:false,
	  	password:"",
	  	passwordstatus:false,
	  	
	  };
	}
	magic = () => {
		return(<View style={{height:2,width:"100%",backgroundColor:'gold'}}></View>)
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'pink'}}>
			<ImageBackground source={require('../assests/pic2.png')} style={{ flex: 1,width:wp('100%'),height:hp('100%'),resizeMode: 'cover'}}>
				<FlatList
					numColumns={4}
					data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
					renderItem={({item})=>
						<Text style={{padding: 10,fontSize: 20,height: 44,color:'orange'}}>{item.key}</Text>}
						ItemSeparatorComponent={this.magic}
				/>
				<Button title="press me"
				onPress={()=>{this.props.navigation.navigate('About')}}
				/>
				</ImageBackground>
			</View>

			
		);
	}
}
