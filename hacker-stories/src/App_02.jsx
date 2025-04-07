function lab () {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlfor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange}/>
    </div>
  )
}
export default lab