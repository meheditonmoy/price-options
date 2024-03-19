import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "John", mathMarks: 85, physicsMarks: 78, chemistryMarks: 90 },
        { id: 2, name: "Emily", mathMarks: 78, physicsMarks: 82, chemistryMarks: 85 },
        { id: 3, name: "Michael", mathMarks: 92, physicsMarks: 88, chemistryMarks: 94 },
        { id: 4, name: "Sophia", mathMarks: 88, physicsMarks: 85, chemistryMarks: 91 },
        { id: 5, name: "William", mathMarks: 75, physicsMarks: 70, chemistryMarks: 78 },
        { id: 6, name: "Olivia", mathMarks: 80, physicsMarks: 76, chemistryMarks: 83 },
        { id: 7, name: "James", mathMarks: 90, physicsMarks: 84, chemistryMarks: 92 },
        { id: 8, name: "Emma", mathMarks: 85, physicsMarks: 80, chemistryMarks: 88 },
        { id: 9, name: "Alexander", mathMarks: 82, physicsMarks: 79, chemistryMarks: 85 },
        { id: 10, name: "Charlotte", mathMarks: 95, physicsMarks: 90, chemistryMarks: 97 }
    ];



    return (
        <div>
            <LChart width={1000} height={400} data={studentMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;