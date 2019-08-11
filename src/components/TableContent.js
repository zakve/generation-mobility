import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Map from "../assets/img/map.jpg";
import { Paper } from '@material-ui/core';


function TableContent() {
    return (
        <div className="table-contents">
            <Paper elevation={7} className="card">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className="card-img"
                            image="https://images.unsplash.com/photo-1528918387630-6b575e9fe5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1967&q=80"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Why Netherlands?
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I choosed Netherlands quite randomly
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <Paper elevation={7} className="card">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className="card-img"
                            image="https://images.unsplash.com/photo-1509650926597-25eead3b6ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Before flight
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I choosed Netherlands quite randomly
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <Paper elevation={7} className="card">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className="card-img"
                            image="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Arrival
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I choosed Netherlands quite randomly
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <Paper elevation={7} className="card">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className="card-img"
                            image="https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                After return
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I choosed Netherlands quite randomly
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <Paper elevation={7} className="card">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className="card-img"
                            image="https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Summary
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I choosed Netherlands quite randomly
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </div>

    )
}

export default TableContent;