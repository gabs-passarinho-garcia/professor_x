export const AvengerStatusEnum = {
  Vivo: 'alive',
  Morto: 'dead',
  Aposentado: 'retired',
} as const;

export type AvengerStatusType =
  (typeof AvengerStatusEnum)[keyof typeof AvengerStatusEnum];
