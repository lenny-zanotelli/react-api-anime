import {
  CardContent, Card as CardUI, CardMedia, Typography, Grid,
} from '@mui/material';
import { Daum } from '../../@types/anime';

interface CardRepos {
  anime: Daum
}

function Card({ anime }: CardRepos) {
  const desc = anime.synopsis ? anime.synopsis : 'No Description';

  return (
    <Grid item xs={2} sm={4} md={4}>
      <CardUI sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={anime.images.jpg.image_url}
          title={anime.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {anime.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="#2c3e50" gutterBottom>
            {anime.rank}
          </Typography>
          <Typography variant="body2" color="#2c3e50">
            {anime.synopsis?.slice(0, 200)}
            {anime.synopsis && anime.synopsis.length > 200 && '...'}
          </Typography>
        </CardContent>
      </CardUI>
    </Grid>

  );
}

export default Card;
