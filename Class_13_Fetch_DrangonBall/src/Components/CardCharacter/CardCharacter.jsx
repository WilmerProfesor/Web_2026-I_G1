import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import BackgroundCard from '../../assets/Background_Card.webp';

const CardCharacter=(props)=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
            component="img"
            // height="140"
            image={props.image}
            // style={{ position: 'relative', top: "100px", zIndex:2, height: 300, objectFit: 'contain', '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s ease-in-out' } }}
            sx={{position: 'relative', top: "300px", zIndex:2, height: 300, paddingTop:"25px", objectFit: 'contain', '&:hover': { transform: 'scale(1.5)', transition: 'transform 0.3s ease-in-out' } }}
            alt={props.name}
            
          />
      {/* <img src={props.image} alt={props.name} style={{ position: 'relative', top: "100px", zIndex:2, height: 300, objectFit: 'contain', &:hover : { transform: 'scale(1.2)', transition: 'transform 0.3s ease-in-out' } }} /> */}
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ zIndex: 0 }}>
        {/*  */}
        
          <CardMedia
            component="img"
            // height="140"
            image={"https://web.dragonball-api.com//images-compress/89980.webp"}
            sx={{ height: 300, paddingTop:"25px", objectFit: 'contain', '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.3s ease-in-out' } }}
            alt={props.name}
            
          />          
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Card>
  );
}

export default CardCharacter;