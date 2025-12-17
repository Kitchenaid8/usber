import { NotificationToast } from "@/components/NotificationToast";
import { FloatingDots } from "@/components/FloatingDots";
import { PromoCard } from "@/components/PromoCard";

const Index = () => {
  return (
    <>
      <title>$750 Uber Eats Gift Card Reward | MealsPromo</title>
      <meta name="description" content="Claim your $750 Uber Eats gift card reward. Enter your basic info and complete required offers to receive your reward today." />
      
      <div className="min-h-screen bg-background relative flex items-center justify-center py-20 px-4">
        <FloatingDots />
        <NotificationToast />
        
        <main className="relative z-10 w-full">
          <PromoCard />
        </main>
      </div>
    </>
  );
};

export default Index;
