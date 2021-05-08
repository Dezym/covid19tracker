import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import { style } from '@material-ui/system';
import CountUp from 'react-countup';
import cx from 'classnames';

export const Cards =( {data : {confirmed,recovered,deaths,lastUpdate}})=>{
  if(!confirmed){
      return 'Loading...'
  }
    return (
        <div>
            <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number Of Active Case</Typography>

                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recover</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number Of Active Case</Typography>

                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number Of Active Case</Typography>

                    </CardContent>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
export default Cards;