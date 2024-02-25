export const isLogin = (data) =>{
    console.log(data)
    return{
        type:'loginDetail',
        data
    }
}

export const Logout = (data) =>{
    console.log(data)
    return{
        type:'logout',
        data
    }
}