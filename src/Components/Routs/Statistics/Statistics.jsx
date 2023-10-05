

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { GetLocalStrageData } from '../Utlity/Utlity';
import { useEffect, useState } from 'react';

const Statistics = () => {
    const [pre, setpre] = useState(0);
    const [current, setcurrent] = useState(0);
    const totalcard = GetLocalStrageData();
    useEffect(() => {
        const cardlength = ((totalcard.length / 12) * 100).toFixed(2);
        const currentvalue = parseFloat(cardlength);
        setcurrent(currentvalue);
        const prevalue = 100 - currentvalue;
        setpre(prevalue)

    }, [totalcard])

    const data = [
        { value: pre, label: 'Total donation' },
        { value: current, label: 'Your donation' },
    ];

    const size = {
        width: 350,
        height: 350,
    };
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
                <PieChart
                    series={[
                        {
                            arcLabel: (item) => `${item.value}%`,
                            arcLabelMinAngle: 5,
                            data,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontWeight: 'bold',
                        },
                    }}
                    {...size}
                />

            </div>
            <div>
            </div>
            <h2 className='text-center text-2xl -ml-16 font-bold'>Chart bar</h2>
        </div>
    );
};

export default Statistics;