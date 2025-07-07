import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const promoSchema = z.object({
  promoCode: z.string().min(1, "Promo code is required"),
});

type PromoFormProps = {
  onValid: (discount: number) => void;
  onInvalid: () => void;
  isPromoValid: boolean;
  showPromoError: boolean;
};

const validPromoCodes: Record<string, number> = {
  CENTURY2125: 25, // 25% discount
  SPRINGSALE: 15, // 15% discount
  WELCOME10: 10, // 10% discount
};

export default function PromoCodeForm({
  onValid,
  onInvalid,
  isPromoValid,
  showPromoError,
}: PromoFormProps) {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<z.infer<typeof promoSchema>>({
    defaultValues: { promoCode: "" },
    mode: "onChange",
  });

  const promoCode = watch("promoCode");

  useEffect(() => {
    if (!promoCode) {
      onInvalid();
      return;
    }
    const discount = validPromoCodes[promoCode];
    if (discount) {
      clearErrors("promoCode");
      onValid(discount);
    } else {
      setError("promoCode", {
        type: "manual",
        message: "Invalid promo code. Please try again.",
      });
      onInvalid();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promoCode]);

  const inputClassName = clsx("flex-1", {
    "border-green-500 bg-green-50": isPromoValid,
    "border-red-500/20 bg-red-50/10": showPromoError || errors.promoCode,
  });

  return (
    <div className="mt-8">
      <Label
        htmlFor="promo-code"
        className="text-xs font-medium text-stone-600"
      >
        Promo Code
      </Label>
      <div className="flex mt-1">
        <Input
          id="promo-code"
          type="text"
          placeholder="Enter promo code"
          {...register("promoCode")}
          className={inputClassName}
          autoComplete="off"
        />
      </div>
      {showPromoError && (
        <p className="text-sm text-red-600 mt-1">
          Invalid promo code. Please try again.
        </p>
      )}
      {isPromoValid && (
        <p className="text-sm text-green-600 mt-1">
          ✓ Promo code applied successfully!
        </p>
      )}
    </div>
  );
}
