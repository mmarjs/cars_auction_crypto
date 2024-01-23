import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

// const ApiClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
// });
export const QK_SIGNUP = ''

export const useSignUpForm = () => {
    const queryClient = useQueryClient()
  
    return useMutation(async (body) => {
      const result = (await axios.post(``, { body })).data.data
      await queryClient.invalidateQueries(QK_SIGNUP)
      return result
    })
  }