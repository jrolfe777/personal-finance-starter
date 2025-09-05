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
          <p>Workshop attendees will replace this component with their feature.</p>
        </div>
      </CardContent>
    </Card>
  );
}
