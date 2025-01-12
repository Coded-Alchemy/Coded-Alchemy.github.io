// This file contains the application Footer section.

export function Footer() {
    return (
        <footer className="flex flex-col items-center gap-9">
            <nav className="flex flex-row items-center gap-9">

                <a href="https://twitter.com/CodedAlchemy" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110 space-x-16">X</a>

                <a href="https://www.linkedin.com/in/tajiabdullah/" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">LinkedIn</a>

                <a href="https://tryhackme.com/r/p/TrapRat" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">TryHackMe</a>

                <a href="https://www.credly.com/users/taji-abdullah.coded-alchemy" target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">Credly</a>

                <a href="https://github.com/Coded-Alchemy" target="_blank" rel="noopener noreferrer"
                   className="text-sm transition-transform duration-300 hover:scale-110">GitHub</a>
            </nav>

            <div className="flex flex-col items-center gap-9"></div>

            <p className="text-sm">&copy;2025 Taji Abdullah</p>
        </footer>
    );
}