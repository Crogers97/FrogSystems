import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



const Button = () => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.button}
            onPress={() =>{ Linking.openURL('https://frogsystems.co.uk/')
                ;
            }}>
                <Icon style={styles.info} name="info-circle" size={30} color="#900" />
                <Text style={styles.text}>More Info</Text>
                
                
            </Pressable>
            
            
            </View>
    )
}

export default Button;