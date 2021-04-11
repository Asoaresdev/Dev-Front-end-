import React from 'react'
import { BASE_URL } from '../../constants/urls'
import UserCard from '../../components/UserCard/UserCard'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm'
import { Button} from '@material-ui/core'
import { ContainerCards, ContainerHome, Buttonstyled, ContainerForm } from './styles'

export default function Home() {
    const [showButton, setShowButton] = React.useState(false)
    const [selectedCards, setSelectedCards] = React.useState([])
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

    //montando o input e a lógica
    function FormInput(){
        const { form, onChange } = useForm({ inputSearch: "" })
        
        const handleInput = (event) => {
            const { value, name } = event.target
            onChange (value, name)
        }
   
        const onSubmitForm = ( event ) => {
            event.preventDefault()

            const filteredArray = listUser.filter((item) => {
                if (item.login.toLowerCase().includes(form.inputSearch.toLowerCase()))
                    return item
                else 
                    return null
            })
            .map((item) => {
                return (
                    <UserCard
                        image={ item.avatar_url }
                        key={ item.id }
                        name={ item.login }
                        login={ item.login }
                    />)
            })
                                    
            setSelectedCards(filteredArray)
            setShowButton(true)  
        }

        const goBack = (event) => {
            setSelectedCards([])
            setShowButton(false)
        }

        return(
            <ContainerForm onSubmit={ onSubmitForm }>
                <label>Busca por login </label>
                <>
                {!showButton ?
                <Buttonstyled>
                    <input 
                        type="text"
                        value={ form.inputSearch }
                        onChange={ handleInput }
                        name={ 'inputSearch' }
                        required
                    />
                    
                    <button 
                        class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
                    >Buscar
                    </button>
                </Buttonstyled>
              :
                <Button
                    onClick= { goBack }
                    variant="contained" 
                    color="secondary" 
                    >Cancelar
                </Button> 
                }
                </>
            </ContainerForm>
        )
    }
    
    return (
        <ContainerHome>
            <div>
               <FormInput />
            </div>
            <ContainerCards>
                { selectedCards.length >0 ? selectedCards : cardListUse }
            </ContainerCards>
        </ContainerHome>
    )
}
