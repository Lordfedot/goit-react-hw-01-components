import PropTypes from 'prop-types';
import {Section,Board,Stat,Percentage} from './Statistics.styled'
import { getRandomHexColor } from 'components/Utils/RandomColor'
import Box from 'components/Box';

export default function Statistics({stats}) {
    return <Box as="section" width="40%" height="40%" mr="auto" ml="auto" textAlign="center" bg="white">
    <h2>Upload stats</h2>
    <Box as="ul" display="flex" justifyContent="space-between" p="0" >
        {stats.map(stat => {
            return <Stat style={{backgroundColor: getRandomHexColor()}} key = {stat.id}>
            <span>{stat.label}</span>
            <Percentage>{stat.percentage}%</Percentage>
          </Stat>
        })}
    </Box>
  </Box>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}