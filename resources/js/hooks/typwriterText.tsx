import { useEffect, useRef, useState } from "react"

export function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
    const [isVisible, setIsVisible] = useState(false)
    const [displayedText, setDisplayedText] = useState("")
    const containerRef = useRef<HTMLDivElement>(null)

    // Detectar quando está visível
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.6 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    // Iniciar digitação
    useEffect(() => {
        if (!isVisible || displayedText.length > 0) return

        let index = 0
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index])
            index++
            if (index >= text.length) clearInterval(interval)
        }, speed)

        return () => clearInterval(interval)
    }, [isVisible, text, speed, displayedText.length])

    return (
        <div ref={containerRef}>
            <p className="text-base leading-relaxed whitespace-pre-line">{displayedText}</p>
        </div>
    )
}
