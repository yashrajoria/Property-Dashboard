import { Box, Typography, Stack } from '@mui/material'
import { PieChartProps } from 'interfaces/home'
import ReactApexChart from "react-apexcharts"
import "./charts.css"

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
    return (
        <Box id="pie-chart">
            <Stack direction='column'>
                <Typography fontSize={14}
                    color="#808191">{title}</Typography>
                <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
                    {value}
                </Typography>
            </Stack>
            <ReactApexChart
                options={{
                    chart: { type: 'donut' },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false }
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </Box>
    )
}

export default PieChart