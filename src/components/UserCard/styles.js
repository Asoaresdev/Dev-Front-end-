import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';


export const ContainerCard = styled.div`
    width: 25rem;
    height:25rem;
    border: 1px solid;
    padding:2rem;
    border-radius: 1rem;

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
