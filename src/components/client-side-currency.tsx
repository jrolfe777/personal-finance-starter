'use client';

import { useState, useEffect } from 'react';

interface ClientSideCurrencyProps {
  value: number;
}

export default function ClientSideCurrency({ value }: ClientSideCurrencyProps) {
  const [formattedValue, setFormattedValue] = useState('');

  useEffect(() => {
    const formatCurrency = (val: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(val);
    };
    setFormattedValue(formatCurrency(value));
  }, [value]);

  if (!formattedValue) {
    return (
        <span className="inline-block h-6 w-24 animate-pulse rounded-md bg-muted" />
    );
  }

  return <>{formattedValue}</>;
}
