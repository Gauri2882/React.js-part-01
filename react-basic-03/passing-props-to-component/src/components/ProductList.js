export function ProductList(props) {
    return <div style= {{ 
        display: "flex", gap: "16px", margin: "10px"
    }}>{props.children}
    </div>
}