// App.js 

import React, { useState } from 'react'; 
import { View, Text, StyleSheet, Pressable } from 'react-native'; 
import { RadioButton } from 'react-native-paper'; 

const styles = StyleSheet.create({ 
	container: { 
		 
		backgroundColor: '#FFF', 
		justifyContent: 'center', 
          margin:8
	}, 
	radioGroup: { 
          width: '100%', 
		flexDirection: 'column',  
		alignItems: 'flex-start',  
		justifyContent: 'space-around', 
		borderRadius: 8, 
		backgroundColor: 'white', 
		
          

		
		
	}, 
	radioButton: { 
          width:'100%',
		flexDirection: 'row', 
		alignItems: 'center', 
          borderBottomColor:'grey',
          borderBottomWidth: 0.7, 
          padding:10,
          color: '#899499',
         
	}, 
	radioLabel: { 
		marginLeft: 8, 
		fontSize: 16, 
          fontWeight:"600",
          color: '#899480',
		 
	}, 
}); 

const PaymentOptions = () => { 
	const [selectedValue, setSelectedValue] = useState('option1'); 

	return ( 
		<View style={styles.container}> 
			<View style={styles.radioGroup} 
               
               > 
				<Pressable style={styles.radioButton} 
						onPress={() => setSelectedValue('option1')} 
                    
                    > 
					<RadioButton.Android 
						value="option1"
						status={selectedValue === 'option1' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option1')} 
						color="green"
					/> 
					<Text style={styles.radioLabel}> 
						Pay On Delivery
					</Text> 
				</Pressable> 

				<Pressable style={styles.radioButton}
						onPress={() => setSelectedValue('option2')} 
                    
                    > 
					<RadioButton.Android 
						value="option2"
						status={selectedValue === 'option2' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option2')} 
						color="green"
						
					/> 
					<Text style={styles.radioLabel}> 
					Credit/Debit Cards
					</Text> 
				</Pressable> 

						
				<Pressable style={styles.radioButton} 
						onPress={() => setSelectedValue('option3')} 
                    
                    > 
					<RadioButton.Android 
						value="option3"
						status={selectedValue === 'option3' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option3')} 
						color="green"
						
					/> 
					<Text style={styles.radioLabel}> 
					 PayTm
					</Text> 
				</Pressable> 
			</View> 
		</View> 
	); 
}; 

export default PaymentOptions;
