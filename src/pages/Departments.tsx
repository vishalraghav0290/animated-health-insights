import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { KPICard } from "@/components/KPICard";
import { AnimatedChart } from "@/components/AnimatedChart";
import {
  Activity,
  Users,
  BedDouble,
  Clock,
  Heart,
  Stethoscope,
  Ambulance,
  Baby,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const departmentStats = [
  {
    name: "Emergency",
    icon: Ambulance,
    patients: 312,
    capacity: 85,
    avgWait: 18,
    change: 8.5,
  },
  {
    name: "Cardiology",
    icon: Heart,
    patients: 198,
    capacity: 72,
    avgWait: 25,
    change: -3.2,
  },
  {
    name: "Surgery",
    icon: Activity,
    patients: 245,
    capacity: 92,
    avgWait: 45,
    change: 12.1,
  },
  {
    name: "Pediatrics",
    icon: Baby,
    patients: 176,
    capacity: 68,
    avgWait: 15,
    change: 5.8,
  },
];

const staffingData = [
  { name: "Emergency", value: 45 },
  { name: "Cardiology", value: 32 },
  { name: "Surgery", value: 38 },
  { name: "Pediatrics", value: 28 },
  { name: "Orthopedics", value: 25 },
];

const utilizationData = [
  { name: "Mon", value: 78 },
  { name: "Tue", value: 85 },
  { name: "Wed", value: 82 },
  { name: "Thu", value: 88 },
  { name: "Fri", value: 92 },
  { name: "Sat", value: 75 },
  { name: "Sun", value: 68 },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Department Overview</h1>
          <p className="text-muted-foreground mb-8">
            Real-time metrics across all hospital departments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {departmentStats.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                      <dept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{dept.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-sm text-muted-foreground">
                          Patients
                        </span>
                        <span className="text-2xl font-bold">
                          {dept.patients}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span
                          className={
                            dept.change > 0 ? "text-success" : "text-destructive"
                          }
                        >
                          {dept.change > 0 ? "+" : ""}
                          {dept.change}%
                        </span>{" "}
                        vs last week
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium">{dept.capacity}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Avg Wait</span>
                        <span className="font-medium">{dept.avgWait} min</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatedChart
              title="Staff Distribution by Department"
              data={staffingData}
              type="bar"
              index={0}
            />
            <AnimatedChart
              title="Weekly Bed Utilization Rate"
              data={utilizationData}
              type="area"
              index={1}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Departments;
