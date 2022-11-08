const textSlice = (srt, length) => {
  if (srt.length > length) {
    let string = [...srt]
    let deleted = srt.slice(length).length
    string.splice(length, deleted)
    return string.join("") + "..."
  }
  return srt
}
export default textSlice
