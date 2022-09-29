import { useEffect, useRef } from 'react'
import _ from 'lodash'

const useDeepEffect = (fnc: Function, watchedState: any) => {
  const localStore = useRef<any>()

  useEffect(() => {
    if (!_.isEqual(localStore.current, watchedState)) {
      localStore.current = watchedState
      fnc()
    }
  }, [fnc, watchedState])
}

export default useDeepEffect
