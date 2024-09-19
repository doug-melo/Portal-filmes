export default function CardContainer({titulo, children}) {
    return(
        <div className="mx-7">
            <h1 className="text-white text-4xl mx-1.5 my-10">{titulo}</h1>
            <div className="flex gap-10 content-center">
                {children}
            </div>
        </div>
    )
}