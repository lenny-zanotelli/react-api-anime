import {
  Box, Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import './styles.scss';

function ReposResult() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/logo-github.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FreeCodeCamp
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#2c3e50" gutterBottom>
                Hello
              </Typography>
              <Typography variant="body2" color="#2c3e50">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/logo-github.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FreeCodeCamp
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#2c3e50" gutterBottom>
                Hello
              </Typography>
              <Typography variant="body2" color="#2c3e50">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/logo-github.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FreeCodeCamp
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#2c3e50" gutterBottom>
                Hello
              </Typography>
              <Typography variant="body2" color="#2c3e50">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

  );
}

export default ReposResult;
