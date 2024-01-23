export type RegistrationCredentialsSection = {
  email: string | null
  mobile_number: string | null
  password: string | null
  password_confirmation: string | null
}

export type RegistrationPersonalInfoSection = {
  first_name: string | null
  middle_name: string | null
  last_name: string | null
  ext_name: string | null
  sex: string | null
  birthday: Date | null
}

export type RegistrationAddressSection = {
  region_id: string | number | null
  province_id: string | number | null
  city_id: string | number | null
  barangay_id: string | number | null
  home_address: string | null
  postal_code: string | null
}

export type RegistrationModel = {
  credentials: RegistrationCredentialsSection | null
  personal_info: RegistrationPersonalInfoSection | null
  address: RegistrationAddressSection | null
}
