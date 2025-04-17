const FeatureCardWrapper = ({ title, points }) => {
    return (
      <div className="bg-white rounded-lg h-[250px] p-6 text-gray-800">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        {points.map((point, index) => (
          <p 
            key={index} 
            className={`text-sm ${index !== points.length - 1 ? 'mb-2' : ''}`}
          >
            {point}
          </p>
        ))}
      </div>
    );
  };
  
  export default FeatureCardWrapper;