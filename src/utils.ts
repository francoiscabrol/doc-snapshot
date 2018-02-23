export function removeSubStrings(str: string, substrings: string[]): string {
  if (substrings.length === 0) return str
  return removeSubStrings(
    str.split(substrings[0]).join(''),
    substrings.slice(1, substrings.length)
  )
}

export function stringContainsAny(str: string, substrings: string[]): boolean {
  if (substrings.length === 0) return false
  else if (stringContains(str, substrings[0])) return true
  else return stringContainsAny(str, substrings.slice(1, substrings.length))
}

export function stringContains(str: string, substring: string): boolean {
  return str.indexOf(substring) !== -1
}
