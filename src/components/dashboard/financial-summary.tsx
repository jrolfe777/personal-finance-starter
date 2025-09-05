'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getFinancialSummaryAction } from '@/app/actions';
import { Bot, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast"

export default function FinancialSummary() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary(null);
    const result = await getFinancialSummaryAction();
    setIsLoading(false);
    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      })
    } else {
      setSummary(result.summary || 'No summary could be generated.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>AI Financial Co-Pilot</CardTitle>
        </div>
        <CardDescription>Get an AI-powered summary of your financial health.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : summary ? (
          <div className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</div>
        ) : (
          <div className="text-center text-sm text-muted-foreground py-8">
            <p>Click the button to generate your personalized financial summary.</p>
          </div>
        )}
        <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating Summary...' : 'Generate AI Summary'}
        </Button>
      </CardContent>
    </Card>
  );
}
