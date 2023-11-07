import OptionItem from "./OptionItem";


const RandomCustom = ({ option, setOption, handlePage }) => {
    const handleOption = (val) => {
        setOption(val);
    }

    return (

        <div>
            <div className="option-group grid grid-cols-1 gap-x-4 gap-y-3 mt-4">

                <OptionItem checked={option == "Low"} change={handleOption} title={"Low"} description={"Less random. The most direct name ideas"} />
                <OptionItem checked={option == "Medium"} change={handleOption} title={"Medium"} description={"Balanced. More creative results"} />
                <OptionItem checked={option == "High"} change={handleOption} title={"High"} description={"Random ideas. More varied results"} />

            </div>

            <div className="text-center">
                <button className="bg-[#7e60c4] text-white px-6 py-[5px] rounded-[5px] mt-4 mb-3" onClick={() => handlePage("info")}>Next</button>
            </div>

        </div>

    );
}

export default RandomCustom;