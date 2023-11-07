import OptionItem from "./OptionItem";

const StyleCustom = ({ option, setOption, handlePage }) => {

    const handleOption = (val) => {
        setOption(val);
    }

    return (

        <div>
            <div className="option-group grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
                <OptionItem checked={option == "Auto"} change={handleOption} title={"Auto"} description={"All styles"} />
                <OptionItem checked={option == "Brandable names"}
                    change={handleOption} title={"Brandable names"}
                    description={"like Google and Rolex"} />

                <OptionItem checked={option == "Alternate spelling"}
                    change={handleOption} title={"Alternate spelling"}
                    description={"like Lyft and Fiverr"} />

                <OptionItem checked={option == "Non-English words"}
                    change={handleOption} title={"Non-English words"}
                    description={"like Toyota and Audi"} />

                <OptionItem checked={option == "Compound words"}
                    change={handleOption} title={"Compound words"}
                    description={"like FedEx and Microsoft"} />

                <OptionItem checked={option == "Real words"}
                    change={handleOption} title={"Real words"}
                    description={"like Apple and Amazon"} />

                <OptionItem checked={option == "Evocative"}
                    change={handleOption} title={"Evocative"}
                    description={"like RedBull and Forever21"} />

                <OptionItem checked={option == "Short phrase"}
                    change={handleOption} title={"Short phrase"}
                    description={"Short phrase"} />
            </div>

            <div className="text-center">
                <button className="bg-[#7e60c4] text-white px-6 py-[5px] rounded-[5px] mt-4 mb-3" onClick={()=>handlePage("random")}>Next</button>
            </div>

        </div>

    );
}

export default StyleCustom;