import styled from 'styled-components'

const PoemStyle = styled.div
    
`
  display: flex;
  flex-direction: column;
  margin-top:70px;
`
const Poem = ({children})=>{
    return (<PoemStyle>{children}</PoemStyle>)
}

export default Poem