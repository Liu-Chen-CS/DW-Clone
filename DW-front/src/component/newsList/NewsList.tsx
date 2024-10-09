import "./newsList.css";
import {useCallback, useEffect, useState} from "react";
import Client from "../../client";
import {NewsListInfo} from "../../client/model.ts";
import {Modal} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NewsList: React.FC = () => {

    const [newsInfo, setNewsInfo] = useState<NewsListInfo[]>([]);

    const navigate = useNavigate();

    const [modalConfig, setModalConfig] = useState<{ showModal: boolean, data?: NewsListInfo }>();

    const [modalHeading, setModalHeading] = useState<string>("");

    const [modalSubHeading, setModalSubHeading] = useState<string>("");

    const [pageReloader, setPageReloader] = useState<number>(0);

    const handleEdit = (newsId: number) => {
        axios.get(`http://localhost:8080/news/${newsId}`).then((data) => {
            navigate(`/news/new/${newsId}`, {state: data.data});
        })
    };

    const handleDateFormat = useCallback((createdOn: string) => {
        const dateTime = createdOn.split('T');
        const result = `${dateTime[0]} ${dateTime[dateTime.length - 1].substring(0, 8)}`;
        return result;
    }, []);

    const handleOk = (newsListInfo: NewsListInfo | undefined) => {
        const newsId: number = newsListInfo?.newsId as number;
        axios.delete(`http://localhost:8080/news/${newsId}`).then(() => {
            setModalConfig({
                showModal: false,
            })
            setPageReloader(pageReloader + 1);
        });
    };

    const handleClick = (item: NewsListInfo) => {
        setModalConfig({
            showModal: true,
            data: item,
        })
    };

    useEffect(() => {
        Client.getNews().then((newsList) => {
            setNewsInfo(newsList.data)
        });
    }, [pageReloader]);

    return (
        <div className="news-wrapper">
            {
                (
                    <Modal style={{margin: "200px auto",}} title={modalHeading} open={modalConfig?.showModal}
                           onOk={(() => {
                               handleOk(modalConfig?.data)
                           })}
                           onCancel={() => {
                               setModalConfig({showModal: false})
                           }}>
                        <p>{modalSubHeading}</p>
                    </Modal>
                )
            }
            <table className="news-list-table">
                <thead>
                <tr>
                    <th className="table-header-large">Title</th>
                    <th className="table-header-medium">Author</th>
                    <th className="table-header-medium">Type</th>
                    <th className="table-header-small">Created On</th>
                    <th className="table-header-small">Edit</th>
                    <th className="table-header-small">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    newsInfo.map((item) => (
                        <tr key={item.newsId}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.type}</td>
                            <td>{item.createdOn ? handleDateFormat(item.createdOn) : ''}</td>
                            <td
                                onClick={() => {
                                    handleEdit(item.newsId)
                                }}
                            ><i className="ri-edit-line"></i></td>
                            <td onClick={() => {
                                handleClick(item)
                                setModalHeading(`Deleting ${item.title}`)
                                setModalSubHeading(`Are you sure to delete ${item.title}`)
                            }}><i className="ri-delete-bin-6-line"></i></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <button className="create-button" onClick={()=>{navigate("/news/new")}}>Add News</button>
        </div>
    );
};
export default NewsList;

