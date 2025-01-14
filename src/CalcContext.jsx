import React, { createContext, useContext, useReducer } from 'react';

// 初始狀態和 reducer
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return { 
        ...state, 
        loan: action.payload.amount, 
        loanPurpose: action.payload.loanPurpose, 
        balance: state.balance + action.payload.amount 
      };
    case 'account/payloan':
      return { 
        ...state, 
        loan: 0, 
        loanPurpose: '', 
        balance: state.balance - state.loan 
      };
    default:
      return state;
  }
}

// 1.創建 對象池
const StoreContext = createContext();
//2.對象池實例化應用匯出準備
const CalcProvider = ({ children }) => {
  //一定是包內容所以在這裡寫children
  const [state, dispatch] = useReducer(reducer, initialState);
  //3放置所需的hook
  return (
    //4實例化後的狀態，value是children可以使用的東西，可從之後的useStore解構
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
//5.呼叫真正的包覆讓大家能透過useStore使用上面的東西
const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a CalcProvider');
  }
  return context;
};

// 存款的 action 函數
const deposit = (amount) => {
  return {
    type: 'account/deposit',
    payload: amount
  };
};


const withdraw = (amount) => {
  return {
    type: 'account/deposit',
    payload: amount
  };
};

const requestLoan = (amount) => {
  return {
    type: 'account/requestLoan',
    payload: amount
  };
};

const payLoan = (amount) => {
  return {
    type: 'account/payloan',
    payload: amount
  };
};

//6.匯出provider

export { CalcProvider, useStore, deposit, withdraw, requestLoan, payLoan };

