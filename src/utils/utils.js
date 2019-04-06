import moment from 'moment'

const getInfo = ({ id, first_name, last_name, position, team, positionBools }) => {
  if (positionBools) {
    const {pg, sg, sf, pf } = positionBools

    if (pg || sg || sf || pf) {
      position = createPositionString(positionBools)
    }
  }

  return {
    id,
    name:`${first_name} ${last_name}`,
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

const createScheduleURL = (teamId, dates) => {
  let url = `https://www.balldontlie.io/api/v1/games?seasons[]=2018`
  const teamIdQuery = `&team_ids[]=${teamId}`
  const startDate = moment(dates.startDate).format('YYYY-MM-DD')
  const endDate = moment(dates.endDate).format('YYYY-MM-DD')
  const datesQuery = `&start_date=${startDate}&end_date=${endDate}`

  return url + teamIdQuery + datesQuery
}

export { getInfo, createPositionString, createScheduleURL }