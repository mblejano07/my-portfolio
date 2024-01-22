export interface ApiResponse {
  success: boolean
  data?: Array<object> | object
  message?: string
  error_code?: string
}

interface ApiResponseData {
  id: number | string
  created_at: string
  updated_at: string
}

export interface RegionResponse extends ApiResponseData {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
}

export interface ProvinceResponse extends ApiResponseData {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
  region_id: number
  old_name?: string
  income_classification: string
}

export interface CityResponse extends ApiResponseData {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  province_id: number
  old_name?: string
  income_classification: string
  classification: 'city' | 'municipality'
  city_class?: string
}

export interface BarangayResponse extends ApiResponseData {
  code_correspondence: string
  city_id: number
  name: string
}
