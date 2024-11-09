export interface RevenueProps {
  label: string;
  revenue: number;
  description: string;
  total: number;
  target: number;
  difference: number;
}

export const revenueData: RevenueProps[] = [
  {
    label: "Jan",
    revenue: 10000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 30000,
    target: 30000,
    difference: 2000,
  },
  {
    label: "Feb",
    revenue: 12000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 33000,
    target: 33000,
    difference: 2000,
  },
  {
    label: "Mar",
    revenue: 10000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 30000,
    target: 30000,
    difference: 2000,
  },
  {
    label: "Apr",
    revenue: 10000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 25000,
    target: 25000,
    difference: 2000,
  },
  {
    label: "May",
    revenue: 20000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 3000,
    target: 3000,
    difference: 2000,
  },
  {
    label: "Jun",
    revenue: 10000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Assumenda unde minus modi sed dolores obcaecati?`,
    total: 30000,
    target: 30000,
    difference: 2000,
  },
];
