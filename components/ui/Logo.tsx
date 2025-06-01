import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center">  
        <div className="relative w-32 h-24 md:w-44 md:h-32 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center">
                <Image
                    alt="Logotipo Fresh Coffee"
                    src='/logo.svg'
                    className=""
                    width={80}
                    height={80}
                />
            </div>
        </div>
    </div>
  )
}
