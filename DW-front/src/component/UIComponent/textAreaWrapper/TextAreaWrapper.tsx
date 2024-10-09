import "./textAreaWrapper.css";
import {useField, useFormikContext} from "formik";
import {WarningOutlined} from "@ant-design/icons";
import {NewsForm} from "../../form/formConfigs/formConfig.ts";

interface Props {
    name: string;
    placeholder: string;
}

const TextAreaWrapper: React.FC<Props> = ({name,placeholder}) => {

    const [field, meta] = useField(name);

    const {values:{mode}} = useFormikContext<NewsForm>()

    return (
        <div className="text-area-wrapper">
            <textarea
                className={`${mode === "view" && "not-allowed"}`}
                placeholder={placeholder}
                {...field}
                disabled={mode === "view" ? true : false}
            />
            {meta.touched && meta.error ? (
                <div className="error">
                    <WarningOutlined className="warning"/>
                    <div className="error-msg">{meta.error}</div>
                </div>
            ) : null}
        </div>
    );
};
export default TextAreaWrapper;