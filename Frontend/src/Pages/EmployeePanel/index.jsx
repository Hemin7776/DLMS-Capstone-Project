import React from "react";
import MainLayout from "../../Components/Adminlayout/AdminLayout";
import WelcomeCard from "../../Components/WelcomeCard/WelcomeCard";
import StatCard from "../../Components/StatCard/Statcard";
import ChartSection from "../../Components/ChartSection/ChartSection";
import Calendar from "../../Components/Calender/Calender";
import EventsSection from "../../Components/EventSection/EventSection";
import ActivityFeed from "../../Components/ActivityFeed/ActivityFeed";
import EmployeepanelLayout from "../../Components/EmployeepanelLayout/Employeepanellayout";

const Employeepanel = () => {
  return (
    <div>
      <EmployeepanelLayout>
        <div className="flex-1 overflow-y-auto p-2 md:p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <WelcomeCard welcomeTitle="Welcome To Employee Managment Dashboard" />

              <h2 className="text-lg font-medium mb-3 mt-4">
                Inventory And Workforce Statistics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <StatCard
                  title="Raw Diamond Stock Tracking"
                  description="Monitor the availability of raw diamonds in real-time to ensure production flow."
                  percentage={85}
                  color="blue"
                  assignments={2}
                />
                <StatCard
                  title="Employee Task Assignment"
                  description="Optimize workforce assignments for cutting, polishing, and certification tasks."
                  percentage={62}
                  color="purple"
                  assignments={3}
                />
                <StatCard
                  title="Certified Diamond Inventory"
                  description="Track certified diamonds ready for sale or export with efficiency."
                  percentage={49}
                  color="orange"
                  assignments={10}
                />
              </div>

              <div className="mt-4 md:mt-6">
                <ChartSection title="Diamond Inventory Trends (Raw vs. Certified over time)" />
              </div>

              <div className="mt-4 md:mt-6">
                <ChartSection title="Workforce Utilization And Task Completion Rate" />
              </div>
            </div>

            {/* Right sidebar/widgets column */}
            <div className="w-full lg:w-72 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="flex-1 lg:flex-none">
                <Calendar />
              </div>
              <div className="flex-1 lg:flex-none">
                <ActivityFeed />
              </div>
              <div className="flex-1 lg:flex-none">
                <EventsSection />
              </div>
            </div>
          </div>
        </div>
      </EmployeepanelLayout>
    </div>
  );
};

export default Employeepanel;
