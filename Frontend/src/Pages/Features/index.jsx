import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FeatureCardWrapper from "../../Components/FeaturesCard/FeaturesCard";
import FeatureImage from "../../assets/featuresss.jpg";

const Features = () => {
  // Feature data array
  const featureData = [
    {
      title: "Diamond Inventory Management",
      points: [
        "Real-time tracking of diamond stock.",
        "Advanced categorization by size, grade, and type.",
        "Seamless integration with your sales and production workflow.",
      ],
    },
    {
      title: "Workforce Scheduling and Monitoring",
      points: [
        "Intuitive scheduling tools for employees.",
        "Real-time attendance tracking and task allocation.",
        "Performance insights for optimized productivity.",
      ],
    },
    {
      title: "Real-time Analytics and Reporting",
      points: [
        "Comprehensive data visualization providing insights into labor efficiency and diamond production trends.",
        "Exportable reports in multiple formats.",
      ],
    },
    {
      title: "Compliance",
      points: [
        "Detailed employee records for legal and tax purposes.",
        "Integration with existing accounting tools.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[var(--primary-color)] min-h-screen text-white">
        <div className="relative h-96 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${FeatureImage})`,
              opacity: 0.7,
            }}
          ></div>
        </div>
        <div className="relative my-5 text-center">
          <h1 className="text-4xl font-serif tracking-wide mb-2">FEATURES</h1>
        </div>

        {/* Features grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureData.map((feature, index) => (
              <FeatureCardWrapper
                key={index}
                title={feature.title}
                points={feature.points}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
