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

    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },

    logoContainer: {
        paddingTop: 160,
        paddingBottom: 60,
    },

    buttonContainer: {
        flex: 2,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        marginBottom: 40,
    },
    
    loginBtnCommon: {
        width: 300,
        height: 55,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        marginBottom: 10,
    },

    kakaoBtn: {
        backgroundColor: '#ffeb3b',
    },

    kakaoTxt: {
        color:'#3e2723',
        fontSize:16,
        fontFamily:'Roboto-Bold',
    },

    naverBtn: {
        backgroundColor: '#00bf18',
    },

    naverTxt: {
        color:'#ffffff',
        fontSize:16,
        fontFamily:'Roboto-Bold',
    },

    emailBtn: {
        backgroundColor: '#333333',
    },

    /* 버튼 공통 */

    btnCom: {
        width:'100%',
        height: 55,
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
        borderColor:'#333333',
    },

    btnDisabled: {
        backgroundColor:'#d9d9d9',
    },

    btnTxt: {
        fontSize:16,
        fontFamily:'Roboto-Bold',
    },

    btnTxtMini: {
        fontSize:14,
    },

    emailLoginTit: {
        paddingVertical:40,
        fontSize:24,
        fontFamily:'Roboto-Bold',
        textAlign:'center',
    },

    inputView: {
        width:'100%',
        borderWidth:1,
        borderColor:'#e5e5e5',
        borderRadius:3,
        paddingHorizontal: 10,
        marginBottom:10,
    },

    autoLoginChk:{
        marginBottom:20,
        
    },

    joinEach: {
        width:'100%',
        marginBottom: 30,
    },

    inputAndBtn: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    joinTit: {
        fontSize:16,
        fontFamily:'Roboto-Bold',
        marginBottom:10,
    },

    
    selectBoxView: {
        width:'100%',
        marginBottom:10,
    },

    selContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    picker: {
        width: '100%',
        height: 50,
    },

    pickerContainer: {
        width:'30%',
        height: 50,
    },

    genderView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    textArea: {
        height: 120,
        textAlignVertical: 'top',
        overflow:'hidden',
    },

    inputInfo: {
        fontSize: 13,
        color:'#837166',
        marginBottom:10,
        paddingLeft: 5,
    },

});

export default styles;
