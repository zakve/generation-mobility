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
                            image={Map}
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
                            image={Map}
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
                            image={Map}
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
                            image={Map}
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
                            image={Map}
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
        </div>

    )
}

export default TableContent;