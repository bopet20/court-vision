import React from 'react'

const Bench = ({ bench }) => {
  console.log(bench)
  return (
    <div>
      {
        bench.length === 0 ?
        <p>BN</p>
        :
        <div>
          {
            bench.map((player) => (
              <React.Fragment key={`${player.name} ${player.opponentString}`}>
                <p>{`${player.name}, ${player.team}`}</p>
                <p>{player.opponentString}</p>
              </React.Fragment>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Bench