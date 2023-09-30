async function Questions() {
  let Data = await fetch('https://med-check.onrender.com/api/questions')
  let AllData = await Data.json()
  return AllData
}
export default Questions()
  
  