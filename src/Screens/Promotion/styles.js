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

    /* Promotion */
    proEach: {
        marginBottom: 40,
    },

    proImg: {
        width:'100%',
        height: 250,
        marginBottom:20,
    },

    proTit: {
        fontSize: 18,
        marginBottom:10,
    },

    proCon: {
        color:'#333333',
        marginBottom:20,
    },

    proDate: {
        fontSize:12,
        color:'#777777',
    },

    /* Detail */
    detailImg:{
        width:'100%',
        height: 300,
    },

    detailTit: {
        fontSize:24,
        marginBottom:20,
    },

    detailCon: {
        color:'#333333',
        marginBottom:20,
    },

    detailDateLine:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },

    detailDate: {
        color:'#777777',
        fontSize:12,
    },

    priceBox: {
        padding: 30,
        backgroundColor:'#f4f4f4',
    },

    priceLine: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 5,
    },

    priceWon: {
        fontFamily:'Roboto-Bold',
        fontSize:16,
    },

    packageTit: {
        fontSize: 18,
        fontFamily:'Roboto-Bold',
        marginBottom:15,
    },

    benefitItem: {
        paddingVertical:5,
        fontSize:16,
    },

    notificationBox: {
        marginTop: 20,
    },

    notificateItem: {
        fontSize:12,
        color:'#777777',
    },

});

export default styles;