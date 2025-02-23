export interface Supply {
    id: number;
    name: string;
    quantity: number;
  }
  
  export interface Club {
    id: number;
    name: string;
    description: string;
    supplies: Supply[]; // Add supplies property
  }
  