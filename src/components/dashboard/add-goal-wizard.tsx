"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getGoalStrategyAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import type { GoalStrategyOutput } from "@/ai/flows/goal-strategy-flow";

const formSchema = z.object({
  goalType: z.enum(
    ["SAVE_FOR_PURCHASE", "PAY_OFF_DEBT", "SAVE_FOR_DOWN_PAYMENT"],
    { required_error: "Please select a goal type." }
  ),
  targetAmount: z.coerce.number().positive("Target amount must be positive."),
  targetDate: z.date({
    required_error: "A target date is required.",
  }),
});

type AddGoalFormValues = z.infer<typeof formSchema>;

interface AddGoalWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoalCreated: (strategy: GoalStrategyOutput, name: string) => void;
}

export default function AddGoalWizard({ open, onOpenChange, onGoalCreated }: AddGoalWizardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<AddGoalFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetAmount: 10000,
    },
  });

  const goalTypeNames: Record<AddGoalFormValues["goalType"], string> = {
    SAVE_FOR_PURCHASE: "Save for a Purchase",
    PAY_OFF_DEBT: "Pay Off Debt",
    SAVE_FOR_DOWN_PAYMENT: "Save for a Down Payment",
  };

  async function onSubmit(values: AddGoalFormValues) {
    setIsLoading(true);
    const result = await getGoalStrategyAction({
        ...values,
        targetDate: format(values.targetDate, 'yyyy-MM-dd')
    });
    setIsLoading(false);

    if (result.error) {
        toast({
            variant: "destructive",
            title: "Error Generating Strategy",
            description: result.error,
        });
    } else if (result.strategy) {
        toast({
            title: "Strategy Created!",
            description: `Your plan to ${goalTypeNames[values.goalType].toLowerCase()} is ready.`,
        });
        const goalName = goalTypeNames[values.goalType];
        onGoalCreated(result.strategy, goalName);
        onOpenChange(false);
        form.reset();
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create a New Financial Goal</DialogTitle>
          <DialogDescription>
            Let's create a plan to achieve your next big financial milestone.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <FormField
              control={form.control}
              name="goalType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a goal type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SAVE_FOR_PURCHASE">Save for a Purchase</SelectItem>
                      <SelectItem value="SAVE_FOR_DOWN_PAYMENT">Save for a Down Payment</SelectItem>
                      <SelectItem value="PAY_OFF_DEBT">Pay Off Debt</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">$</span>
                        <Input type="number" placeholder="10000" className="pl-7" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Target Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="animate-spin" />}
                    {isLoading ? "Generating Plan..." : "Create Goal & Strategy"}
                </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
