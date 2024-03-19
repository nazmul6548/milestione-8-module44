import { LineChart as Lchart, Line , XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarksData = [
        { student: "Student 1", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
        { student: "Student 2", mathMarks: 78, physicsMarks: 82, chemistryMarks: 85 },
        { student: "Student 3", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
        { student: "Student 4", mathMarks: 70, physicsMarks: 65, chemistryMarks: 68 },
        { student: "Student 5", mathMarks: 88, physicsMarks: 85, chemistryMarks: 80 },
        { student: "Student 6", mathMarks: 75, physicsMarks: 70, chemistryMarks: 72 },
        { student: "Student 7", mathMarks: 80, physicsMarks: 75, chemistryMarks: 78 },
        { student: "Student 8", mathMarks: 90, physicsMarks: 85, chemistryMarks: 88 },
        { student: "Student 9", mathMarks: 82, physicsMarks: 80, chemistryMarks: 85 },
        { student: "Student 10", mathMarks: 95, physicsMarks: 92, chemistryMarks: 98 },
      ];

  return (
    <div className=''>
        <Lchart width={1100} height={400} data={studentMarksData}
        >
            <XAxis dataKey="student"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke='red'></Line>
            <Line dataKey="physicsMarks" stroke='blue'></Line>
            <Line dataKey="chemistryMarks" stroke='green'></Line>
        </Lchart>

    </div>
  )
}

export default LineChart