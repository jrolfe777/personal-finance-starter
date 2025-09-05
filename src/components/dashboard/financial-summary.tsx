'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function FinancialSummary() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Construction className="h-6 w-6 text-primary" />
            <CardTitle>Your Personal Finance Experience Goes Here</CardTitle>
        </div>
        <CardDescription>This is a placeholder for your custom personal finance feature.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-sm text-muted-foreground py-8">
          <p>Ask the agent to replace this component with your feature once you are happy with your PRD and you're ready to implement it.</p>
        </div>
      </CardContent>
    </Card>
  );
}
