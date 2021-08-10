import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from './images/apple.png';
import image2 from './images/binance.PNG';
import image3 from './images/goldmansachs.PNG';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div style={{marginLeft: 20, marginTop: 50}}>
      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia 
              component="img"
              alt="Apple"
              height="90"
              src= {image}
              title="Apple"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Apple
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Data Engineer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Oracle
            </Button>
            <Button size="small" color="primary">
              HDFS
            </Button>
            <Button size="small" color="primary">
              hive
            </Button>
            <Button size="small" color="primary">
              Spark
            </Button>
            <Button size="small" color="primary">
              yarn
            </Button>
          </CardActions>
      </Card>
      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia 
              component="img"
              alt="Apple"
              height="90"
              src= {image2}
              title="Apple"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Binance
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Backend Service Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Spring
            </Button>
            <Button size="small" color="primary">
              Java
            </Button>
          </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia 
            component="img"
            alt="Apple"
            height="90"
            src= {image3}
            title="Apple"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Goldman Sachs
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Full Stack Developer (Data Modeling)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Analytics
          </Button>
          <Button size="small" color="primary">
            UDB
          </Button>
          <Button size="small" color="primary">
            ORM
          </Button>
          <Button size="small" color="primary">
            Apache
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
