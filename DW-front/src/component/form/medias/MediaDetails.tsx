import "./mediaDetails.css";
import AntdUIInputWrapper from "../../UIComponent/antdUIInputWrappr/AntdUIInputWrapper.tsx";


const MediaDetails: React.FC = () => {

    return (
        <div className="media-details-container">
            <AntdUIInputWrapper
                label="Video link"
                fieldName="medias.videoLink"
            />
            <AntdUIInputWrapper
                label="Image link"
                fieldName="medias.imageLink"
            />
        </div>
    );
};
export default MediaDetails;