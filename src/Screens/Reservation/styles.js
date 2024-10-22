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
    
    /* 버튼 공통 */

    btnCom: {
        width:'48%',
        height: 45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        marginBottom: 10,
    },

    btnCom100:{
        width:100,
        height: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        marginTop: 10,
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

    chechInOUt: {
        paddingVertical:10, 
        flexDirection:'row', 
        flex:1, 
        alignItems:'center', 
        justifyContent:'space-between', 
        borderBottomWidth:1, 
        borderBottomColor: '#e5e5e5', 
        marginBottom:20,
    },

    checkInOutBox:{
        flexDirection:'row', 
        flex:1, 
        alignItems:'center', 
        justifyContent:'space-between',
    },

    humanCount:{
        width:'100%', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginBottom:20,
    },

    humanCountBox:{
        width:'100%', 
        paddingVertical:10, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        borderBottomWidth:1, 
        borderBottomColor: '#e5e5e5',
    },

    commonButton: {
        width:'100%',
        backgroundColor:'#333',
        borderRadius: 3,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical: 16,
    },

    ComBtnText: {
        color:'#fff',
    },


    /* Reservation */
    roomsView: {
        paddingTop: 50,
    },

    roomsTit: {
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 20,
    },
    
    roomImg: {
        width:'100%',
        height: 200,
        marginBottom: 20,
    },

    roomLine: {
        flex:1,
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginBottom: 40,
    },  

    roomStyle: {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom: 15,
    },

    roomInfo: {
        fontSize: 12,
        color:'#777777',
        marginBottom: 5,
    },

    roomPrice: {
        marinTop: 10,
        fontSize: 20,
        fontFamily:'RobotoSerif-SemiBold',
    },
});

export default styles;