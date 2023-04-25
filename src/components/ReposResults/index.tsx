import { Box, Grid } from '@mui/material';
import Card from '../Card';
import { IRepo } from '../../@types/github';
import './styles.scss';

interface ReposResultProps {
  repos: IRepo[];
}

function ReposResult({ repos }: ReposResultProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {repos.map((repo) => (
          <Card
            key={repo.id}
            repo={repo}
          />
        ))}
      </Grid>
    </Box>

  );
}

export default ReposResult;
