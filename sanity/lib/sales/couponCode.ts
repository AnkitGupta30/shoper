export const COUPON_CODES = {
  FRIDAY: "FRIDAY",
  GOLUMOLU: "GOLUMOLU",
  DL2024: "DL2024",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
