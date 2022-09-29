import useWindowScrollToBottom from './useWindowScrollToBottom'
import { useState } from 'react'
import useDeepEffect from './useDeepEffect'

const updateSubList = (
  list: any | null,
  limit: number,
  cursor: number,
  setCursor: Function,
  resetCursor?: number
) => {
  if (list) {
    let currentCursor = 0
    let _cursor = 0
    if (resetCursor === 0) {
      currentCursor = limit - 1 + resetCursor
      _cursor = resetCursor
    } else {
      currentCursor = limit - 1 + cursor
      _cursor = cursor
    }
    let nextCursor =
      currentCursor < list.length - 1 ? currentCursor + 1 : list.length
    let newArray = []
    for (let i = _cursor; i < nextCursor; i++) {
      newArray.push(list[i])
    }
    setCursor(nextCursor)
    return newArray
  }
  return null
}

export default function useLazyLoading<T>(list: T[] | null, limit: number) {
  const isReachBottom = useWindowScrollToBottom()
  const [subList, setSubLit] = useState<T[]>([])
  const [cursor, setCursor] = useState<number>(0)
  // detect scroll bottom
  useDeepEffect(() => {
    if (list) {
      let resetCursor = 0
      const newArray = updateSubList(
        list,
        limit,
        cursor,
        setCursor,
        resetCursor
      )
      if (newArray) {
        setSubLit([...newArray])
      }
    }
  }, [list])

  useDeepEffect(() => {
    let id = setTimeout(() => {
      if (isReachBottom) {
        const newArray = updateSubList(list, limit, cursor, setCursor)
        if (newArray) {
          setSubLit([...subList, ...newArray])
        }
      }
    }, 300)
    return () => {
      clearTimeout(id)
    }
  }, [isReachBottom, list, limit])
  return subList
}
