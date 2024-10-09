import AntdUIInputWrapper from "../../UIComponent/antdUIInputWrappr/AntdUIInputWrapper.tsx";
import "./authorDetails.scss";
import AntdUISelectWrapper from "../../UIComponent/antdUISelectWrapper/AntdUISelectWrapper.tsx";
import {useEffect, useState} from "react";
import Client from "../../../client";
import {AntdOption} from "../../../common/util";
import {useFormikContext} from "formik";
import {NewsForm} from "../formConfigs/formConfig.ts";

interface Props {
    fieldName: string;
}

const AuthorDetails: React.FC<Props> = ({fieldName}) => {

    const {values: {authorInfo}} = useFormikContext<NewsForm>();

    const [countryList, setCountries] = useState<AntdOption[]>([]);

    const [regionList, setRegionList] = useState<AntdOption[]>([]);

    const [cityList, setCityList] = useState<AntdOption[]>([]);

    const [isDisabled, setIsDisabled] = useState({
        country: true,
        region: true,
        city: true,
    });

    useEffect(() => {
        Client.getCountryList().then((countryList) => {
            setCountries(countryList);
            setIsDisabled((prev) => ({...prev, country: false,}))
        })
    }, []);

    useEffect(() => {
        Client.getRegions(authorInfo.country.id).then((regionList) => {
            if (regionList.length > 0) {
                setRegionList(regionList);
                setIsDisabled((prev) => ({...prev, region: false}));
            }
        })
    }, [authorInfo.country.name]);

    useEffect(() => {
        Client.getCities(authorInfo.region.id).then((cities) => {
            if (cities.length > 0) {
                setCityList(cities);
                setIsDisabled((prev) => ({...prev, city: false}));
            }
        })
    }, [authorInfo.region.name]);

    return (
        <div className="authorDetails-wrapper">
            <div className="fields-container">
                <AntdUISelectWrapper
                    fieldName={`${fieldName}.gender`}
                    options={[
                        {id: "1", label: "Mr", value: "Mr",},
                        {id: "2", label: "Mrs", value: "Mrs",},
                        {id: "3", label: "Ms", value: "Ms",},
                    ]}
                    isDisabled={isDisabled.country}
                />
                <AntdUIInputWrapper
                    fieldName={`${fieldName}.name`}
                    label="Name"
                />
                <AntdUIInputWrapper
                    fieldName={`${fieldName}.age`}
                    label="Age"
                />
                <AntdUISelectWrapper
                    fieldName={`${fieldName}.country`}
                    options={countryList}
                    isDisabled={isDisabled.country}
                />
                <AntdUISelectWrapper
                    fieldName={`${fieldName}.region`}
                    options={regionList}
                    isDisabled={isDisabled.region}
                />
                <AntdUISelectWrapper
                    fieldName={`${fieldName}.city`}
                    options={cityList}
                    isDisabled={isDisabled.city}
                />
                <AntdUIInputWrapper
                    fieldName={`${fieldName}.postcode`}
                    label="Postcode"
                />
                <AntdUIInputWrapper
                    fieldName={`${fieldName}.address`}
                    label="Address"
                />
            </div>
        </div>
    );
};
export default AuthorDetails;