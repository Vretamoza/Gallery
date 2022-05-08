import { Header } from './components/header';
import { Modal } from './components/modal';

function App () {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center grow pt-4 px-12 w-full">
                <Modal />
            </div>
        </>
    );
}

export default App;
