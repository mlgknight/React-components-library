import "../index.css"

interface ButtonProps {
    children: React.ReactNode,
    color: string,
    type: string
}

export default function Button(props: ButtonProps) {
    const { children, color, type } = props

    const colorClass = "button_"  + color
    const typeClass = "button_" + type



    return (
        <button className={`${colorClass} ${typeClass}`}>{children}</button>
    )
}