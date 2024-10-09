import "./home.css";
import Hero from "../hero/Hero.tsx";
import SubSection from "../subSection/SubSection.tsx";
import React, {useEffect, useState} from "react";
import client from "../../client";
import {SubSectionVO} from "../../client/model.ts";

const Home: React.FC = () => {

    const [politics, setPolitics] = useState<SubSectionVO[]>();

    const [sports, setSports] = useState<SubSectionVO[]>();

    const [breakings, setBreakings] = useState<SubSectionVO[]>();

    useEffect(() => {
        client.getPolitics()?.then((politics)=>{
            setPolitics(politics.data)
        });
        client.getSport()?.then((sports)=>{
            setSports(sports.data);
        })
        client.getBreaking()?.then((breaking)=>{
            setBreakings(breaking.data);
        })
    }, []);

    return (
        <div className="home-wrapper">
            <Hero/>
            <SubSection topic="breakings" content={breakings}/>
            <SubSection topic="politics" content={politics}/>
            <SubSection topic="sports" content={sports}/>
        </div>
    );
};
export default Home;