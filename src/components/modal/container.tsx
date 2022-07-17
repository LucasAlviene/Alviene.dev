import { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { doc, getDoc } from "firebase/firestore";

// Styles
import { Container, Image, Left, Title, SubTitle, Icons, View } from '../../styles/card';

// Components
import { ContainerWidth } from '../container';
import Icon from '../languages';
import { firestore } from '../firebase';

// Interface
import { iJobProps } from '../../interface';

const ModalContent = styled.div`
    color: #333;
    padding:10px;
`;

const Loading = styled.div`
    text-align:center;
    display:block;
    margin:50px;
    font-size:22px;
    color: #333;
`;
interface iModal {
    onClose: () => void
    item: iJobProps | null
}

const ModalContainer = ({ image, id, name, languages, role, date_start, date_end }: iJobProps): JSX.Element => {
    const [content, setContent] = useState<string | null>(null);

    const loadContent = async () => {

        const docSnap = await getDoc(doc(firestore, "jobsContent", id?.toString() || ""));
        if (docSnap.exists()) {
            setContent(docSnap.data().content);
        }
    }

    useEffect(() => {
        loadContent();
        ReactTooltip.rebuild();
    }, [])

    return (
        <>
            <Container $inverted style={{ margin: 0, border: 0, borderBottom: "1px solid #dedede" }}>
                <Image>
                    <img src={image} />
                </Image>
                <Left>
                    <Title>{name}</Title>
                    <SubTitle>{role}</SubTitle>
                    <SubTitle style={{ position: "absolute", right: 10, top: 10 }}>
                        <span>{moment(date_start.toMillis()).format("MMMM/YYYY")}</span>
                        <span>- {date_end ? moment(date_end.toMillis()).format("MMMM/YYYY") : "Atualmente"}</span>
                    </SubTitle>
                    <Icons $fontSize='28px'>
                        {languages.map((name, key) => <Icon key={key} name={name} />)}
                    </Icons>
                </Left>
            </Container>
            {content ? <ModalContent dangerouslySetInnerHTML={{ __html: content }} /> : <Loading>Carregando...</Loading>}

        </>)
}

export default ModalContainer;