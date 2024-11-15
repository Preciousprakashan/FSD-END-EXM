
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid2 } from '@mui/material'; // Added CardActions and Button here
import React, { useState, useEffect } from 'react';

import './Home.css'; // Ensure the CSS file is imported
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Addtodo from '../Add/Add';


function Home() {
    const [todo, setTodo] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:4002').then((res) => {
            setTodo(res.data);
        });
    }, []);




    const handleDelete = (id) => {
        axios.delete('http://localhost:4002/delete/' + id) 
            .then(() => {
                navigate('/');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error deleting data', error);
            });
    };



    const handleEdit = (id) => {
        axios.get('http://localhost:4002/edit/' + id)
            .then((response) => {
                const basicData = response.data;

                navigate('/', { state: { basicData } });
            })
            .catch((error) => {
                console.error('Error fetching data for edit:', error);
            });
    };

    return (
        <>
        <Typography
            variant="h5"
            sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                fontWeight: 400,
                marginBottom: 2,
                marginTop: '80px',
                '::before': {
                    content: '""',
                    flexGrow: 1,
                    marginRight: '16px',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                },
                '::after': {
                    content: '""',
                    flexGrow: 1,
                    marginLeft: '16px',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                }
            }}
        >
            ADD Todo List
        </Typography>
<Addtodo/>
            <Typography
                variant="h5"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: 400,
                    marginBottom: 2,
                    marginTop: '80px',
                    '::before': {
                        content: '""',
                        flexGrow: 1,
                        marginRight: '16px',
                        borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                    },
                    '::after': {
                        content: '""',
                        flexGrow: 1,
                        marginLeft: '16px',
                        borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                    }
                }}
            >
                Todo List
            </Typography>

            <Grid2 justifyContent="flex-start" container spacing={5} sx={{ padding: 2 }}>
                {todo.map((data) => (
                    <Grid2 item xs={12} sm={6} md={4}>



                        <Card sx={{ width: 300, height: 'auto' }}>

                                <CardContent>
                                    Todo:
                                    <Typography component="div" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                                        {data.data}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {data.status}
                                    </Typography>
                                </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleEdit(data._id)}>
                                    edit
                                </Button>
                                <Button size="small" color="primary" onClick={() => handleDelete(data._id)}>
                                    delete
                                </Button>
                            </CardActions>
                        </Card>



                    </Grid2>
                ))}
            </Grid2 >

            <Typography
                variant="h5"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: 400,
                    marginBottom: 2,
                    marginTop: '80px',
                    '::before': {
                        content: '""',
                        flexGrow: 1,
                        marginRight: '16px',
                        borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                    },
                    '::after': {
                        content: '""',
                        flexGrow: 1,
                        marginLeft: '16px',
                        borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                    }
                }}
            >
                Completed List
            </Typography>

        </>
    );
}

export default Home;
