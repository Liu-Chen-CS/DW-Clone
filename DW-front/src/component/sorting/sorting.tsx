import {useTranslation} from "react-i18next";
import "./sorting.css";
import {useRef, useState} from "react";
import {NewsSoringOptions} from "../../common/type";
import Arrow from "../../assets/arrow.svg";
import SortingIcon from "../../assets/arrow.svg";


interface Props {
    title: string[],
    author: string[],
    createdOn: string[],
    handleSortingOptionsChange: (key: keyof NewsSoringOptions, value: string) => void;
    resetSorting?: () => void;
}

type CheckboxRefs = {
    [key: string]: HTMLInputElement | null;
};

const Sorting: React.FC<Props> = (props: Props) => {
    console.log(props.title)
    const {t} = useTranslation();
    const [allToggled, setAllToggled] = useState(false);
    const checkboxRefs = useRef<CheckboxRefs>({});
    const [toggleStates, setToggleStates] = useState({
        bonusCalculations: false,
        manager: false,
        customer: false,
        section: false,
        channel: false,
        subchannel: false,
        logic: false,
    });

    const handleResetSortingClick = () => {
        setToggleStates({
            bonusCalculations: false,
            manager: false,
            customer: false,
            section: false,
            channel: false,
            subchannel: false,
            logic: false,
        });

        // props.resetSorting();

        for (const key in checkboxRefs.current) {
            if (checkboxRefs.current[key]) {
                checkboxRefs.current[key]!.checked = false;
            }
        }
    };

    const handleSortingIconClick = () => {
        setToggleStates(() => ({
            bonusCalculations: !allToggled,
            manager: !allToggled,
            customer: !allToggled,
            section: !allToggled,
            channel: !allToggled,
            subchannel: !allToggled,
            logic: !allToggled,
        }));
        setAllToggled(!allToggled);
    };

    const handleClick = (toggle: keyof typeof toggleStates) => {
        setToggleStates((prevState) => ({
            ...prevState,
            [toggle]: !prevState[toggle],
        }));
    };

    const sortOptions: Record<string, JSX.Element[]> = {};

    (Object.keys(props) as (keyof Props)[]).forEach((key) => {
        if (key !== "handleSortingOptionsChange" && key !== "resetSorting") {
            sortOptions[key] = [];
            for (const value of props[key]) {
                sortOptions[key].push(
                    <div className="sorting-checkbox-wrapper" key={value}>
                        <label className="sorting-checkbox-row">
                            <input
                                type="checkbox"
                                name=""
                                className="checkbox"
                                id={value}
                                ref={(prev) => (checkboxRefs.current[value] = prev)}
                            />
                            <span className="checkmark"></span>
                            <label className="sorting-option-label" htmlFor={value}>
                                {value}
                            </label>
                        </label>
                    </div>,
                );
            }
        }
    });

    // again for each prop generate the dropdown and insert the checkboxes and labels
    const mappedOptions = Object.entries(props).map(([key], index) => {
        if (key === "handleSortingOptionsChange" || key === "resetSorting")
            return null;
        return (
            <div
                key={index}
                className={
                    "sorting-section" +
                    (toggleStates[key as keyof typeof toggleStates]
                        ? " sorting-expanded"
                        : "")
                }
            >
                <div className="sorting-label-bar" onClick={() => handleClick(key as keyof typeof toggleStates)}>
                    <p className="sorting-label">{t(key)}</p>
                    <div
                        className="sorting-icon-arrow"
                    >
                        <img src={Arrow} alt=""/>
                    </div>
                </div>
                <div className="sorting-section-body">{sortOptions[key]}</div>
            </div>
        );
    });

    return (
        <div className="sorting-container">
            <div className="sorting-icon" onClick={handleSortingIconClick}>
                <img src={SortingIcon} alt=""/>
            </div>
            {mappedOptions}
            <div className="sorting-button-wrapper">
                <button
                    className="sorting-reset-button"
                    // text={t("reset")}
                    onClick={handleResetSortingClick}
                ></button>
            </div>
        </div>
    );
};

export default Sorting;
