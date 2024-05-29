import { useEffect, useState } from 'react'

let isAfterSsrGlobal = false

export const isServer = typeof window === 'undefined'
export const isClient = !isServer
export const useIsAfterSsr = () => {
  const [isAfterSsr, setIsAfterSsr] = useState(isAfterSsrGlobal)
  useEffect(() => {
    if (!isAfterSsr) {
      setIsAfterSsr(true)
      isAfterSsrGlobal = true
    }
  }, [isAfterSsr])
  return isAfterSsr
}
export const ClientOnly = ({ children }: { children: () => React.ReactNode }) => {
  const isAfterSsr = useIsAfterSsr()
  return isAfterSsr ? children() : null
}
