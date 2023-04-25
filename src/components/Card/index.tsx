import {
  CardContent, Card as CardUI, CardMedia, Typography, Grid,
} from '@mui/material';
import { IRepo } from '../../@types/github';

interface CardRepos {
  repo: IRepo
}

function Card({ repo }: CardRepos) {
  const desc = repo.description ? repo.description : 'No Description';

  return (
    <Grid item xs={2} sm={4} md={4}>
      <CardUI sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={repo.owner.avatar_url}
          title={repo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {repo.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="#2c3e50" gutterBottom>
            {repo.owner.login}
          </Typography>
          <Typography variant="body2" color="#2c3e50">
            {repo.description}
          </Typography>
        </CardContent>
      </CardUI>
    </Grid>

  );
}

export default Card;
