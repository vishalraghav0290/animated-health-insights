import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Clock,
} from "lucide-react";

const reportTypes = [
  {
    title: "Patient Admissions Report",
    description: "Detailed breakdown of patient admissions by department and time period",
    icon: FileText,
    lastGenerated: "2 hours ago",
    frequency: "Daily",
  },
  {
    title: "Financial Summary",
    description: "Revenue, expenses, and billing analytics for the current period",
    icon: TrendingUp,
    lastGenerated: "1 day ago",
    frequency: "Weekly",
  },
  {
    title: "Department Performance",
    description: "KPIs and metrics for each department including efficiency ratings",
    icon: BarChart3,
    lastGenerated: "3 hours ago",
    frequency: "Daily",
  },
  {
    title: "Resource Utilization",
    description: "Analysis of bed occupancy, equipment usage, and staff allocation",
    icon: PieChart,
    lastGenerated: "5 hours ago",
    frequency: "Daily",
  },
  {
    title: "Wait Time Analysis",
    description: "Patient wait times across departments with trend analysis",
    icon: Clock,
    lastGenerated: "1 hour ago",
    frequency: "Hourly",
  },
  {
    title: "Monthly Operations",
    description: "Comprehensive overview of all hospital operations and statistics",
    icon: FileSpreadsheet,
    lastGenerated: "2 days ago",
    frequency: "Monthly",
  },
];

const recentReports = [
  {
    name: "January_Admissions_Report.pdf",
    date: "2024-01-15",
    size: "2.4 MB",
    type: "Admissions",
  },
  {
    name: "Weekly_Financial_Summary.xlsx",
    date: "2024-01-14",
    size: "1.8 MB",
    type: "Financial",
  },
  {
    name: "Department_Performance_Q1.pdf",
    date: "2024-01-13",
    size: "3.1 MB",
    type: "Performance",
  },
  {
    name: "Resource_Utilization_Jan.pdf",
    date: "2024-01-12",
    size: "2.7 MB",
    type: "Resources",
  },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground mb-8">
            Generate and download comprehensive hospital reports
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Generate New Report</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportTypes.map((report, index) => (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="p-6 border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                        <report.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {report.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 mt-auto">
                      <span>Last: {report.lastGenerated}</span>
                      <span className="px-2 py-1 rounded-full bg-secondary">
                        {report.frequency}
                      </span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="divide-y divide-border">
                {recentReports.map((report, index) => (
                  <motion.div
                    key={report.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{report.date}</span>
                            <span>•</span>
                            <span>{report.size}</span>
                            <span>•</span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                              {report.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;
