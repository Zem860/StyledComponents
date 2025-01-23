import styled from 'styled-components'
const PoemStyle = styled.div
`
max-width:360px;
max-height:360px;
&>*{

margin:0 20px;

}

`
const Poem1 = () => {
    return <PoemStyle><p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p><p>一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p><p></p><p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p></PoemStyle>
}

export default Poem1