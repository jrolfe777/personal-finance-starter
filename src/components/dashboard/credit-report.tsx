'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MOCK_DATA } from '@/lib/mock-data';

export default function CreditReport() {
  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Health</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold text-primary">{MOCK_DATA.creditScore}</div>
                <div className="text-sm font-medium text-muted-foreground">Fair</div>
            </div>
            <p className="text-xs text-muted-foreground">Based on your credit history</p>
        </CardContent>
    </Card>
  );
}
