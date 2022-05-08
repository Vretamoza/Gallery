import { useRef } from "react";

import { Button } from "../button";
import { Input } from "../input";

import { getImageFile } from "../utils/image";

export default function Component () {
    const sumbitRef = useRef();
    const selectorPrior = useRef();
    const localSelectorRef = useRef();
    const urlSelectorRef = useRef();

    const fileSelector = useRef();
    const urlSelector = useRef();
    const titleInput = useRef();
    const descriptionInput = useRef();

    const fileNameRef = useRef();

    const handleSubmit = async (e) => {
        const inputsFilled = verifyInputs();
        if (!inputsFilled) return;

        const title = titleInput.current.value;
        const description = descriptionInput.current.value;
        const imageFile = await getImageFile(fileSelector.current, urlSelector.current);
        //IMAGE_ITEMS.add({ title, description, imageURL: imageFile.url });
    };


    function activateSelector (ev, selector, submitter) {
        const parent = ev.target.parentElement;
        parent.classList.add('hidden');
        selector.classList.remove('hidden');
        submitter.classList.remove('hidden');
    }
    function deactivateSelector (selectorPrior, selectors, submitter) {
        selectorPrior.classList.remove('hidden');
        if (!selectors[0].classList.contains('hidden')) selectors[0].classList.add('hidden');
        if (!selectors[1].classList.contains('hidden')) selectors[1].classList.add('hidden');
        submitter.classList.add('hidden');
    }
    function cleanInputs () {
        fileSelector.current.value = '';
        urlSelector.current.value = '';
        titleInput.current.value = '';
        descriptionInput.current.value = '';
        fileNameRef.current.textContent = '';
    }
    function verifyInputs () {
        const title = titleInput.current.value;
        const description = descriptionInput.current.value;
        const imageFile = fileSelector.current.files[0];
        const imageURL = urlSelector.current.value;

        if (!title || !description || (!imageFile && !imageURL)) {
            alert('Please, fill all the fields');
            return false;
        }
        return true;
    }

    return (
        <>
            <div data-bg-modal className="hidden absolute top-0 w-full h-screen bg-black/70 z-10"></div>
            <aside data-modal className="hidden absolute flex flex-col items-center justify-center gap-4 py-6 px-10 w-fit bg-white ring-2 ring-violet-400 rounded-xl shadow-2xl z-20">
                <h2 className="mb-4 w-full text-2xl text-center font-poppins font-semibold">Add a new image✨</h2>
                <div className="flex flex-col gap-3 mb-6">
                    <Input
                        refy={ titleInput }
                        type="text"
                        id="title"
                        placeholder="Title"
                    />
                    <Input
                        refy={ descriptionInput }
                        type="text"
                        id="description"
                        placeholder="Description"
                    />
                </div>
                <div ref={ selectorPrior } className="mb-5 flex flex-col gap-3">
                    <Button onClick={ (ev) => activateSelector(ev, localSelectorRef.current, sumbitRef.current) }>
                        Submit image from local
                    </Button>
                    <Button onClick={ (ev) => activateSelector(ev, urlSelectorRef.current, sumbitRef.current) }>
                        Submit image from url
                    </Button>
                </div>
                <div ref={ localSelectorRef } className="hidden flex justify-center w-full">
                    <label htmlFor="image-selector" className="my-4 text-base text-violet-700 font-medium">
                        <span className="py-3 px-5 bg-violet-200 border-0 rounded-xl hover:bg-violet-300 cursor-pointer">Choose
                            Image</span>
                        <span ref={ fileNameRef } className="ml-2 text-base font-medium"></span>
                        <Input
                            refy={ fileSelector }
                            type="file"
                            id="image-selector"
                            className="hidden"
                            accept="image/*"
                            onChange={ (ev) => {
                                const fileName = ev.target.files[0].name;
                                fileNameRef.current.textContent = fileName;
                            } }
                        />
                    </label>
                </div>
                <div ref={ urlSelectorRef } className="flex flex-col hidden">
                    <label htmlFor="url-selector" className="mb-1 text-base font-comfortaa font-semibold text-violet-700">Write an URL to get
                        image from:</label>
                    <Input
                        refy={ urlSelector }
                        type="text"
                        id="url-selector"
                        placeholder="URL"
                    />
                </div>
                <Button
                    className="hidden"
                    refy={ sumbitRef }
                    onClick={ () => {
                        const modal = document.querySelector('aside[data-modal]');
                        const bgModal = document.querySelector('div[data-bg-modal]');
                        modal.classList.add('hidden');
                        bgModal.classList.add('hidden');
                    } }>
                    Sumbit Image
                </Button>
                <Button onClick={ () => {
                    const modal = document.querySelector('aside[data-modal]');
                    const bgModal = document.querySelector('div[data-bg-modal]');
                    modal.classList.add('hidden');
                    bgModal.classList.add('hidden');

                    deactivateSelector(selectorPrior.current, [localSelectorRef.current, urlSelectorRef.current], sumbitRef.current);
                    cleanInputs();
                } }>
                    Cancel
                </Button>
            </aside>
        </>
    );
}
