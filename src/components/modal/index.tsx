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
import ModalContainer from './container';

const ModalFull = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.3);
    z-index:990;
    overflow:auto;
    opacity:0;
    transition:500ms all;
    &.open{
        opacity:1;
    }
    &.closed{
        display:none;
    }
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

interface iModal {
    onClose: () => void
    item: iJobProps | null
}

const getClassName = (array : (string|null)[]) => {
    const clx = [] as string[];
    for(const a of array){
        if(a != "" && a!= null) clx.push(a.trim());
    }
    return clx.join(" ");
}

const Modal = ({ onClose, item}: iModal): JSX.Element | null => {

    const [closed,setClosed] = useState<Boolean>(false);

    useEffect(() => {
        if(item == null){
            setTimeout(() => setClosed(true),1000);
        }else{
            setClosed(false);
        }
    },[item])

    return (
        <ModalFull onClick={onClose} className={getClassName([item == null ? "" : "open",closed ? "closed" : ""])}>
            {!closed && <ContainerWidth>
                <ModalDialog onClick={(e) => e.stopPropagation()}>
                    {item && <ModalContainer {...item} />}
                </ModalDialog>
            </ContainerWidth>}
        </ModalFull>)
}

export default Modal;