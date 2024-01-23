export interface ApiResponse {
  success: boolean
  data?: Array<object> | object
  message?: string
  error_code?: string
}

export interface ApiResponseData {
  id: number | string
  created_at: string
  updated_at: string
}
