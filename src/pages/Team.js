import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      name: 'АЛИНА НАДЕЖКИНА',
      position: 'Директор по развитию',
      description: 'Я отвечаю за финансово-хозяйственную сторону компании и организацию работы ее персонала.',
      image: '/images/team1.jpg',
    },
    {
      name: 'ИЛЬЯ ГОЛУБКОВ',
      position: 'Руководитель отдела продаж',
      description: 'Наша компания выстраивает долгие партнерские отношения с клиентами, поэтому за последний год компания выросла в 2 раза',
      image: '/images/team2.jpg',
    },
    {
      name: 'ЮРИЙ ШУЛЬЖЕНКО',
      position: 'Генеральный директор',
      description: 'Я контролирую работу отдела сопровождения и отвечаю за качественное выполнение наших объектов',
      image: '/images/team3.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Ключевые лица компании
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.position}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Мы ответим на любые ваши вопросы
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </Typography>
      </Box>
    </Container>
  );
};

export default Team; 