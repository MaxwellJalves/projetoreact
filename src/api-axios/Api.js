import axios from 'axios'

let urlapi ='http://localhost:8080/v1/itens'

const api = axios.create(
{
    method: 'get',
    baseURL: urlapi
}
)

export default api