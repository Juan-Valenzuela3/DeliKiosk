import { XCircleIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { OrderItem } from "@/src/types"
import { formatCurrency } from '@/src/utils'
import { useStore } from '@/src/store'
import { useMemo } from 'react'

type ProductDetailsProps = {
    item: OrderItem
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export default function ProductDetails({ item }: ProductDetailsProps) {

    const increaseQuantity = useStore((state) => state.increaseQuantity)
    const decreaseQuantity = useStore((state) => state.decreaseQuantity)
    const removeItem = useStore((state) => state.removeItem)
    const disableDecreaseButton = useMemo(() => item.quantity === MIN_ITEMS, [item])
    const disableIncreaseButton = useMemo(() => item.quantity === MAX_ITEMS, [item])

    return (
        <div className="card-modern p-4 space-y-3">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {formatCurrency(item.price)}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all duration-200"
                >
                    <XCircleIcon className="h-6 w-6" />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                    <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={disableDecreaseButton}
                        className='disabled:opacity-30 hover:bg-white p-2 rounded-lg transition-all duration-200 hover:shadow-sm'
                    >
                        <MinusIcon className="h-4 w-4 text-gray-600" />
                    </button>

                    <span className="text-lg font-bold text-gray-800 min-w-[2rem] text-center">
                        {item.quantity}
                    </span>

                    <button
                        type='button'
                        onClick={() => increaseQuantity(item.id)}
                        disabled={disableIncreaseButton}
                        className="disabled:opacity-30 hover:bg-white p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
                    >
                        <PlusIcon className="h-4 w-4 text-gray-600" />
                    </button>
                </div>

                <div className="text-right">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="text-lg font-bold text-gray-800">
                        {formatCurrency(item.subtotal)}
                    </p>
                </div>
            </div>
        </div>
    )
}
