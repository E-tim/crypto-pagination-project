import React from 'react'

const Coin = ({res}) => {
  return (
    <div>
        {
            <div className='cryptoData'>
                <div className='subCryptoData' >
                    <img src={res.image} alt='immm' />
                    <p>{res.symbol}</p>
                </div>
                
                  <p>{res.current_price}</p>
                  <p style={{color: `${ res.price_change_percentage_24h < 0 ? 'red' : 'white' }` }} >{res.price_change_percentage_24h.toFixed(2)}</p>
                
            </div>
        }


    </div>
  )
}

export default Coin