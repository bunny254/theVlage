import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https://backend.thevlage.com/api' : 'https://backend.thevlage.com/api'
export const APP_NAME = publicRuntimeConfig.APP_NAME