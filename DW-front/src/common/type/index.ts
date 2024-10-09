
export type News = {
    newsId: number;
    title: string,
    author: string,
    createdOn: string,
    type: string,
};

export type NewsSoringOptions = {
    author: string[];
    type: string[];
    createdOn: string[];
    searchTerm: string[],
};
