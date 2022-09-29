export function captialize(str: string | null): string | null {
  if (str) {
    return str[0].toUpperCase() + str.substring(1)
  }
  return str
}

function desc(a: any, b: any, key: string) {
  let compA: string | number = 0
  let compB: string | number = 0
  if (typeof a[key] === 'string') {
    compA = a[key].toUpperCase() // ignore upper and lowercase
    compB = b[key].toUpperCase() // ignore upper and lowercase
  }
  if (typeof a[key] === 'number') {
    compA = a[key]
    compB = b[key]
  }

  if (compA < compB) {
    return 1
  }
  if (compA > compB) {
    return -1
  }
  // names must be equal
  return 0
}

function asc(a: any, b: any, key: string) {
  let compA: string | number = 0
  let compB: string | number = 0
  if (typeof a[key] === 'string') {
    compA = a[key].toUpperCase() // ignore upper and lowercase
    compB = b[key].toUpperCase() // ignore upper and lowercase
  }
  if (typeof a[key] === 'number') {
    compA = a[key]
    compB = b[key]
  }

  if (compA < compB) {
    return -1
  }
  if (compA > compB) {
    return 1
  }
  // names must be equal
  return 0
}

export function sortObjInArr(arr: any, key: any, isAsc: boolean) {
  const clonedArr = [...arr]
  clonedArr.sort((a: any, b: any) => {
    if (isAsc) {
      return asc(a, b, key)
    } else {
      return desc(a, b, key)
    }
  })
  return clonedArr
}
