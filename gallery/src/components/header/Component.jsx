import { Button } from "../button";

export default function Component () {
    return (
        <header className="flex justify-between items-center px-8 w-full h-20 border-b">
            <h1 className="text-2xl">Gallery</h1>
            <div className="flex gap-2">
                <Button onClick={() => {
                    const modal = document.querySelector('aside[data-modal]');
                    const bgModal = document.querySelector('div[data-bg-modal]');
                    modal.classList.remove('hidden');
                    bgModal.classList.remove('hidden');
                }}>
                    <span className="px-5 hidden sm:block">Add Image</span>
                    <span className="sm:hidden">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M7.5 1v13M1 7.5h13" stroke="currentColor"></path>
                        </svg>
                    </span>
                </Button>
                <Button onClick={() => {
                    const darkMode = document.documentElement.classList.toggle('dark');
                    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
                }}>
                    <span className="dark:hidden">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path
                                d="M8 2V0H7v2h1zm-4.793.498L1.5.792.793 1.5 2.5 3.206l.707-.708zm9.293.708L14.207 1.5 13.5.792l-1.707 1.706.707.708zm-5 .791a3.499 3.499 0 100 6.996 3.499 3.499 0 100-6.996zM2 6.995H0v1h2v-1zm13 0h-2v1h2v-1zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706.707.708zm12.707-.708L12.5 11.785l-.707.707L13.5 14.2l.707-.708zM8 14.99v-1.998H7v1.999h1z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                    <span className="hidden dark:block">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path
                                d="M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                </Button>
            </div>
        </header>
    );
}
