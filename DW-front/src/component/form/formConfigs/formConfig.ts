import * as Yup from "yup";

export type NewsForm = {
    mode: "view" | "create" | "edit" | "",
    authorInfo: {
        gender: string,
        name: string,
        age: number | null,
        postcode: string,
        address: string,
        country: {
            id: string,
            name: string,
        },
        region: {
            id: string,
            name: string,
        },
        city: {
            id: string,
            name: string,
        },
    },
    newsInfo: {
        title: string,
        content: string,
        type: string,
    },
    medias: {
        videoLink:string,
        imageLink:string,
    }
}

export const initialNewsForm: NewsForm = {
    mode: "",
    authorInfo: {
        gender: "",
        name: "",
        age: null,
        postcode: "",
        address: "",
        country: {
            id: "",
            name: "",
        },
        region: {
            id: "",
            name: "",
        },
        city: {
            id: "",
            name: "",
        },
    },
    newsInfo: {
        title: "",
        content: "",
        type: "",
    },
    medias: {
        videoLink:"",
        imageLink:"",
    }
}

export const validationSchema = Yup.object({
    mode: Yup.string().optional(),
    authorInfo: Yup.object({
        gender: Yup.string().required("Gender is required"),
        name: Yup.string().required("Name is required"),
        age: Yup.number()
            .nullable()
            .min(0, "Age must be at least 0")
            .max(120, "Age must be at most 120")
            .required("Age is required"),
        postcode: Yup.string()
            .matches(/^\d{5}$/, 'Postcode must be exactly 5 digits')
            .required('Postcode is required'),
        address: Yup.string().required("Address is required"),
        country: Yup.object({
            id: Yup.string().optional(),
            name: Yup.string().required("Name is required"),
        }),
        region: Yup.object({
            id: Yup.string().optional(),
            name: Yup.string().required("Name is required"),
        }),
        city: Yup.object({
            id: Yup.string().optional(),
            name: Yup.string().required("City is required"),
        }),
    }),
    newsInfo: Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
        type: Yup.string().required("Type is required"),
    }),
    medias: Yup.object({
        videoLink:Yup.string().optional(),
        imageLink:Yup.string().optional(),
    })
});