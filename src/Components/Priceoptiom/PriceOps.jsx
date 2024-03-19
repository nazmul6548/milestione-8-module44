import PriceOption from "../proption/PriceOption";


export const PriceOp = () => {
  const gyms = [
    {
      id: 1,
      name: "FitZone Gym",
      location: "123 Main Street, Cityville",
      contact: "+1 123-456-7890",
      facilities: ["Cardio Area", "Weightlifting Area", "Group Classes"],
      membershipFee: "$50/month",
      feather: "Eagle",
    },
    {
      id: 2,
      name: "MuscleMax Fitness",
      location: "456 Elm Street, Townsville",
      contact: "+1 987-654-3210",
      facilities: ["Cardio Machines", "Free Weights", "Swimming Pool"],
      membershipFee: "$60/month",
      feather: "Lion",
    },
    {
      id: 3,
      name: "PowerGym",
      location: "789 Oak Street, Villageland",
      contact: "+1 555-123-4567",
      facilities: ["Strength Training", "Yoga Studio", "Spin Classes"],
      membershipFee: "$55/month",
      feather: "Hawk",
    },
    {
      id: 4,
      name: "Flex Fitness Center",
      location: "321 Pine Street, Hamletville",
      contact: "+1 777-987-6543",
      facilities: ["Boxing Ring", "CrossFit Area","Walking", "Functional Training"],
      membershipFee: "$70/month",
      feather: "Tiger",
    },

    {
      id: 5,
      name: "IronBody Gym",
      location: "567 Oak Avenue, Riverside",
      contact: "+1 888-555-1234",
      facilities: ["Sauna", "Nutrition Counseling", "Personal Training"],
      membershipFee: "$65/month",
      feather: "Bear",
    },
    {
      id: 6,
      name: "Zenith Fitness Club",
      location: "890 Cedar Lane, Mountainside",
      contact: "+1 999-333-4444",
      facilities: ["Pilates Studio", "Massage Therapy", "Indoor Track"],
      membershipFee: "$75/month",
      feather: "Phoenix",
    },
  
  ];
  
  
  return (
    <div className="m-12">
        <h1 className="text-center font-bold text-5xl p-5">Best prices in the town</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
       
       {
         
         gyms.map (option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
       
        
        </div>

    
    </div>
  )
}

export default PriceOp;