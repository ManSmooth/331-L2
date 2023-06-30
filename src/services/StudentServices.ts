import type { StudentItem } from '@/types'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudents(): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students')
  }
}
