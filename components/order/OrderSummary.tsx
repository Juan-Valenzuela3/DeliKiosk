"use client"
import { useMemo } from "react"
import { toast } from 'react-toastify'
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const clearOrder = useStore((state) => state.clearOrder)
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])


  const handleCreateOrder = async (formData: FormData) => {
      const data = {
        name: formData.get('name'),
        total,
        order
      }

      const result = OrderSchema.safeParse(data)
      if(!result.success) {
        result.error.issues.forEach((issue) => {
          toast.error(issue.message)
        })
        return
      }

      const response = await createOrder(data)
      if(response?.errors) {
        response.errors.forEach((issue) => {
          toast.error(issue.message)
        })
      }

      toast.success('Pedido Realizado Correctamente')
      clearOrder()
  }

  return (
    <aside className="
      /* Mobile: Fixed bottom sheet */
      fixed md:static bottom-0 left-0 right-0 z-50 md:z-auto
      max-h-[70vh] md:max-h-none md:h-screen
      
      /* Desktop: Right sidebar */
      md:w-64 lg:w-96 
      
      /* Styling */
      glass-effect border-t md:border-t-0 md:border-l border-white/20
      rounded-t-3xl md:rounded-none
      
      /* Scrolling */
      overflow-y-auto md:overflow-y-scroll
      
      /* Padding */
      p-4 md:p-6
      
      /* Show/hide based on order content on mobile */
      ${order.length === 0 ? 'translate-y-full md:translate-y-0' : 'translate-y-0'}
      transition-transform duration-300 ease-in-out
      
      /* Mobile touch improvements */
      touch-pan-y md:touch-auto
    ">
        {/* Mobile: Drag handle */}
        <div className="md:hidden w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        
        <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                Mi Pedido
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {order.length === 0 ? (
            <div className="text-center my-8 md:my-20">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <p className="text-gray-500 text-base md:text-lg">Tu pedido está vacío</p>
                <p className="text-gray-400 text-sm mt-2">Agrega algunos productos para comenzar</p>
            </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4 max-h-40 md:max-h-96 overflow-y-auto">
                  {order.map(item => (
                      <ProductDetails
                          key={item.id}
                          item={item}
                      />
                  ))}
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-xl">
                      <p className="text-lg md:text-xl text-center text-gray-700">
                          Total a pagar: {''}
                          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {formatCurrency(total)}
                          </span>
                      </p>
                  </div>

                  <form 
                      className="w-full mt-4 md:mt-6 space-y-3 md:space-y-4"
                      action={handleCreateOrder}
                  >
                      <input
                          type="text"
                          placeholder="Tu Nombre"
                          className="input-modern w-full text-base"
                          name="name"
                      />

                      <button
                          type="submit"
                          className="btn-primary w-full uppercase tracking-wide text-sm md:text-base py-3 md:py-3"
                      >
                          Confirmar Pedido
                      </button>
                  </form>
              </div>
          </div>
        )}
    </aside>
  )
}
