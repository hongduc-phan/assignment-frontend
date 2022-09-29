import { useEffect, useState } from 'react'

export default function useWindowScrollToBottom() {
  const [isReachBottom, setIsReachBottom] = useState<boolean>(false)
  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight) {
      setIsReachBottom(true)
    } else {
      setIsReachBottom(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return isReachBottom
}
