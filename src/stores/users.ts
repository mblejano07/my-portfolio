import { ApiResponseData } from '@/typings/http.ts'
import { AddressResponse } from '@/stores/public.ts'

/** Typings */
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
