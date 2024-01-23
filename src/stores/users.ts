import { ApiResponseData } from '@/types/http.responses.ts'
import { AddressResponse } from '@/stores/public.ts'

/** Typings */
export interface UserResponse extends ApiResponseData {
  email: string
  active: boolean
  email_verified_at: string
  roles: Array<{ id: string | number; name: string }>
  user_profile?: UserProfileResponse
}

export interface UserProfileResponse extends ApiResponseData {
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
}
