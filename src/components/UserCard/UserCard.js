import React from 'react'
import { Button} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import { LOGIN_URL } from '../../constants/urls'
import { 
  ContainerAvatar, 
  ContainerCard, 
  ContainerInfos, 
  ContainerModal, 
  Loading } from './styles';
import axios from 'axios';

export default function UserCard(props) {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
    
  // função de abrir o modal e puxar as informações da API
  const HandleOpen = (param) => {
    setOpen(true);
    setIsLoading(true)
      axios
     .get(`${LOGIN_URL}${ param }`)
     .then(response => {
      setData(response.data)
      setIsLoading(false)
     })
     .catch(error => {
       alert(error);
     })
  };

  // função de fechar o modal 
  const handleClose = () => {
    setOpen(false);
  };

// Função para formatar a data 
  function timeConverter(UNIX_timestamp){
    let dateToFormat = new Date(UNIX_timestamp);
    let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    let year = dateToFormat.getFullYear();
    let month = months[dateToFormat.getMonth()];
    let date = dateToFormat.getDate();      
    let time = date + ' ' + month + ' ' + year + ' '; 
    return time;
  }
  
  // salvando a data formatada 
  const date = timeConverter( data.created_at )


  // construção do modal 
  const body = (
    <ContainerModal >
      {isLoading ? <Loading>loading...</Loading> : 
      <div>
        <h2 id="simple-modal-title">{data.login}</h2>
        <p id="simple-modal-description">
          {data.public_repos} repositórios
        </p>
        <p id="simple-modal-description">
          {data.followers} seguidores
        </p>
        <p id="simple-modal-description">
          Perfil criado em : <br /><br />{date} 
        </p>
        <Button 
          onClick = {handleClose}
          variant="contained" 
          color="primary" 
          type="button"
        >
          fechar
        </Button>
      </div>
      }
    </ContainerModal>
    );

  return (
    <ContainerCard>
      <ContainerAvatar  alt="Remy Sharp" src={ props.image } />
      <ContainerInfos>
        <p>{ props.name } </p>
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            type="button" 
            onClick={() =>  HandleOpen(props.login) }>
            Saiba mais
          </Button>
          
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body }
          </Modal>
        </div>
      </ContainerInfos>
    </ContainerCard>
  )
}


