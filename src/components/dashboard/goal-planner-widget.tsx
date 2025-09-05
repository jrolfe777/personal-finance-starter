"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Target } from "lucide-react";

export default function GoalPlannerWidget() {
  // Mock data for the goal
  const goal = {
    name: "Home Down Payment",
    targetAmount: 50000,
    currentAmount: 15250,
    tip: "You're spending 20% more on dining out this month. Cutting back could add $150 to your goal!",
  };

  const progressPercentage = (goal.currentAmount / goal.targetAmount) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>My Financial Goal</CardTitle>
            </div>
            <Button variant="ghost" size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Goal
            </Button>
        </div>
        <CardDescription>
          Your progress towards your financial objective.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-end mb-1">
            <h4 className="font-semibold text-lg">{goal.name}</h4>
            <p className="text-sm text-muted-foreground font-medium">
              <span className="text-foreground font-bold">{formatCurrency(goal.currentAmount)}</span> / {formatCurrency(goal.targetAmount)}
            </p>
          </div>
          <Progress value={progressPercentage} className="h-3" />
           <p className="text-right text-xs text-muted-foreground mt-1">{progressPercentage.toFixed(1)}% Complete</p>
        </div>

        <div className="bg-accent/30 border-l-4 border-accent text-accent-foreground p-3 rounded-md text-sm">
            <p className="font-semibold mb-1">Pro Tip:</p>
            <p>{goal.tip}</p>
        </div>
      </CardContent>
    </Card>
  );
}
