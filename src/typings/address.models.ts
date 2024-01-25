import { ApiResponseData } from '@/typings/http-resources.ts'

/** Typings */
export type RegionResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
} & ApiResponseData

export type ProvinceResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
  region_id: number
  old_name?: string
  income_classification: string
} & ApiResponseData

export type CityResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  province_id: number
  old_name?: string
  income_classification: string
  classification: 'city' | 'municipality'
  city_class?: string
} & ApiResponseData

export type BarangayResponse = {
  code_correspondence: string
  city_id: number
  name: string
} & ApiResponseData

export type AddressResponse = {
  home_address: string | null
  postal_code: string | null
  barangay_id: string | number | null
  city_id: string | number | null
  province_id: string | number | null
  region_id: string | number | null
  barangay: BarangayResponse | null
  city: CityResponse | null
  province: ProvinceResponse | null
  region: RegionResponse | null
} & ApiResponseData
