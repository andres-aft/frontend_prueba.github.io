import {useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { BASE_URL } from '../../utils/constants/sharedConstants';

const TramosCliente = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async (startDate, endDate) => {
      const response = await fetch(`${BASE_URL}tramos-cliente`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fechainicial: startDate,
          fechafinal: endDate
        }),
      });
      return response.json();
  };

  const handleSearch = async () => {
    if (startDate && endDate) {
      const data = await fetchData(dayjs(startDate).format('YYYY-MM-DD'), dayjs(endDate).format('YYYY-MM-DD'));
      setData(data);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full min-h-screen p-4 flex flex-col gap-4">
        <div className="w-full">
            <Typography variant='h6'>Tramos Cliente</Typography>
        </div>
        <div className="w-full flex flex-row gap-4">
          <DatePicker label="Start Date"  value={startDate} onChange={(newValue) => setStartDate(newValue)}/>
          <DatePicker label="End Date" value={endDate} onChange={(newValue) => setEndDate(newValue)}/>
          <div className='flex flex-col justify-center items-center'>
            <IconButton aria-label="search" onClick={() => handleSearch()} disabled={!startDate || !endDate  }>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        {!!data.length && (
          <div className="w-full">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Linea (100g serving)</TableCell>
                    <TableCell align="right">Tipo Consumo</TableCell>
                    <TableCell align="right">Perdidas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Linea}
                      </TableCell>
                      <TableCell align="right">{row.TipoConsumo}</TableCell>
                      <TableCell align="right">{row.Perdidas}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}

export default TramosCliente;