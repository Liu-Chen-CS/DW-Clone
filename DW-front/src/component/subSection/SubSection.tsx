import React, { useState } from "react";
import "./subSection.css";
import { SubSectionVO } from "../../client/model.ts";

interface Props {
    content: SubSectionVO[] | undefined;
    topic: "politics" | "sports" | "breakings";
}

const SubSection: React.FC<Props> = ({ content,topic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);  // 当前显示的新闻起始索引
    const itemsPerPage = 3;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            Math.max(prevIndex - itemsPerPage, 0)  // 确保索引不小于0
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + itemsPerPage, content?.length ? content.length - itemsPerPage : 0)  // 确保索引不超过最大值
        );
    };

    return (
        <div className="subSection-container">
            <div className="container">
                <div className="news-container">
                    <div className="news-title">
                        <div className="im-fokus">Im Fokus - {topic}</div>
                        <div className="title">
                            <h3>{content?.[0]?.title}</h3>
                        </div>
                    </div>
                    <div className="carousel-controls">
                        <button onClick={handlePrevClick} disabled={currentIndex === 0}>◀</button>
                        <button onClick={handleNextClick} disabled={content && currentIndex + itemsPerPage >= content.length}>▶</button>
                    </div>
                    <div className="news-list">
                        <ul>
                            {content?.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                                <li key={index}>
                                    <img src={item.imageLink} alt={item.title}/>
                                    <div>{item.title}</div>
                                    <span>{item.content}</span>
                                    <span>{item.localDateTime.substring(0,10)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubSection;
