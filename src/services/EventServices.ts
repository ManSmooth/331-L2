import type { EventItem } from '@/types'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(pageSize: number, pageNum: number): Promise<AxiosResponse<EventItem[]>> {
    return apiClient.get<EventItem[]>(`/events?_limit=${pageSize}&_page=${pageNum}`)
  },
  getEventById(id: number): Promise<AxiosResponse<EventItem>> {
    return apiClient.get<EventItem>(`/events/${id}`)
  }
}
