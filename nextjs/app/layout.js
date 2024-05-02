import React, { Children } from "react";

const layout = ({children}) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}

export default layout