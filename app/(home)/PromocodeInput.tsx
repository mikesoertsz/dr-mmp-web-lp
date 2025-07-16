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
        className="text-xs text-stone-500"
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
      <div
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {showCheck && <Check className="h-4 w-4 text-green-600" />}
      </div>
    </div>
  );
}
