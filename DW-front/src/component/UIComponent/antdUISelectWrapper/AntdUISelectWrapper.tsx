import "./antdUISelectWrapper.css";
import {Select} from "antd";
import {useField, useFormikContext} from "formik";
import {AntdOption} from "../../../common/util";
import {NewsForm} from "../../form/formConfigs/formConfig.ts";
import {useState} from "react";
import {WarningOutlined} from "@ant-design/icons";

interface Props {
    fieldName: string,
    options: { value: string, label: string, id: string }[];
    isDisabled?: boolean;
}

const AntdUISelectWrapper: React.FC<Props> = ({options, fieldName}) => {

    const [isHover, setIsHover] = useState<boolean>(true);

    const [field, meta] = useField(fieldName);

    const {values: {mode}} = useFormikContext<NewsForm>();

    const handleFocus = () => {
        setIsHover(false);
        meta.touched = true;
    };

    const {setFieldValue} = useFormikContext<NewsForm>();

    const handleChange = (value: string) => {
        if (typeof (field.value) === "object") {
            setFieldValue(`${fieldName}.name`, value);
        } else {
            setFieldValue(fieldName, value);
        }
    };

    const handleSelect = (_: string, option: AntdOption) => {
        if (typeof (field.value) === "object") {
            setFieldValue(`${fieldName}.id`, option.id);
        }
    };

    return (
        <div className={`AntdUISelectWrapper-container`}>
            <Select
                disabled={mode === "edit" && (
                    fieldName === "authorInfo.country" ||
                    fieldName === "authorInfo.region" ||
                    fieldName === "authorInfo.city"
                )}
                value={typeof (field.value) === "object" ? field.value.name : field.value}
                onFocus={handleFocus}
                onChange={handleChange}
                onSelect={handleSelect}
                options={options}
                className={`${isHover ? "normal" : "remove-hover"} ${field.value ? "asd" : ""}`}
            />
            {meta.touched && meta.error ? (
                <div className="error">
                    <WarningOutlined className="warning"/>
                    <div className="error-msg">{meta.error}</div>
                </div>
            ) : null}
        </div>
    );
}
export default AntdUISelectWrapper;