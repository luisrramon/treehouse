import './globals.css';

export const metadata = {
    title: "Luis Ramon | Portfolio",
    description: "TreeHouse"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}