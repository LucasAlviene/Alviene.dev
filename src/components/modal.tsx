import { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { doc, getDoc } from "firebase/firestore";

// Styles
import { Container, Image, Left, Title, SubTitle, Icons, View } from '../styles/card';

// Components
import { ContainerWidth } from './container';
import Icon from './languages';
import { firestore } from './firebase';

// Interface
import { iJobProps } from '../interface';

const ModalFull = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.3);
    z-index:990;
    overflow:auto;
`;

const ModalDialog = styled.div`
    width: 100%;
    position: relative;
    max-height: calc(100% - 100px);
    display:block;
    margin: 50px auto 50px;
    background:#fff;
    z-index:999;
    border-radius:4px;
    overflow:hidden;
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.3);
`;

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

interface iModal extends iJobProps {
    onClose: () => void
}

const Modal = ({ onClose, image, id, name, languages, role, date_start, date_end }: iModal): JSX.Element => {

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
        <ModalFull onClick={onClose}>
            <ContainerWidth>
                <ModalDialog onClick={(e) => e.stopPropagation()}>
                    <Container $inverted style={{ margin: 0, border:0, borderBottom: "1px solid #dedede" }}>
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
                </ModalDialog>
            </ContainerWidth>
        </ModalFull>)
}

export default Modal;