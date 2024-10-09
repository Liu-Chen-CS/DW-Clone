import "./addNews.css";
import {Form, Formik, FormikProps} from "formik";
import {initialNewsForm, NewsForm, validationSchema} from "../form/formConfigs/formConfig.ts";
import React from "react";
import NewsInfo from "../form/newsInfo/NewsInfo.tsx";
import AuthorInfo from "../form/authorInfo/AuthorInfo.tsx";
import Medias from "../form/medias/Medias.tsx";
import axios from "axios";
import {useLocation, useNavigate, useParams} from "react-router-dom";

interface Props {
    mode: "view" | "edit" | "create"
}

const AddNews: React.FC<Props> = ({mode}) => {

    const customizedStyle = {
        backgroundColor: "#05b2fc",
        fontSize: "20px",
    }

    const navigate = useNavigate();

    const {state: newsForm} = useLocation();

    const {newsId} = useParams();

    const handleSubmit = (values: NewsForm) => {
        const submitForm = async () => {
            if (newsId) {
                axios.post(`http://localhost:8080/form/update/${newsId}`, values).then(() => {
                    navigate("/news");
                });
            } else {
                axios.post("http://localhost:8080/form/save", values).then(() => {
                    navigate("/news");
                });
            }
        }
        submitForm();
    };

    const getInitialNewsForm = (): NewsForm => {
        if (mode === "create") {
            return initialNewsForm;
        } else {
            return newsForm;
        }
    };

    return (
        <div className="addBook-wrapper">
            <Formik
                initialValues={getInitialNewsForm()}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    (formik: FormikProps<NewsForm>) => (
                        <Form onSubmit={formik.handleSubmit}>
                            <AuthorInfo customizedStyle={customizedStyle}/>
                            <NewsInfo customizedStyle={customizedStyle}/>
                            <Medias customizedStyle={customizedStyle}/>
                            <button className="cancel-button" onClick={() => {
                                navigate("/news")
                            }}>Cancel
                            </button>
                            <button className="submit-button" type="submit">Submit</button>
                            {/*<pre>{JSON.stringify(formik, null, 2)}</pre>*/}
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
export default AddNews;