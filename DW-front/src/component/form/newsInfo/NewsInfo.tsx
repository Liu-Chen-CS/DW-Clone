import "./newsInfo.scss";
import {Collapse, CollapseProps} from "antd";
import NewsDetails from "./NewsDetails.tsx";

interface Props {
    customizedStyle: { [key: string]: string };
}

const NewsInfo: React.FC<Props> = ({customizedStyle}) => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'News Information',
            children: <NewsDetails fieldName="newsInfo"/>,
            style: customizedStyle,
        },
    ];

    return (
        <div className="AuthorInfo-wrapper">
            <Collapse items={items} defaultActiveKey={['1']}/>
        </div>
    )
};
export default NewsInfo;