export interface ExpenseType {
  id: number;
  date: string;
  category: string;
  amount: string;
  payment_method: string;
  note: string;
}

export interface incomeType {
  id: number;
  name: string;
  income: number;
}

export interface SpendingsType {
  id: number;
  name: string;
  amount: string;
  date: string;
}

