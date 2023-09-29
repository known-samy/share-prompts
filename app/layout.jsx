import '@styles/globals.css';
import { Children } from 'react';

export const metadeta = {
    title: "Promptopis",
    description: 'Discover and Share AI Prompts'

}

function RootLayout({Children}) {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    {Children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
