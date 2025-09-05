"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Target, Lightbulb } from "lucide-react";
import AddGoalWizard from "./add-goal-wizard";
import type { GoalStrategyOutput } from "@/ai/flows/goal-strategy-flow";

interface Goal {
    name: string;
    targetAmount: number;
    currentAmount: number;
    tip: string;
}

export default function GoalPlannerWidget() {
  const [goal, setGoal] = useState<Goal | null>({
    name: "Home Down Payment",
    targetAmount: 50000,
    currentAmount: 15250,
    tip: "You're spending 20% more on dining out this month. Cutting back could add $150 to your goal!",
  });
  const [strategy, setStrategy] = useState<GoalStrategyOutput | null>(null);
  const [isWizardOpen, setIsWizardOpen] = useState(false);


  const progressPercentage = goal ? (goal.currentAmount / goal.targetAmount) * 100 : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleGoalCreated = (newStrategy: GoalStrategyOutput, name: string) => {
    setStrategy(newStrategy);
    setGoal({
        name: name,
        targetAmount: newStrategy.monthlyContribution * 12, // Simplified for now
        currentAmount: 0,
        tip: newStrategy.tips[0] || "Start contributing to your new goal!"
    });
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle>My Financial Goal</CardTitle>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsWizardOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Goal
              </Button>
          </div>
          <CardDescription>
            {goal ? "Your progress towards your financial objective." : "Set a new goal to get started."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {goal ? (
            <>
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
                  <p className="font-semibold mb-1 flex items-center"><Lightbulb className="mr-2 h-4 w-4" /> Pro Tip:</p>
                  <p>{goal.tip}</p>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-8">
                <p>No active goal.</p>
                <Button variant="link" onClick={() => setIsWizardOpen(true)}>Create one now</Button>
            </div>
          )}
        </CardContent>
      </Card>
      <AddGoalWizard 
        open={isWizardOpen} 
        onOpenChange={setIsWizardOpen}
        onGoalCreated={handleGoalCreated}
      />
    </>
  );
}
