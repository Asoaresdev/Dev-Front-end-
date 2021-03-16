import React from 'react'
import Button from '@material-ui/core/Button'
import { LOGIN_URL } from '../../constants/urls'
import { ContainerAvatar, ContainerCard, ContainerModal } from './styles';
import axios from 'axios';

export default function UserCard(props) {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('')
    
  // função de abrir o modal e trazer as informações da API
  const HandleOpen = (param) => {
    setOpen(true);
      axios
     .get(`${LOGIN_URL}${ param }`)
     .then(response => {
       setData(response.data)
     })
     .catch(error => {
       alert(error);
     })
  };

  // função de fechar o modal 
  const handleClose = () => {
    setOpen(false);
  };

  // construção do modal 
    const body = (
        <ContainerModal>
          <h2 id="simple-modal-title">{data.name}</h2>
          <p id="simple-modal-description">
            {data.public_repos} repositórios
          </p>
          <p id="simple-modal-description">
            {data.followers} seguidores
          </p>
          <p id="simple-modal-description">
            Perfil criado em : <br />{data.created_at} 
          </p>
          <Button 
            onClick = {handleClose}
            variant="contained" 
            color="primary" 
            type="button"
          >
            fechar
          </Button>
        </ContainerModal>
      );

    return (
      <ContainerCard>
        <ContainerAvatar  alt="Remy Sharp" src={ props.image } />
        <>
          <p>{ props.name } </p>
          <div>
            <Button 
              variant="contained" 
              color="primary" 
              type="button" 
              onClick={() =>  HandleOpen(props.login) }>
              Saiba mais
            </Button>
            { open &&
            <>
              {body}
            </> }
          </div>
        </>
      </ContainerCard>
    )
}


