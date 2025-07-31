import React from "react";
import "../../Pages/dashboard.css"

interface RightFlexLayoutProps {
    children: React.ReactNode
}

export default function RightFlexLayout({ children }: RightFlexLayoutProps) {
    return (
        <div className="rightFlex">
            {children}
        </div>
    )
}
