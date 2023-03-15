import dotenv from 'dotenv'
dotenv.config()
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? process.env.API_PRODUCTION_URL : process.env.API_LOCAL_URL
export const APP_NAME = publicRuntimeConfig.APP_NAME