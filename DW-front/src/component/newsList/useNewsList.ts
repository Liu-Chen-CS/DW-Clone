import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";
import qs from "qs";
import {News, NewsSoringOptions} from "../../common/type";


export const useNewsList = () => {

    const navigate = useNavigate();

    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [news, setNews] = useState<News[]>([]);

    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

    const [selectedSortingOptions, setSelectedSortingOptions] = useState<NewsSoringOptions>({
        author: [],
        type: [],
        createdOn: [],
        searchTerm: [],
    });

    const [reloadTrigger, setReloadTrigger] = useState(0);

    const triggerReload = useCallback(() => {
        setReloadTrigger(reloadTrigger + 1);
    }, [reloadTrigger]);

    const [titleOptions, setTitleOptions] = useState<string[]>(["123", "456"]);

    const [authorOptions, setAuthorOptions] = useState<string[]>([]);

    const [createdOnOptions, setCreatedOnOptions] = useState<string[]>([]);


    const handleAddBonusClick = useCallback((): void => {
        navigate("/news/new");
    }, []);

    const handleSortingOptionsChange = useCallback((key: keyof NewsSoringOptions, value: string): void => {
        // setIsLoading(true);
        if (key === "searchTerm") {
            setSelectedSortingOptions((prev) => ({
                ...prev,
                [key]: [value],
            }));
        } else {
            setSelectedSortingOptions((prev) => (
                {
                    ...prev,
                    [key]: (prev[key] === undefined || prev[key].length === 0)
                        ? [value]
                        : prev[key].includes(value)
                            ? prev[key].filter((v: string): boolean => v != value)
                            : [...prev[key], value]
                }
            ));
        }
    }, [selectedSortingOptions]);

    const resetSorting = useCallback(() => {
        setSelectedSortingOptions({
            author: [],
            type: [],
            createdOn: [],
            searchTerm: [],
        })
    }, []);

    const {title, author, createdOn} = useMemo(() => {
        const title: string[] = Array.isArray(titleOptions) ? titleOptions : [];
        const author: string[] = Array.isArray(authorOptions) ? authorOptions : [];
        const createdOn: string[] = Array.isArray(createdOnOptions) ? createdOnOptions : [];
        return {title, author, createdOn};
    }, [titleOptions, authorOptions, createdOnOptions]);

    useEffect((): void => {
        const fetchDivision = async () => {
            try {
                const {data} = await axios.get("http://127.0.0.1:8000/news/get");
                setTitleOptions(data.map((news: News) => news.title));
                setAuthorOptions(data.map((news: News) => news.author));
                setCreatedOnOptions(data.map((news: News) => news.createdOn));
            } catch (err) {
                console.error(err)
            }
        }
        fetchDivision();
    }, [reloadTrigger]);

    useEffect(() => {
        if (currentTimer) {
            clearTimeout(currentTimer);
        }
        const timer = setTimeout(async () => {
            try {
                console.log(selectedSortingOptions);
                const query = qs.stringify(selectedSortingOptions);
                const {data} = await axios.get(`http://127.0.0.1:8000/news/?${query}`);
                setNews(data);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }, 300);
        setCurrentTimer(timer);
        return (): void => clearTimeout(currentTimer);
    }, [selectedSortingOptions, reloadTrigger]);

    return {
        handleAddBonusClick,
        handleSortingOptionsChange,
        t,
        selectedSortingOptions,
        navigate,
        resetSorting,
        news,
        isLoading,
        triggerReload,
        authorOptions,
        createdOnOptions,
        title,
        author,
        createdOn,
    };

};