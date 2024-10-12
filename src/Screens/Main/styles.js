import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    commonView:{
        backgroundColor:'#fff',
        paddingVertical:30, 
        paddingHorizontal:20
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

    roomTitles: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        paddingHorizontal:20,
    },

    titEN:{
        fontSize:24,
    },

    titKR: {
        color:'#777'
    },

    commonView2:{
        backgroundColor:'#fff',
        paddingVertical:30, 
    },

    promotionView: {
        paddingVertical: 40,
        paddingHorizontal:20,
        backgroundColor:'#f4f6f8',
    },

    promotionTitles: {
        marginBottom:30,
    },

    diningTitles: {
        paddingHorizontal:20,
        marginBottom: 30,
    },
    
    diningEach: {
        width:'100%',
    },

    diningImageBox: {
        flex:1,
        flexDirection:'row',
    },

    diningTextBox: {
        paddingVertical:30,
        paddingHorizontal:20,
    },

    diningTextTitEN: {
        fontFamily:'RobotoSerif-SemiBold',
        fontSize:20,
        marginBottom: 5,
    },

    diningTextTitKR: {
        fontSize:12,
        color:'#837166',
        marginBottom:20,
    },

    diningTextDsc: {
        color:'#333333',
    },

    facilitiesTitles: {
        paddingHorizontal:20,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:20,
    },



});

export default styles;
