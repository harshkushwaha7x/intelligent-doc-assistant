import { ReactElement, ButtonHTMLAttributes } from "react"
import { LoadingIcon } from "./icons/LoadingIcon"

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    text: string;
    variant: "primary" | "secondary" | "delete" | "wide" | "form";
    size: "sm" | "md" | "lg" | "wide";
    leftIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
}

const variantStyles: Record<ButtonProps['variant'], string> = {
    "primary": " bg-[#191919] text-white border border-gray-600/20 hover:opacity-50",
    "secondary": "bg-white text-black hover:bg-white/50 px-8 text-sm font-normal tracking-tighter",
    "delete": "bg-red-700 text-white hover:bg-red-600",
    "wide": " bg-[#191919] hover:bg-[#191919]/70 text-white",
    "form": " shadow-xl text-sm font-semibold rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none"
}

const sizeStyles: Record<ButtonProps['size'], string> = {
    "sm": " py-2 px-6 text-sm rounded-lg",
    "md": " py-2 px-4 text-base rounded-lg",
    "lg": " py-2 px-4 text-base rounded-lg",
    "wide": "w-full font-primary tracking-tighter font-semibold px-8 rounded-lg pt-4 pb-4 text-center"
}

const defaultStyles = "font-primary transition-all duration-300"

export const Button = (props: ButtonProps) => {
    const { text, variant, size, leftIcon, isLoading, onClick, type = "button", ...rest } = props;

    return (
        <button 
            disabled={isLoading}
            type={type}
            onClick={onClick} 
            className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} ${isLoading ? "opacity-50" : "opacity-100"}`}
            {...rest}
        >
            {isLoading ? (
                <div className="flex justify-center">
                    <LoadingIcon />
                </div>
            ) : leftIcon ? (
                <div className="flex items-center">
                    <div className="pr-2">{leftIcon}</div>
                    {text}
                </div>
            ) : (
                <div>{text}</div>
            )}
        </button>
    )
}