import Accordion from "../../Accordion";
import Header from "../../Header";

const Sobre = () => {
    return (
        <>
            <Header />
            <h1 className="sanfonas">Sobre</h1>
            <ul>
                <li>
                    <Accordion/>
                </li>
            </ul>
            <ul>
                <li>
                    <Accordion/>
                </li>
            </ul>
            <ul>
                <li>
                    <Accordion/>
                </li>
            </ul>
        </>
    );
}

export default Sobre