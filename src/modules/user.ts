const SETUSER = 'user/SETUSER' as const;
const OUTUSER = 'user/OUTUSER' as const;

export const setuser = (ID:string, TEAM:string) =>({
    type:SETUSER,
    ID,
    TEAM,
})

export const outuser = () =>({
    type:OUTUSER,

})

// export const set = (pageNum:number) =>({
//     type:SET,
//     payload:pageNum
// })

type UserAction = 
    | ReturnType<typeof setuser>
    | ReturnType<typeof outuser>;

// type ListState={
//     listNum:number;
// }

type UserState={
    user:{ ID: string; TEAM: string; }[]
}

const initialState: UserState ={
    user:[
        {
            ID:"",
            TEAM:""
        }
    ]
}

function listNumber(
    state: UserState = initialState,
    action: UserAction
  ): UserState {
    switch (action.type) {
      case SETUSER: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
        return {
            user:[
                {
                    ID:action.ID,
                    TEAM:action.TEAM,
                }
            ]
        };
      case OUTUSER:
        return {
            user:[
                {
                    ID:"",
                    TEAM:"",
                }
            ]
        };
      default:
        return state;
    }
  }
  
  export default listNumber;