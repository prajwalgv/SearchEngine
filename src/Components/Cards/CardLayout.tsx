import { FC } from 'react';
import { Grid } from '@mui/material';
import Card from './Card';

interface ICardLayoutProps {
    selected?:any;
}

const CardLayout: FC<ICardLayoutProps> = (props) => {
    return <Grid container md={12} spacing={3}>
        <Grid item md={6}>
            <Card></Card>
        </Grid>
        <Grid item md={4}></Grid>
    </Grid>;
};

export default CardLayout;
