export interface ApiResult<T> {
  code: string
  message: string
  data: T | null
}

export interface JwtResponseDto {
  accessToken: string
}
