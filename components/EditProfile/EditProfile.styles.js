
let styles = {
    container: {
    	alignItems: 'center',  
        backgroundColor: '#fff'
    }, 
    mainView1:{
        width:'100%',
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
        justifyContent: 'space-between',
        //borderWidth: 2,
        backgroundColor: '#ffe6f2',
    },
    discard:{
        flexDirection:'row',
        alignItems:'center',
    },
    save:{
        flexDirection:'row',
        alignItems:'center',
    },
    discardText:{
        fontSize: 20,
        //fontWeight:theme.FONT_WEIGHT_HEAVY,
        color:'#63004f'
    },
    saveText:{
        fontSize: 20,
        //fontWeight:theme.FONT_WEIGHT_HEAVY,
        color:'#63004f',
        marginRight: 5,
    },
    mainView2:{
        width:'100%',
        height:230,
        backgroundColor:'#f2f2f2',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 4,
        flexDirection: 'row',
    },
    viewForPicture:{
        width:210,
        height:'97%',
        backgroundColor:'#fff',
        alignItems:'center',
        borderWidth:3,
        borderRadius: 2,
        borderColor:'#63004f',
        shadowColor: '#000',
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation:26,
        alignItems: 'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:'100%'
        
    },
    cameraIcon:{
        //position:'absolute',
        //top:'85%',
        //left:'84%',
        marginHorizontal: 10,
        marginTop: 193,
    },
    mainView3:{
        width:'99%',
        height:290,
        //backgroundColor:'red',
        paddingTop: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 5,
        
    },
    userDetailsText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'#63004f',
        marginBottom:2,
        marginTop: 20,
        marginRight:40
    },
    subview3:{
        width:'100%'
    },
    input:{
        paddingHorizontal: 5,
        marginVertical: 9,
        marginHorizontal: 5,
        height:60,
        width:'90%',
        borderBottomWidth: 1,
        borderColor: '#63004f',
    }
}

export default styles;
