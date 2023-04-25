import { Box, Grid } from '@mui/material';
import Card from '../Card';
import { Daum } from '../../@types/anime';
import './styles.scss';

interface ReposResultProps {
  data: Daum[];
}

function ReposResult({ data }: ReposResultProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </Grid>
    </Box>

  );
}

export default ReposResult;
