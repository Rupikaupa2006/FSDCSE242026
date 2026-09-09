import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student=[{
        college:'ABES Engineering College',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p0u7YlfT-N408sXI_c3_ESDuTlKja8tEtt8jo3FCNQ&s=10',
        rollNo:'123',
        name:'XYZ',
        branch:'Computer Science',
        year:'3rd yr',
    },
    {
     college:'ABES Engineering College',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p0u7YlfT-N408sXI_c3_ESDuTlKja8tEtt8jo3FCNQ&s=10',
        rollNo:'123',
        name:'PQR',
        branch:'Computer Science',
        year:'3rd yr',
    },
    {
         college:'ABES Engineering College',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p0u7YlfT-N408sXI_c3_ESDuTlKja8tEtt8jo3FCNQ&s=10',
        rollNo:'123',
        name:'ABC',
        branch:'Computer Science',
        year:'3rd yr',
    },
]
  return (
    <div>
       {/*<ICard data={student[0]} /> */}
       {student.map((ele)=>{
         return <ICard data={ele} />
       })}
        {/*<ICard  college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p0u7YlfT-N408sXI_c3_ESDuTlKja8tEtt8jo3FCNQ&s=10" rollNo="939" name="XYZ" branch="Computer Science" year="3rd yr" />
        <ICard  college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p0u7YlfT-N408sXI_c3_ESDuTlKja8tEtt8jo3FCNQ&s=10" rollNo="939" name="AIML" branch="Computer Science" year="3rd yr" />*/}
    </div>  
  )
}

export default ICardGallery