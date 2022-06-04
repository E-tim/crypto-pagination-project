import React from 'react'

const Paginate = ({resPerPage,totalRes, nextPage}) => {

    let pageNumber = [];
    for (let index = 1; index <= Math.ceil(totalRes/resPerPage); index++) {
        pageNumber.push(index);
        
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: '30px 0'}} >
        {
            pageNumber.map( number => {
                return <p key={number} onClick={()=> {nextPage(number)}} className='paginate' >{number}</p>
            } )
        }

    </div>
  )
}

export default Paginate