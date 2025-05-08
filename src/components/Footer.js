import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography>8 (499) 681-78-10</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography>info@hangar.ru</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography>г. Москва, ул. Примерная, 123</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Навигация
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <MuiLink
                component={Link}
                to="/calculator"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Калькулятор
              </MuiLink>
              <MuiLink
                component={Link}
                to="/portfolio"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Портфолио
              </MuiLink>
              <MuiLink
                component={Link}
                to="/team"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Команда
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contacts"
                color="inherit"
              >
                Контакты
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Режим работы
            </Typography>
            <Typography paragraph>
              ПН-ВС: с 9:00 до 23:00
            </Typography>
            <Typography variant="body2">
              Бесплатно приедем к вам на объект, сделаем точный замер и предложим лучшие варианты постройки
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {currentYear} Ангары. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 