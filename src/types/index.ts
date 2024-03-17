export type ProjectType = {
  id: number;
  client: string;
  role: string;
  year: number | string;
};

export type NavProps = {
  label: React.ReactNode;
  href: string;
  target?: string;
};