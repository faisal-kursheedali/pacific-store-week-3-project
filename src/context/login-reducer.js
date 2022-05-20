export default function Login(info,action){
    switch(action.type){
        case("login"):{
            return({...info,login:!info.login,user:action.payload.user,password:action.payload.password})
        }
        case("logout"):{
            return({...info,login:!info.login,user:"",password:""})
        }
        default:{
            
        }
    }
}