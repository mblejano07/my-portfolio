import { ApiResponseData } from '@/typings/http-resources.ts'
import { AddressResponse } from '@/typings/address.models.ts'

/** HTTP Responses (API) */
export type UserResponse = {
  email: string
  active: boolean
  email_verified_at: string
  roles: Array<{ id: string | number; name: string }>
  user_profile?: UserProfileResponse
} & ApiResponseData

export type UserProfileResponse = {
  first_name: string
  last_name: string
  middle_name: string | null
  ext_name: string | null
  mobile_number: string | null
  telephone_number: string | null
  sex: string
  birthday: string
  full_name: string
  profile_picture_url: string
  address: AddressResponse
} & ApiResponseData

/** Client Payloads (SPA) */
export type UserProfilePayload = {
  email: string
  first_name?: string
  last_name?: string
  middle_name: string
  ext_name: string
  mobile_number?: string
  telephone_number?: string
  sex?: 'male' | 'female'
  birthday?: string
  home_address?: string
  barangay_id?: string | number
  city_id?: string | number
  province_id?: string | number
  region_id?: string | number
  postal_code?: string
  profile_picture_path?: string | number
}
