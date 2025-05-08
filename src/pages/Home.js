import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Home = () => {
  const features = [
    {
      title: 'Проектирование',
      description: 'Проектируем с соблюдением всех норм и правил',
      image: '/images/design.jpg',
    },
    {
      title: 'Строительство',
      description: 'Строим ангары из сэндвич-панелей от 15 тыс. руб/м²',
      image: '/images/construction.jpg',
    },
    {
      title: 'Документация',
      description: 'Предоставляем всю необходимую документацию',
      image: '/images/documentation.jpg',
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Произведем и построим
            <br />
            Ангар из сэндвич-панелей
            <br />
            от 15 тыс. руб/м²
          </Typography>
          <Typography variant="h5" gutterBottom>
            Предоставляем всю документацию и работаем по договору
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Рассчитать стоимость
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Наши преимущества
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} sm={6} md={4}>
              <FeatureCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Хотите получить расчет стоимости?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Оставьте заявку, и мы свяжемся с вами в течение 10 минут
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
            >
              Оставить заявку
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 