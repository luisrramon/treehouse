export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500">
                © {new Date().getFullYear()} Luis Ramon. All rights reserved.
            </div>
        </footer>
    )
}