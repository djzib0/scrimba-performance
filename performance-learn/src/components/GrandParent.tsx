import React from "react"
import Parent from "./Parent"


export default function GrandParent({ count } : {count?: number}) {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component. Count: {count}</p>
            <Parent />
            <Parent />
        </div>
    )
}
