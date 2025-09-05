'use client';

import { useState, useEffect } from 'react';

interface ClientSideDateProps {
  dateString: string;
}

export default function ClientSideDate({ dateString }: ClientSideDateProps) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (dateString) {
      setFormattedDate(new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }));
    }
  }, [dateString]);

  if (!formattedDate) {
    return <span className="inline-block h-4 w-20 animate-pulse rounded-md bg-muted" />;
  }

  return <>{formattedDate}</>;
}
