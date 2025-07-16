"use client";
import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";

export type PromocodeConfig = {
  code: string;
  discount: number;
};

export type PromocodeInputProps = {
  promocodeConfig: PromocodeConfig;
  onChange?: (value: string, isValid: boolean) => void;
  className?: string;
};

export default function PromocodeInput({
  promocodeConfig,
  onChange,
  className = "",
}: PromocodeInputProps) {
  const [promocode, setPromocode] = useState("");
  const [touched, setTouched] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const isValidPromocode =
    promocode.trim().toUpperCase() === promocodeConfig.code;

  useEffect(() => {
    if (onChange) onChange(promocode, isValidPromocode);
    if (isValidPromocode) {
      const timer = setTimeout(() => {
        setShowCheck(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowCheck(false);
    }
  }, [promocode, isValidPromocode, onChange, promocodeConfig.code]);

  return (
    <div
      className={`flex flex-col w-full items-center justify-start gap-2 relative ${className}`}
    >
      <Input
        type="text"
        placeholder="Have a promocode?"
        className="text-sm font-medium text-stone-900 relative focus-none outline-none font-inter"
        value={promocode}
        onChange={(e) => {
          setPromocode(e.target.value.toUpperCase());
          setTouched(true);
        }}
        onBlur={() => setTouched(true)}
        autoCapitalize="characters"
        autoCorrect="off"
        spellCheck={false}
      />
      {promocode && touched && !isValidPromocode && (
        <span className="text-xs text-red-500">Invalid promocode</span>
      )}
      <div className="absolute right-0 flex h-full aspect-square items-center justify-center">
        {showCheck && (
          <Check className="text-green-600" size={16} strokeWidth={2} />
        )}
      </div>
    </div>
  );
}
