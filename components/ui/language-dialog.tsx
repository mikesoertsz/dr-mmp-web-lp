"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "./button";
import { Globe } from "lucide-react";
import { useSettingsStore } from "@/lib/store";
import { useState } from "react";

export default function LanguageDialog() {
  const { language, setLanguage } = useSettingsStore();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Select language"
          className="ml-2"
        >
          <Globe className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
          <DialogDescription>
            Choose your preferred language for the site.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button
            variant={language === "EN" ? "default" : "outline"}
            onClick={() => {
              setLanguage("EN");
              setOpen(false);
            }}
            className="w-full"
          >
            English
          </Button>
          <Button
            variant={language === "PT" ? "default" : "outline"}
            onClick={() => {
              setLanguage("PT");
              setOpen(false);
            }}
            className="w-full"
          >
            Portuguese
          </Button>
          <Button
            variant={language === "ES" ? "default" : "outline"}
            onClick={() => {
              setLanguage("ES");
              setOpen(false);
            }}
            className="w-full"
            disabled
          >
            Spanish (coming soon)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
