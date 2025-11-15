import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const patients = [
  {
    id: "PT-001",
    name: "Sarah Johnson",
    age: 34,
    condition: "Recovery",
    department: "Cardiology",
    status: "stable",
    lastVisit: "2024-01-15",
  },
  {
    id: "PT-002",
    name: "Michael Chen",
    age: 45,
    condition: "Treatment",
    department: "Orthopedics",
    status: "monitoring",
    lastVisit: "2024-01-14",
  },
  {
    id: "PT-003",
    name: "Emily Rodriguez",
    age: 28,
    condition: "Post-Surgery",
    department: "Surgery",
    status: "stable",
    lastVisit: "2024-01-15",
  },
  {
    id: "PT-004",
    name: "James Wilson",
    age: 62,
    condition: "ICU",
    department: "Emergency",
    status: "critical",
    lastVisit: "2024-01-15",
  },
  {
    id: "PT-005",
    name: "Lisa Anderson",
    age: 51,
    condition: "Observation",
    department: "Pediatrics",
    status: "stable",
    lastVisit: "2024-01-13",
  },
  {
    id: "PT-006",
    name: "David Kim",
    age: 39,
    condition: "Recovery",
    department: "Cardiology",
    status: "improving",
    lastVisit: "2024-01-12",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "stable":
      return "bg-success/10 text-success border-success/20";
    case "monitoring":
    case "improving":
      return "bg-accent/10 text-accent border-accent/20";
    case "critical":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Patients = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Patient Management</h1>
              <p className="text-muted-foreground mt-1">
                Monitor and manage patient records
              </p>
            </div>
            <Button className="gap-2">
              <UserPlus className="w-4 h-4" />
              Add Patient
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patients.map((patient, index) => (
              <motion.div
                key={patient.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {patient.id} • Age {patient.age}
                      </p>
                    </div>
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Condition:</span>
                      <span className="font-medium">{patient.condition}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium">{patient.department}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Visit:</span>
                      <span className="font-medium">{patient.lastVisit}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Patients;
