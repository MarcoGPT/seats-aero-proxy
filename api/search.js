import axios from 'axios';

export default async function handler(req, res) {
  const { origin, destination, startDate, endDate } = req.query;

  if (!origin || !destination || !startDate || !endDate) {
    return res.status(400).json({ error: 'Parâmetros incompletos' });
  }

  try {
    const response = await axios.get('https://api.seats.aero/availability/search', {
      params: { origin, destination, startDate, endDate },
      headers: {
        'User-Agent': 'SeatsAeroProxy/1.0 (yourdomain.com)'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao consultar Seats.aero:', error.message);
    res.status(500).json({ error: 'Erro na API da Seats.aero' });
  }
}
