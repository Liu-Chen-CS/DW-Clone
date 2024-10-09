import "./antdUIInputWrapper.css";
import {Input} from "antd";
import {useField} from "formik";
import {WarningOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";

interface Props {
    fieldName: string;
    label: string;
    className?: string;
}

const AntdUIInputWrapper: React.FC<Props> = ({fieldName, label, className}) => {

    const [field, meta] = useField(fieldName);

    const [isRequired, setIsRequired] = useState<boolean>(false);

    useEffect((): void => {
        if (meta.touched && meta.error) {
            setIsRequired(true);
        } else {
            setIsRequired(false);
        }
    }, [meta.touched, meta.error])

    // useEffect(() => {
    //     if(values.medias.video.isToggle === false){
    //         console.log("123")
    //         setFieldValue(values.medias.video.videoCount, "");
    //     }
    // }, [values.medias.video.isToggle]);

    return (
        <div
            className={`AntdUIInputWrapper-container 
            ${isRequired ? "isRequired" : ""} 
            ${className !== undefined && className.trim().length !== 0 ? "cut-border-radius" : ""}`}
        >
            <Input
                {...field}
                placeholder=""
            />
            <span>{label}</span>
            {meta.touched && meta.error ? (
                <div className="error">
                    <WarningOutlined className="warning"/>
                    <div className="error-msg">{meta.error}</div>
                </div>
            ) : null}
        </div>


    );
};

export default AntdUIInputWrapper;
