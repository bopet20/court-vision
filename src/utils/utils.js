const createPositionString = ({ pg, sg, sf, pf, c }) => {
  let position = ''
  if (pg) {
    position = position + 'PG-'
  }
  if (sg) {
    position = position + 'SG-'
  }
  if (sf) {
    position = position + 'SF-'
  }
  if (pf) {
    position = position + 'PF-'
  }
  if (c) {
    position = position + 'C'
  }
  return position
}

export { createPositionString }