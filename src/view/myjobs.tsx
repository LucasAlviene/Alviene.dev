import { useEffect, useState } from "react";
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


interface iMyJobs{
    openModal: any
    closeModal: any
}
const MyJobs = ({openModal,closeModal} : iMyJobs) => {

    const [jobs, setJobs] = useState<iJobProps[]>([]);

    const loadJobs = async () => {
        const list: iJobProps[] = [];
        const jobs = await getDocs(query(collection(firestore, "jobs"), orderBy("date_start","desc")));
        jobs.forEach((doc) => {
            const data = doc.data() as iJobProps;
            data.id = doc.id;
            list.push(data);
        })
        setJobs(list);
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
                    {jobs.map((item,key) => <Card onClick={openModal(item)} key={key} {...item} />)}
                </Column>
                <Column>
                </Column>
            </Grid>
        </Flex>
    );
}
export default MyJobs;
