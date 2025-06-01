"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder)  

    return (
        <button
            type="button"
            className="btn-primary w-full uppercase tracking-wide text-sm
                       /* Mobile touch improvements */
                       active:scale-95 md:active:scale-95 
                       touch-manipulation select-none"
            onClick={() => addToOrder(product)}
        >
            Agregar al Pedido
        </button>
    )
}
