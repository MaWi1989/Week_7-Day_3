const seasonSearch = document.querySelector("#season")
const roundSearch = document.querySelector("#round")
const standings = document.querySelector("#submit-button")

console.log(seasonSearch.value, roundSearch.value)

const getData = async (season, round) => {

  try {

  const apiUrl = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`
  
 
  let response = await axios.get(apiUrl)
  console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
  showData(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)

  return (response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
} catch(error){
  console.error(error)
}}




const form = document.getElementById('input-form')

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const season = event.target.season.value
    const round = event.target.round.value
    console.log(season, round)
    getData(season, round)
})



  function showData(data) {
    
    const tableRow = document.querySelector('.tabledata') 
    console.log(tableRow)


    const clearData = () => {
      tableRow.innerHTML = ''
    }
  
    form.addEventListener('reset', (event)=> {
      event.preventDefault();
      clearData()
  })

      for (let i = 0; i < 7; i++){
      const row =  `<tr>
      <td>${data[i].position}</td>
      <td>${data[i].Driver.givenName + ' ' + data[i].Driver.familyName}</td>
      <td>${data[i].Driver.nationality}</td>
      <td>${data[i].Constructors[0].name}</td>
      <td>${data[i].points}</td>
      </tr>
    `
  
      tableRow.innerHTML += row
    
        

       
    } 

}

   