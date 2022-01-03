import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { collection, orderBy, query, getDocs } from "firebase/firestore";

// Style
import { Grid, Column, Flex, Header } from '../styles';

// Components
import Card from '../components/card';
import { firestore } from '../components/firebase';
import Modal from '../components/modal';

// Interface
import { iJobProps } from '../interface';

const SubTitle = styled.h4`
text-align:center;
font-size:1.6em;
margin:0;
color: #eee;
`;

interface iMyJobs{
    openModal: any
    closeModal: any
}
const MyJobs = ({openModal,closeModal} : iMyJobs) => {

    const [jobsProfessional, setJobsProfessional] = useState<iJobProps[]>([]);
    const [jobsPersonal, setJobsPersonal] = useState<iJobProps[]>([]);

    const loadJobs = async () => {
        const listProfessional: iJobProps[] = [],listPersonal: iJobProps[] = [];
        const jobs = await getDocs(query(collection(firestore, "jobs"), orderBy("date_start","desc")));
        jobs.forEach((doc) => {
            const data = doc.data() as iJobProps;
            data.id = doc.id;
            (data.isProfessional ? listProfessional : listPersonal).push(data);
        })
        setJobsProfessional(listProfessional);
        setJobsPersonal(listPersonal);
        ReactTooltip.rebuild();
    }
    useEffect(() => {
        loadJobs();
    }, [])

    return (
        <Flex>
            <Header style={{ color: "#f1f1f1" }}>Meu Portfólio</Header>
            <Grid>
                <Column>
                    <SubTitle>Profissional</SubTitle>
                    {jobsProfessional.map((item,key) => <Card onClick={openModal(item)} key={key} {...item} />)}
                </Column>
                <Column>
                    <SubTitle>Pessoal</SubTitle>
                    {jobsPersonal.map((item,key) => <Card onClick={openModal(item)} key={key} {...item} />)}
                </Column>
            </Grid>
        </Flex>
    );
}
export default MyJobs;
