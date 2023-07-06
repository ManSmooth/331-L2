import type { EventItem } from '@/types'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(): Promise<AxiosResponse<EventItem[]>> {
    return apiClient.get<EventItem[]>('/events')
  },
  getEventById(id: number): Promise<AxiosResponse<EventItem>> {
    return apiClient.get<EventItem>(`/events/${id}`)
  }
}
