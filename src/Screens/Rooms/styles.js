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

    btnSub:{
        backgroundColor: '#837166',
    },

    btnLine: {
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderColor:'#837166',
    },

    btnTxt: {
        fontSize:14,
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

    roomTit: {
        fontSize: 20,
        marginBottom: 10,
    },

    roomSub: {
        marginBottom: 30,
        color:'#333333',
    },

    roomInfoLine: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 30,
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5',
        marginBottom: 15,
    },

    roomInfoLeft: {
        fontSize: 12,
        color:'#777777',
        paddingVertical:2,
    },

    roomInfoRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    roomPrice: {
        fontSize: 20,
        fontFamily:'RobotoSerif-SemiBold',
    },
    
    infoBox: {
        paddingVertical: 15,
    },

    infoTit: {
        fontSize: 16,
        fontWeight:'700',
        marginBottom:10,
    },

    infoCon: {
        color:'#333333',
        paddingVertical:2,
    },

});

export default styles;