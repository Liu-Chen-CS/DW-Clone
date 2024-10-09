import "./toggleButton.css";
import {useField, useFormikContext} from "formik";
import {NewsForm} from "../../form/formConfigs/formConfig.ts";

interface Props {
    label:string,
    name: string,
}

const Togglebutton: React.FC<Props> = ({label,name}) => {

    const {setFieldValue} = useFormikContext<NewsForm>();

    const [field] = useField(name);

    const handleToggle = ()=>{
        setFieldValue(name, !field.value);
    };

    return (
        <div className="toggle-container">
            <span className={`${field.value ? "" : "bold"}`}>{label}</span>
            <div className="toggle-icon" onClick={handleToggle}>
                <div className={`circle ${field.value ? "move-right" : "move-left"}`}></div>
            </div>
        </div>
    );
};

export default Togglebutton;
