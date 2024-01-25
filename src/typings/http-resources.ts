export type ApiResponse = {
  success: boolean
  data?: Array<object> | object
  message?: string
  error_code?: string
}

export type ApiResponseData = {
  id: number | string
  created_at?: string
  updated_at?: string
  deleted_at?: string
}
