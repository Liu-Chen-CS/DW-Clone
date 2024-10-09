import AntdUIInputWrapper from "../../UIComponent/antdUIInputWrappr/AntdUIInputWrapper.tsx";
import "./newsDetails.scss";
import AntdUISelectWrapper from "../../UIComponent/antdUISelectWrapper/AntdUISelectWrapper.tsx";
import {newsTypes} from "../../../common/util";
import TextAreaWrapper from "../../UIComponent/textAreaWrapper/TextAreaWrapper.tsx";

interface Props {
    fieldName: string;
}

const NewsDetails: React.FC<Props> = ({fieldName}) => {

    return (
        <div className="newsDetails-wrapper">
            <AntdUISelectWrapper
                fieldName={`${fieldName}.type`}
                options={newsTypes}
            />
            <AntdUIInputWrapper
                fieldName={`${fieldName}.title`}
                label="Title"
            />
            <TextAreaWrapper
                name={`${fieldName}.content`}
                placeholder="Content"
            />
        </div>
    );
};
export default NewsDetails;