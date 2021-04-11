import styled from 'styled-components'

export const ContainerHome = styled.section`
    text-align:center;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
`

export const ContainerSelect = styled.select`
    height: 2rem;
    border-radius: 0.3rem;
    background: lightgray;
    margin-top: 3rem;
`

export const ContainerForm = styled.form`
    display: grid;
    grid-template-rows:1fr 1fr;
    gap:.5rem;
    justify-content:center;
    align-items: center;
    div{
        display:grid;
        grid-template-columns:15rem 1fr 1fr;
        gap:1rem;
    }
    label {
        font-size: 1.5rem;
    }
    input{
        height: 2.4rem;
        font-size: 1.2rem;
    }
`

export const Buttonstyled = styled.div`
    width: 30rem;
    button{
        width:10rem;
    }
`

