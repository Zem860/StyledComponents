import LandingPage from "./LandingPage";
import TestHeader from "../componets/Test/TestHeader";
import Result from "../componets/Test/Result";
import TestForm from "../componets/Test/TestForm";
import {LineBar, Input, Button, Select} from '../componets/Test/LineBar'
import { useStore, deposit,withdraw, requestLoan, payLoan } from "../CalcContext"
const Test = () => {
    const { state, dispatch } = useStore();
    const handleDeposit =(e) => {
        e.preventDefault()
        dispatch(deposit(500))
    }
    return (<LandingPage>
        <TestHeader>
    
            <div>
                <p>The Redux Bank</p>
                <p>Welcome Zem</p>
                <p>Your Accounts Operations</p>
            </div>
            <div>
                <Result>{state.balance}</Result>
            </div>
        </TestHeader>
        <TestForm>
        <LineBar>
        <p >Deposit</p>
                <Input type="text" />
                <Select defaultValue="">
                    <option value="" disabled>
                        請選擇
                    </option>
                    <option value="option1">選項 1</option>
                    <option value="option2">選項 2</option>
                    <option value="option3">選項 3</option>
                </Select>
                <Button onClick={(e)=>{handleDeposit(e)}}>Deposit</Button>
            </LineBar>
            <LineBar>
            <p >Withdraw</p>
            <Input type="text" />

            <Button onClick={()=>{handleDeposit(e)}}>Withdraw</Button>
            </LineBar>

        </TestForm>

    </LandingPage>);
}

export default Test;