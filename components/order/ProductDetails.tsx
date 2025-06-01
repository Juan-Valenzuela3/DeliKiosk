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
        <div className="card-modern p-3 md:p-4 space-y-2 md:space-y-3">
            <div className="flex justify-between items-start">
                <div className="flex-1 pr-2">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                    <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {formatCurrency(item.price)}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all duration-200 flex-shrink-0"
                >
                    <XCircleIcon className="h-5 w-5 md:h-6 md:w-6" />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3 bg-gray-50 rounded-xl p-1.5 md:p-2">
                    <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={disableDecreaseButton}
                        className='disabled:opacity-30 hover:bg-white p-1.5 md:p-2 rounded-lg transition-all duration-200 hover:shadow-sm'
                    >
                        <MinusIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                    </button>

                    <span className="text-base md:text-lg font-bold text-gray-800 min-w-[1.5rem] md:min-w-[2rem] text-center">
                        {item.quantity}
                    </span>

                    <button
                        type='button'
                        onClick={() => increaseQuantity(item.id)}
                        disabled={disableIncreaseButton}
                        className="disabled:opacity-30 hover:bg-white p-1.5 md:p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
                    >
                        <PlusIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                    </button>
                </div>

                <div className="text-right">
                    <p className="text-xs md:text-sm text-gray-500">Subtotal</p>
                    <p className="text-base md:text-lg font-bold text-gray-800">
                        {formatCurrency(item.subtotal)}
                    </p>
                </div>
            </div>
        </div>
    )
}
