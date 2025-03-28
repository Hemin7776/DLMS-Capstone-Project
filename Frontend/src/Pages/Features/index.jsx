import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FeatureCardWrapper from "../../Components/FeaturesCard/FeaturesCard";
import FeatureImage from "../../assets/featuresss.jpg";
// Assume these icons are imported from a library like react-icons or lucide-react
import {
  Diamond,
  Calendar,
  ChartBar,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Footer from "../../Components/Footer/Footer";

const Features = () => {
  // Feature data array with icons
  const featureData = [
    {
      title: "Diamond Inventory Management",
      icon: <Diamond size={48} className="text-blue-300" />,
      description:
        "Complete control over your diamond collection with our state-of-the-art inventory system.",
      points: [
        "Real-time tracking of diamond stock.",
        "Advanced categorization by size, grade, and type.",
        "Seamless integration with your sales and production workflow.",
        "Automated reordering and stock level alerts.",
      ],
    },
    {
      title: "Workforce Scheduling and Monitoring",
      icon: <Calendar size={48} className="text-green-300" />,
      description:
        "Optimize your workforce efficiency with intelligent scheduling tools.",
      points: [
        "Intuitive scheduling tools for employees.",
        "Real-time attendance tracking and task allocation.",
        "Performance insights for optimized productivity.",
        "Employee skill tracking and optimal assignment algorithms.",
      ],
    },
    {
      title: "Real-time Analytics and Reporting",
      icon: <ChartBar size={48} className="text-purple-300" />,
      description:
        "Make data-driven decisions with comprehensive analytics dashboards.",
      points: [
        "Comprehensive data visualization providing insights into labor efficiency and diamond production trends.",
        "Exportable reports in multiple formats.",
        "Customizable KPI tracking and goal setting.",
        "Predictive analytics for sales forecasting.",
      ],
    },
    {
      title: "Compliance and Payroll Systems",
      icon: <DollarSign size={48} className="text-yellow-300" />,
      description:
        "Streamline financial operations while maintaining legal compliance.",
      points: [
        "Automated payroll calculations with built-in compliance checks.",
        "Detailed employee records for legal and tax purposes.",
        "Integration with existing accounting tools.",
        "Regulatory updates and compliance monitoring.",
      ],
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "This platform revolutionized how we track our diamond inventory. We've seen a 30% increase in operational efficiency.",
      author: "Sarah Johnson",
      company: "Brilliant Gems Co.",
    },
    {
      quote:
        "The workforce management tools helped us optimize our staffing, resulting in significant cost savings and improved productivity.",
      author: "Michael Chen",
      company: "Diamond Crafters International",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[var(--primary-color)] to-[#0a192f] min-h-screen text-white">
        {/* Enhanced Hero Section with Parallax Effect */}
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${FeatureImage})`,
              opacity: 0.4,
            }}
          ></div>
          <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
            <div className="inline-block mb-6 p-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <p className="text-lg font-medium tracking-widest text-blue-300">
                INDUSTRY-LEADING SOLUTION
              </p>
            </div>
            <h1 className="text-7xl font-serif font-bold tracking-wide mb-8">
              Power Your Diamond Business
            </h1>
            <p className="text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
              Our comprehensive diamond industry management solution delivers
              exceptional tools designed specifically to streamline operations,
              maximize efficiency, and increase profitability.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 bg-white text-[var(--primary-color)] text-lg font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center">
                Schedule Demo <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black bg-opacity-30 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <div className="text-center p-6 backdrop-blur-sm bg-white bg-opacity-5 rounded-xl">
              <p className="text-5xl font-bold text-blue-300 mb-2">98%</p>
              <p className="text-xl">Client Retention</p>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white bg-opacity-5 rounded-xl">
              <p className="text-5xl font-bold text-green-300 mb-2">30%</p>
              <p className="text-xl">Efficiency Increase</p>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white bg-opacity-5 rounded-xl">
              <p className="text-5xl font-bold text-purple-300 mb-2">500+</p>
              <p className="text-xl">Business Partners</p>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white bg-opacity-5 rounded-xl">
              <p className="text-5xl font-bold text-yellow-300 mb-2">24/7</p>
              <p className="text-xl">Support Access</p>
            </div>
          </div>
        </div>

        {/* Section Title with Elegant Separator */}
        <div className="relative my-20 text-center">
          <h2 className="text-5xl font-serif tracking-wide mb-6">
            ENTERPRISE-GRADE FEATURES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto px-6">
            Our platform combines cutting-edge technology with industry-specific
            solutions to address the unique challenges of diamond businesses.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="group transform transition-all duration-300 hover:scale-102 backdrop-blur-sm bg-gray bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10 hover:border-opacity-20"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-3xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        size={20}
                        className="text-blue-300 mt-1 mr-3 flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-gradient-to-b from-black to-transparent bg-opacity-40">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-serif mb-6">What Our Clients Say</h3>
              <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-grey bg-opacity-5 p-8 rounded-2xl border border-white border-opacity-10"
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-300 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="py-24 bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-5xl font-serif mb-8">
              Ready to Transform Your Diamond Business?
            </h3>
            <p className="text-xl mb-10 text-gray-300">
              Join industry leaders who have already elevated their operations
              with our comprehensive diamond management platform. Request a
              personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-lg hover:opacity-90 transition-all shadow-lg">
                Request a Demo
              </button>
              <button className="px-12 py-5 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
