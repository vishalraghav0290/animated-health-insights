import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "./AnimatedCounter";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: number;
  change: number;
  icon: LucideIcon;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  index: number;
  variant?: "default" | "success" | "warning" | "danger";
}

export const KPICard = ({
  title,
  value,
  change,
  icon: Icon,
  suffix = "",
  prefix = "",
  decimals = 0,
  index,
  variant = "default",
}: KPICardProps) => {
  const isPositive = change >= 0;

  const variantStyles = {
    default: "border-primary/20 hover:border-primary/40",
    success: "border-success/20 hover:border-success/40",
    warning: "border-accent/20 hover:border-accent/40",
    danger: "border-destructive/20 hover:border-destructive/40",
  };

  const iconColors = {
    default: "text-primary",
    success: "text-success",
    warning: "text-accent",
    danger: "text-destructive",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card
        className={cn(
          "p-6 border-2 transition-all duration-300 bg-card/50 backdrop-blur-sm",
          variantStyles[variant]
        )}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="text-3xl font-bold">
              <AnimatedCounter
                value={value}
                suffix={suffix}
                prefix={prefix}
                decimals={decimals}
              />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={cn(
                  "font-medium",
                  isPositive ? "text-success" : "text-destructive"
                )}
              >
                {isPositive ? "+" : ""}
                {change}%
              </motion.span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.1 + 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className={cn(
              "p-3 rounded-xl bg-gradient-to-br",
              variant === "default" && "from-primary/10 to-primary/5",
              variant === "success" && "from-success/10 to-success/5",
              variant === "warning" && "from-accent/10 to-accent/5",
              variant === "danger" && "from-destructive/10 to-destructive/5"
            )}
          >
            <Icon className={cn("w-6 h-6", iconColors[variant])} />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
