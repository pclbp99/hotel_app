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

    webviewBoxStyle:{
        flex:1, 
        width:'100%', 
        height:250, 
        borderWidth:1,
        borderColor:'#837166',
        borderRadius:2,
        marginBottom:20,
    },

    webviewStyle: {
        flex:1, 
        width:'100%', 
        height:250, 
        overflow:'hidden',
    },

    mapInfoBox: {
        paddingBottom:30,
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
    },

    mapInfoEach: {
        marginBottom:20,
    },

    mapInfoTit: {
        fontSize:16,
        fontFamily:'RobotoSerif-SemiBold',
        marginBottom: 5,
        color:'#000',
    },

    mapAdrView: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
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

    mapBtnsView: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    busInfoView:{
        paddingVertical: 30,
    },

    busInfoLine: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom: 20,
        flexWrap:'wrap',
    },  

    busInfoTit: {
        fontSize: 16,
        fontFamily:'Roboto-Bold',
        marginBottom:20,
    },

    busInfoArr: {
        width:14,
        height:14,
        marginHorizontal:15,
    },

    /* About */
    aboutTit: {
        fontSize:18,
        fontWeight:'700',
    },

    /* Facility Introduction */
    facEachLine: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 30,
    },

    facEach: {
        width: '48%',
    },

    facImage: {
        width:'100%',
        height: 175,
        marginBottom: 10,
    },

    facTitEN:{
        fontSize:18,
    },

    facTitKR: {
        color:'#837166',
    },
    
});

export default styles;
