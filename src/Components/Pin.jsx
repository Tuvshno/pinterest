import Navbar from "./Navbar";
import LargePost from './LargePost'

import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


function Pin(props) {

  const params = useParams();

  const [data, setData] = useState(null)

  useEffect(()=> {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api/v1/posts/${params.id}`)
      const items = await res.json()
      setData(items)
    }

    fetchData()
  })

  return (
    <div>
      <Navbar />
      {data ? <LargePost data={data}/> : <div> NOT LOADED YET </div>}
    </div>
  )
}

export default Pin