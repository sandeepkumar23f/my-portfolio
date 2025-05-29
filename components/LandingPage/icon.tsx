'use client';

import { LucideCode2, CloudSun, Calculator } from "lucide-react";

export const CodeIcon = (props: React.ComponentProps<'svg'>) => (
  <LucideCode2 {...props} />
);

export const WeatherIcon = (props: React.ComponentProps<'svg'>) => (
  <CloudSun {...props} />
);

export const CalculatorIcon = (props: React.ComponentProps<'svg'>) => (
  <Calculator {...props} />
);
