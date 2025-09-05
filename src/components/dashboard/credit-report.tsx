'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { getCreditReportAction } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast"
import { MOCK_DATA } from '@/lib/mock-data';
import { Badge } from '../ui/badge';

export default function CreditReport() {
  const [report, setReport] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerateReport = async () => {
    setIsLoading(true);
    setReport(null);
    const result = await getCreditReportAction();
    setIsLoading(false);
    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      })
    } else {
      setReport(result.report || 'No report could be generated.');
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (open && !report) {
      handleGenerateReport();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Health</CardTitle>
        <CardDescription>An overview of your credit standing.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-6xl font-bold text-primary">{MOCK_DATA.creditScore}</div>
        <div className="text-lg font-medium text-muted-foreground">Excellent</div>
        <p className="text-xs text-muted-foreground mt-1">Last updated today</p>
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button className="mt-6 w-full">View AI-Generated Report</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>AI-Generated Credit Report</DialogTitle>
              <DialogDescription>
                An easy-to-understand summary of your credit history.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 max-h-[60vh] overflow-y-auto pr-2">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[85%]" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[95%]" />
                </div>
              ) : (
                <div className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                  {report}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
