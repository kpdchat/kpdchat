import React, { useEffect } from "react";

export default function KebabWrapper({elRef, toggleFunc, children}) {
    useEffect(() => {
        let handler = (e) => {
            if (!elRef.current?.contains(e.target)) {
                toggleFunc(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [elRef, toggleFunc])

    return (
        <>{children}</>
    )
}
