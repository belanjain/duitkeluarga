export const CATEGORIES = [
  'Operasional',
  'Jajan',
  'Transport',
  'Cicilan',
  'Tabungan Pendidikan',
  'Tabungan Pengeluaran Tahunan',
  'Tabungan Belanja Tahunan',
  'Dana Darurat',
  'Sosial',
  'Qurban'
] as const;

export const METHODS = ['Cash', 'BSI', 'JAGO Rahmah'] as const;

export const SOURCES = ['Iyan', 'Rahmah', 'Together'] as const;

export type Category = (typeof CATEGORIES)[number];
export type Method = (typeof METHODS)[number];
export type Source = (typeof SOURCES)[number];
