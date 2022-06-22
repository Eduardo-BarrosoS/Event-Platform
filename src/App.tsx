import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
   query {
    lessons {
      Id
      title
    }
   }
`

function App() {

  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data)
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  return (
    <>
      <h2 className="text-3xl text-amber-500 mt-10 ml-10">Hello World</h2>
    </>
  )
}

export default App
