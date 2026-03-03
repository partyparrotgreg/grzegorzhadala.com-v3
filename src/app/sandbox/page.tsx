export default async function SandboxPage() {
    return (

        <div
            style={{
                background: "hsl(9 100% 58)",
                width: 1200,
                height: 630,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "50px",
                color: "white",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        fontSize: 24,
                        marginBottom: 16,
                    }}
                >
                    Greg Hadala
                </div>
                <div
                    style={{
                        fontSize: 42,
                        fontWeight: 400,
                        lineHeight: 1.2,
                    }}
                >
                    Design Engineer specializing in Fintech & Web3 products. Nearly 20 years in, he designs and builds production React code, design systems, and AI-augmented workflows — making complex things feel simple.
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                        paddingTop: 24,
                        fontSize: 28,
                        fontWeight: 700,
                    }}
                >
                    PageName
                </div>
            </div>
        </div>
    )
}