import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio } from 'react-loader-spinner';



const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data  => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setPhones(phoneWithFakeData)
                setLoding(false)
            });
    }, [])
    return (
        <div>
            {loding && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={800} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;