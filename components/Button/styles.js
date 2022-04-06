import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex:1,
        width: "100%",
        padding: 15,
        justifyContent:'flex-end',
        marginBottom: '20%'
        

    },
    button:{
        
        flexDirection: 'row',
        height: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 40,

    },
    text:{
        fontSize: 25,
        fontWeight: "500",
        color: 'white',
        marginLeft: 10,
        },

    info:{
        color:'white',
        
        
    }

    
});

export default styles;