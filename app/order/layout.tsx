import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

    return (
        <>
            <div className="md:flex min-h-screen">
                <OrderSidebar />

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-6 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

                <OrderSummary />
            </div>

            <ToastNotification />
        </>
    )
}