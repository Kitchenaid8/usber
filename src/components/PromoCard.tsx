import { ArrowRight, Zap } from "lucide-react";
import { StepItem } from "./StepItem";

const steps = [
  "Click The Button Below",
  "Enter Your Basic Info",
  "Complete Required Offers",
  "Claim Your Reward",
];

export const PromoCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-card rounded-2xl shadow-card overflow-hidden">
        {/* Header */}
        <div className="gradient-card-header py-6 px-8 text-center">
          <h1 className="text-primary-foreground text-2xl font-bold tracking-tight">
            Uber
          </h1>
          <p className="text-primary-foreground text-lg font-semibold -mt-1">
            Eats
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Reward Amount */}
          <div className="text-center mb-8">
            <p className="text-primary text-5xl font-extrabold tracking-tight">
              $750
            </p>
            <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase mt-1">
              Gift Card Reward
            </p>
          </div>

          {/* Steps */}
          <div className="bg-secondary/50 rounded-xl p-5 space-y-4 mb-8">
            {steps.map((step, index) => (
              <StepItem key={index} number={index + 1} text={step} />
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            CLAIM NOW
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <Zap className="w-4 h-4 text-primary fill-primary" />
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold">847</span> people claimed this today
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-muted-foreground text-xs mt-6">
        This is a promotional offer. Terms and conditions apply.
      </p>
    </div>
  );
};
