import "./authorInfo.scss";
import type {CollapseProps} from 'antd';
import {Collapse} from 'antd';
import AuthorDetails from "./AuthorDetails.tsx";

interface Props {
    customizedStyle: { [key: string]: string };
}

const AuthorInfo: React.FC<Props> = ({customizedStyle}) => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Author Information',
            children: <AuthorDetails fieldName="authorInfo"/>,
            style: customizedStyle
        },
    ];

    return (
        <div className="AuthorInfo-wrapper">
            <Collapse items={items} defaultActiveKey={['1']}/>
        </div>
    )
};
export default AuthorInfo;