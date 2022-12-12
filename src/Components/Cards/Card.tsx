import { Paper, Box } from '@mui/material';
import { FC, useMemo } from 'react';

interface ICardProps {
}

const Card: FC<ICardProps> = (props) => {
  const tableCard =useMemo(()=>(
    <table>
      <thead></thead>
      <tbody>
        
      </tbody>
    </table>
  ),[])
  return <Paper elevation={3}>
    <Box className='card-header'></Box>
    <Box>
      {tableCard}
    </Box>

  </Paper>;
};

export default Card;
