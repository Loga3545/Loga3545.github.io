import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      title: 'Ангар с автомойкой',
      location: 'с. Немчиновка, Московская обл.',
      area: '1500 м²',
      dimensions: '71,0х21,0х7,0',
      color: 'RAL 9005/9010',
      image: '/images/portfolio1.jpg',
    },
    {
      title: 'Ангар из сэндвич панелей',
      location: 'СНТ Порзлово, Ленинградская обл.',
      dimensions: '15,0х30,0х6,0',
      color: 'RAL 7004',
      image: '/images/portfolio2.jpg',
    },
    {
      title: 'Промышленный комплекс',
      location: 'п. Щеглово, Ленинградская обл.',
      area: '300 м²',
      color: 'RAL 7004',
      image: '/images/portfolio3.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Наши проекты
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.location}
                </Typography>
                {project.area && (
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Площадь: {project.area}
                  </Typography>
                )}
                {project.dimensions && (
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Размеры: {project.dimensions}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  Цвет: {project.color}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Получить консультацию
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio; 