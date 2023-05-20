import axios from "axios"

import { BACKEND_API_URL } from "@/utils/constants/env"

const instance = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default instance
