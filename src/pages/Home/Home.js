import React from 'react'
import { BASE_URL } from '../../constants/urls'
import UserCard from '../../components/UserCard/UserCard'
import { useRequestData } from '../../hooks/useRequestData'
import { ContainerCards, ContainerHome, ContainerSelect } from './styles'

export default function Home() {
    const [namesUser, setNamesUser] = React.useState([])
    const listUser = useRequestData([], BASE_URL)

    // montando os cards com as infos da API 
    const cardListUse = listUser.map((item) =>{
        return(
            <UserCard 
                image = { item.avatar_url }
                key={ item.id }
                name = { item.login }
                login = { item.login }
            />
        )
    })

    // montando o select com as infos da API 
    const names = listUser.map((item) => {
        return(
            <option value={item.login} key={item.id}>{item.login}</option>
        )
    })

    const changeName=(event)=>{
        setNamesUser(event.target.value)
    }
    
    // busca 
    const filteredArray = listUser.filter((item) =>{
        if(item.login.includes(namesUser))
            return item
    }).map((item) =>{
        return (
            <UserCard 
                image = { item.avatar_url }
                key={ item.id }
                name = { item.login }
                login = { item.login }
            />)
    })
        
    return (
        <ContainerHome>
            <div>
                <ContainerSelect onChange={ changeName }>
                    <option value={""}>Nenhum</option>
                    { names }
                </ContainerSelect>
            </div>
            <ContainerCards>
                { namesUser ? filteredArray : cardListUse }
            </ContainerCards>
        </ContainerHome>
    )
}
