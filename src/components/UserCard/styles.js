import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';

export const ContainerCard = styled.div`
    border: 1px solid;
    padding:2rem;
    border-radius: 0.5rem;
    display:flex;
    justify-content:space-around;
    background: #eceff1;
`

export const ContainerInfos = styled.div`
    display:flex;
    flex-direction:column;
    p{
       border-top:1.5px solid;
       border-bottom:1.5px solid;
       margin-bottom: 2rem;
       font-size:1.5rem;
    }
`
export const ContainerAvatar = styled(Avatar)`
    width: 150px;
    height:150px;
    margin-bottom: 3rem;
`
export const ContainerModal = styled.div`
    position: absolute;
    width: 30rem;
    background: white;
    border: 2px solid #000;
    box-shadow: inset 0 0 1em gray;
    padding: 3rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:10rem;
    z-index:10;
`
export const ButtonModal = styled.button`
    width:10rem;
`

export const Loading = styled.h1`
    color: blue;
`