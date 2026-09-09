import React from 'react'

function ICard({data}) {
  return (
    <div style={{ border:'10px solid plum',height:'400px',width:'400px'}}>
      <h2>College:{data.college}</h2>
      <div>
        <img src={data.pic} height="200" width="200" />
      </div>
      <h2>Roll No:{data.rollNo}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <h2>Year:{data.year}</h2>
    </div>
  )
}

export default ICard