export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent my-6 md:my-10 text-center px-4">
            {children}
        </h1>
    )
}
