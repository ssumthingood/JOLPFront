const PREVIOUS = 'list/PREVIOUS' as const;
const NEXT = 'list/NEXT' as const;
const SET = 'list/SET' as const;

export const previous = () =>({
    type:PREVIOUS
})

export const next = () =>({
    type:NEXT
})

export const set = (pageNum:number) =>({
    type:SET,
    payload:pageNum
})

type ListAction = 
    | ReturnType<typeof previous>
    | ReturnType<typeof next>
    | ReturnType<typeof set>;

type ListState={
    listNum:number;
}

const initialState: ListState ={
    listNum:0
}

function listNumber(
    state: ListState = initialState,
    action: ListAction
  ): ListState {
    switch (action.type) {
      case PREVIOUS: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
        return { listNum: state.listNum - 1 };
      case NEXT:
        return { listNum: state.listNum + 1 };
      case SET:
        return { listNum: action.payload };
      default:
        return state;
    }
  }
  
  export default listNumber;