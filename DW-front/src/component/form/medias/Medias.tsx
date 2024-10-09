import "./medias.scss";
import {Collapse, CollapseProps} from "antd";
import MediaDetails from "./MediaDetails.tsx";

interface Props {
    customizedStyle: { [key: string]: string };
}

const Medias: React.FC<Props> = ({customizedStyle}) => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Medias',
            children: <MediaDetails/>,
            style: customizedStyle
        },
    ];

    return (
        <div className="AuthorInfo-wrapper">
            <Collapse items={items} defaultActiveKey={['1']}/>
        </div>
    )
};
export default Medias;