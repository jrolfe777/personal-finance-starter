'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { getCreditReportAction } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast"
import { MOCK_DATA } from '@/lib/mock-data';

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
    <>
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
            <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Credit Health</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-4xl font-bold text-primary">{MOCK_DATA.creditScore}</div>
                        <div className="text-sm font-medium text-muted-foreground">Fair</div>
                    </div>
                    <p className="text-xs text-muted-foreground">Click to view report</p>
                </CardContent>
            </Card>
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
    </>
  );
}
