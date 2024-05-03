import React, { Children } from "react";

const layout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <title>ooooo</title>
                <header>Header</header>
                {children}
                <footer>Footer</footer>
            </body>   
        </html>
    )
}

export default layout;