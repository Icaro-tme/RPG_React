import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#F8F8F8',
        borderStyle: 'solid',
        borderRadius:15,
        borderWidth:1,
    },
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'3vw',
        borderWidth:1,
        borderRadius:15,
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    line:{
        width: '100%',
        margin:10,
        height: 1,
        backgroundColor:'gray'
    },
    description:{
        alignItems: 'center',
        justifyContent: 'center',
        margin:5
    },
    button:{
        marginTop:10,
        padding:5,
        borderRadius:5,
        
    },
    highlighted: {
        backgroundColor: '#d4e4ff',
    },
})

export default styles