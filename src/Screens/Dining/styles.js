import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    subHeader: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 9,
        backgroundColor:'#ffffff',
    },

    subContainer: {
        flex:1,
        paddingTop: 70,
    },

    commonPadding: {
        paddingTop: 100,
        paddingBottom:30,
        paddingHorizontal:20,
    },

    commonPaddingVt: {
        paddingTop: 70,
        paddingBottom:30,
    },

    commonPaddingHr: {
        paddingHorizontal: 20,
    }, 

    commonContainer: {
        paddingVertical:30,
        paddingHorizontal:20,
    },

    roomContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical:30,
        paddingHorizontal: 20,
    },

    safeContainer:{
        paddingTop:70,
        flex: 1,
        backgroundColor: '#ffffff',
    },

    tabContainer:{
        flex:1,
    },

    btnCom:{
        width:'100%',
        height: 45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        marginBottom: 10,
    },

    btnMain: {
        backgroundColor: '#333333', 
    },

    btnTxt: {
        fontSize:14,
    },

    dnImage: {
        width:'100%',
        height: 250,
        marginBottom:20,
    },

    dnTitEN: {
        fontSize: 20,
        marginBottom: 5,
    },

    dnTitKR: {
        fontSize: 12,
        color:'#837166',
        marginBottom: 15,
    },

    dnSub: {
        marginBottom: 30,
        color:'#333333',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
    },

    dnInfo: {
        paddingBottom: 30,
    },

    dnTit:{
        fontSize: 16,
        fontWeight:'700',
        marginBottom:10,
    },

    infoLine: {
        flexDirection:'row',
        alignItems:'flex-start',
        marginBottom:15,
    },

    infoTit: {
        width:50,
        color:'#555555',
        marginRight: 10,
    }
});

export default styles;