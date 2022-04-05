import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const CardItem = (props) => {
    return (
        < View style={styles.frogContainer}>
            <Image
                source={require('../../assets/images/frog.png')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.name}>Calum Rogers</Text>
                <Text style={styles.job}>Junior Software Developer</Text>
                <Text style={styles.company}>Frog Systems</Text>
            </View>

        </View>
    );
};

export default CardItem;