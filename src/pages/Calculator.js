import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Calculator = () => {
  const [formData, setFormData] = useState({
    width: '',
    length: '',
    height: '',
    type: '',
    gates: '',
    windows: '',
    roof: '',
    additional: {
      automation: false,
      drainage: false,
      electricity: false,
      shelves: false,
      protectiveCoating: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      additional: {
        ...prev.additional,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Калькулятор стоимости ангара
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Габариты
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Ширина, мм"
                name="width"
                type="number"
                value={formData.width}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Длина, мм"
                name="length"
                type="number"
                value={formData.length}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Высота, мм"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Тип здания
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Тип здания</InputLabel>
                <Select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="garage">Гараж</MenuItem>
                  <MenuItem value="hangar">Ангар</MenuItem>
                  <MenuItem value="carwash">Автомойка</MenuItem>
                  <MenuItem value="barn">Коровник</MenuItem>
                  <MenuItem value="shop">Магазин</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Количество ворот</InputLabel>
                <Select
                  name="gates"
                  value={formData.gates}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="1">Один (одни ворота)</MenuItem>
                  <MenuItem value="2">Два (двое ворот)</MenuItem>
                  <MenuItem value="3">Три (трое ворот)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Окна</InputLabel>
                <Select
                  name="windows"
                  value={formData.windows}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="none">Без окон</MenuItem>
                  <MenuItem value="showcase">Витрина</MenuItem>
                  <MenuItem value="2">Два окна</MenuItem>
                  <MenuItem value="3">Три окна</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Тип кровли</InputLabel>
                <Select
                  name="roof"
                  value={formData.roof}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="back">Скат назад</MenuItem>
                  <MenuItem value="double">Двускатная</MenuItem>
                  <MenuItem value="side">Скат набок</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Дополнительные услуги
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additional.automation}
                    onChange={handleCheckboxChange}
                    name="automation"
                  />
                }
                label="Автоматика для ворот"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additional.drainage}
                    onChange={handleCheckboxChange}
                    name="drainage"
                  />
                }
                label="Водосток"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additional.electricity}
                    onChange={handleCheckboxChange}
                    name="electricity"
                  />
                }
                label="Электрика и свет"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additional.shelves}
                    onChange={handleCheckboxChange}
                    name="shelves"
                  />
                }
                label="Стеллажи"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additional.protectiveCoating}
                    onChange={handleCheckboxChange}
                    name="protectiveCoating"
                  />
                }
                label="Защитная эмаль"
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Рассчитать стоимость
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Calculator; 