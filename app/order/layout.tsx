import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <>
            {/* Mobile: Stack layout, Desktop: Flex layout */}
            <div className="flex flex-col md:flex-row min-h-screen">
                <OrderSidebar />

                {/* Mobile: Full width with padding, Desktop: Flex-1 with scroll */}
                <main className="flex-1 md:h-screen md:overflow-y-scroll 
                               p-4 md:p-6 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

                {/* Mobile: Bottom sheet style, Desktop: Right sidebar */}
                <div className="md:block">
                    <OrderSummary />
                </div>
            </div>

            <ToastNotification />
        </>
    )
}