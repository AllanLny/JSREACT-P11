import React, { useEffect, useState } from 'react';
import './Chartuser.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar  ,
  RadarChart,
  PieChart,
  Pie,
  BarChart,
  CartesianGrid,
  Bar,
  Cell,
} from 'recharts';
import ApiService from '../../api/api';

const ChartUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/user\/(\d+)/);

    if (match) {
      const userId = match[1];

      const fetchData = async () => {
        try {
          const userResponse = await ApiService.getUserData(userId);
          setUserData(userResponse);
          console.log(userResponse)
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error.message);
        }
      };

      fetchData();
    }
  }, []); 
  const mapDayToLabel = (day) => {
    const daysMapping = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
    return daysMapping[day] || '';
  };
  const mapKindToLabel = (kind) => {
    const daysMapping = { 1: 'Cardio', 2: 'Energy', 3: 'Endurance', 4: 'Strength', 5: 'Speed', 6: 'Intensity' };
    return daysMapping[kind] || '';
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; 
      return (
        <div className="custom-tooltip">
          <p>{`${data.sessionLength} min`}</p>
        </div>
      );
    }  }

    
  const CustomTooltipRed = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; 
      return (
        <div className="custom-tooltipRed">
          <p>{`${data.kilogram} Kg`}</p>
          <p>{`${data.calories} Kcal`}</p>
        </div>
      );
    }  }


    const score = (userData?.score || userData?.todayScore)*100 ;
    console.log(score)

    const data = [
      {  value: score},
      {  value:  100 - score },
    ];

    
    const COLORS = ['#F00', '#FFFFFF '];
  return (
    <div  className='Charts'>
        <div  className='ChartsTop'>
        <div  className='BarChart'> 
        <p className='TxtBarChart'>Activité quotidienne</p>
        <p className='TxtBarChart2'>⚫Poids (kg) 🔴 Calories brûlées (kCal)</p>
        <BarChart className='BarCharts'
      width={840}
      height={350}
      data={userData?.activity?.sessions || []}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="05 10"  className='Botcharts'/>
      <XAxis dataKey="day" />
      <YAxis/>
      <Tooltip content={<CustomTooltipRed />}/>
      <Bar dataKey="kilogram" fill="#000" minPointSize={5}>
      </Bar>calories
      <Bar dataKey="calories" fill="#F00" minPointSize={10} />
    </BarChart>
        </div>
        </div>
        <div  className='ChartsBottom'>
        <div className='LineChart'>
      <p className='TxtLineChart'>Durée moyenne
    des  <br/>sessions</p>
      <LineChart className='Botcharts'
        width={260}
        height={260}
        data={userData?.averageSessions?.sessions || []}
        margin={{
          top: 90,
          right: 9,
          left: 9,
          bottom: 5
        }}
      >
        <XAxis dataKey="day" tickFormatter={mapDayToLabel} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFd"
          activeDot={{ r: 7}}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
      </div>
      <div className='ChartGraph'>
      <RadarChart className='Botcharts' outerRadius={90} width={260} height={260} data={userData?.performance?.data|| []}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tickFormatter={mapKindToLabel}/>
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar dataKey="value" stroke="#F00" fill="#F00" fillOpacity={0.6} />
      </RadarChart>
      </div>
      <div className='RadialGraph'>
      <p className='TxtPieChart'> <span> {score}% </span>  <br/>de votre objectif</p>
      <PieChart className='Botcharts' width={260} height={260} >
        <Pie
          data={data}
          cx={130}
          cy={130}
          innerRadius={69}
          outerRadius={90}
          fill="#F00"
          paddingAngle={0}
          dataKey="value"
        >
                    {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

      </PieChart>

      </div>

      </div>
        </div>
  );
};

export default ChartUser;