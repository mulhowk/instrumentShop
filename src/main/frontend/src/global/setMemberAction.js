export const setMemberInfo : (info : any) => {type : string, payload : any} = (info) => ({
    type : 'SET_MEMBER_INFO',
    payload : info,
});