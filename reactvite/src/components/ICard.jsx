import React from 'react'
//in this file we are trying to craete an IdCard component which will take data as props and then we will render it in the ICardGallery component
//props are used to pass data from parent component to child component. In this case we are passing data from ICardGallery component to ICard component.
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