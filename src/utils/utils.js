import moment from 'moment'

const getInfo = ({ id, first_name, last_name, position, team, positionInfo }) => {
  if (positionInfo) {
    const {pg, sg, sf, pf } = positionInfo

    if (pg || sg || sf || pf) {
      position = createPositionString(positionInfo)
    }
  }

  let name = `${first_name} ${last_name}`
  if (name === 'Shai Gilgeous-Alexander') {
    name = 'S. Gilgeous-Alexander'
  } else if (name === 'Giannis Antetokounmpo') {
    name = 'G. Antetokounmpo'
  }

  return {
    id,
    name,
    position,
    team: team.abbreviation
  }
}

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

const createScheduleURL = (teamIds, dates) => {
  let url = `https://www.balldontlie.io/api/v1/games?seasons[]=2018&per_page=50`
  let teamIdsQuery = ''
  teamIds.forEach((teamId) => {
    teamIdsQuery = teamIdsQuery + `&team_ids[]=${teamId}`
  })
  const startDate = moment(dates.startDate).format('YYYY-MM-DD')
  const endDate = moment(dates.endDate).format('YYYY-MM-DD')
  const datesQuery = `&start_date=${startDate}&end_date=${endDate}`

  return url + teamIdsQuery + datesQuery
}

// Alphabetical sort compare function
const alphabetical = (a,b) => {
  if (a.first_name > b.first_name) {
    return 1
  } else if (a.first_name < b.first_name) {
    return -1
  } else {
    if (a.last_name > b.last_name) {
      return 1
    } else if (a.last_name < b.last_name) {
      return -1
    } else {
      return 0
    }
  }
}

export { getInfo, createPositionString, createScheduleURL, alphabetical }