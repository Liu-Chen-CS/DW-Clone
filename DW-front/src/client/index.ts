import axios from "axios";

class Client {

    //AuthorInfo
    public static getCountryList() {
        const fetchCountryList = async () => {
            try {
                const {data: {optionList: countryList}} = await axios.get("http://localhost:8080/author/country");
                return countryList;
            } catch (error) {
                console.error(error);
            }
        }
        return fetchCountryList();
    }

    public static getRegions(countryId: string) {
        const fetchRegions = async () => {
            try {
                if (Number(countryId) !== 0) {
                    const {data: {optionList: regionList}} = await axios.get(`http://localhost:8080/author/region/${countryId}`);
                    return regionList;
                } else {
                    return [];
                }
            } catch (error) {
                console.error(error);
            }
        }
        return fetchRegions();
    }

    public static getCities(regionId: string) {
        const fetchCities = async () => {
            try {
                if (Number(regionId) !== 0) {
                    const {data: {optionList: cities}} = await axios.get(`http://localhost:8080/author/country/region/city/${regionId}`);
                    return cities;
                } else {
                    return [];
                }
            } catch (error) {
                console.error(error);
            }
        };
        return fetchCities();
    }

    public static getPolitics() {
        try {
            const fetchPolitics = async () => {
                const politics = await axios.get(`http://localhost:8080/news/politics`);
                return politics;
            }
            return fetchPolitics();
        } catch (error) {
            console.error(error);
        }
    }

    public static getSport() {
        try {
            const fetchNews = async () => {
                const sports = await axios.get("http://localhost:8080/news/sports");
                return sports;
            };
            return fetchNews();
        } catch (error) {
            console.error(error);
        }
    }

    public static getBreaking() {
        try {
            const fetchBreaking = async () => {
                const breaking = await axios.get("http://localhost:8080/news/breaking");
                return breaking;
            };
            return fetchBreaking();
        } catch (error) {
            console.error(error);
        }
    }

    public static getNews() {
        const fetchNews = async () => {
            const newsList = await axios.get("http://localhost:8080/news/all");
            return newsList;
        }
        return fetchNews();
    }

    public static deleteNewsById(newsId: number) {
        try {
            const deleteNews = (newsId: number) => {
                axios.delete(`http://localhost:8080/news/${newsId}`)
            };
            deleteNews(newsId);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Client;