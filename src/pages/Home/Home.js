import React from 'react'
import { BASE_URL } from '../../constants/urls'

import UserCard from '../../components/UserCard/UserCard'
import { useRequestData } from '../../hooks/useRequestData'
import { ContainerCards } from './styles'

export default function Home() {

    const listUser = useRequestData([], BASE_URL)
  
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
    const names = listUser.map


    return (
        <div>
            <ContainerCards>
               {cardListUse}
            </ContainerCards>

        </div>
    )
}
