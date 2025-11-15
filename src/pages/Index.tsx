import { motion } from "framer-motion";
import { KPICard } from "@/components/KPICard";
import { AnimatedChart } from "@/components/AnimatedChart";
import {
  Activity,
  Clock,
  BedDouble,
  HeartPulse,
} from "lucide-react";

// Mock health analytics data
const kpiData = [
  {
    title: "Patient Admissions",
    value: 1247,
    change: 12.5,
    icon: Activity,
    variant: "default" as const,
  },
  {
    title: "Avg Wait Time",
    value: 23.8,
    change: -8.2,
    icon: Clock,
    suffix: " min",
    decimals: 1,
    variant: "success" as const,
  },
  {
    title: "Bed Occupancy",
    value: 87.3,
    change: 3.1,
    icon: BedDouble,
    suffix: "%",
    decimals: 1,
    variant: "warning" as const,
  },
  {
    title: "Patient Satisfaction",
    value: 94.2,
    change: 5.7,
    icon: HeartPulse,
    suffix: "%",
    decimals: 1,
    variant: "success" as const,
  },
];

const dailyAdmissionsData = [
  { name: "Mon", value: 186 },
  { name: "Tue", value: 205 },
  { name: "Wed", value: 178 },
  { name: "Thu", value: 192 },
  { name: "Fri", value: 201 },
  { name: "Sat", value: 145 },
  { name: "Sun", value: 140 },
];

const weeklyTrendsData = [
  { name: "Week 1", value: 1120, value2: 1050 },
  { name: "Week 2", value: 1180, value2: 1100 },
  { name: "Week 3", value: 1150, value2: 1080 },
  { name: "Week 4", value: 1247, value2: 1200 },
];

const departmentData = [
  { name: "Emergency", value: 312 },
  { name: "Surgery", value: 245 },
  { name: "Cardiology", value: 198 },
  { name: "Pediatrics", value: 176 },
  { name: "Orthopedics", value: 154 },
  { name: "Other", value: 162 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Health Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time insights into patient care and hospital operations
          </p>
        </motion.header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={kpi.title}
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              icon={kpi.icon}
              suffix={kpi.suffix}
              decimals={kpi.decimals}
              index={index}
              variant={kpi.variant}
            />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <AnimatedChart
            title="Daily Patient Admissions"
            data={dailyAdmissionsData}
            type="bar"
            index={0}
          />
          <AnimatedChart
            title="Weekly Trends (Current vs Previous)"
            data={weeklyTrendsData}
            type="line"
            index={1}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <AnimatedChart
            title="Admissions by Department"
            data={departmentData}
            type="area"
            index={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
