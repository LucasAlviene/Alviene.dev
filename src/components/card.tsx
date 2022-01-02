import type { MouseEventHandler } from 'react';
import moment from 'moment';
import { FaEye } from 'react-icons/fa';
import Icon from './languages';
import { iJobProps } from '../interface';
import { Container, Image, Left, Title, SubTitle, Icons, View } from '../styles/card';


interface iCardProps extends iJobProps {
    onClick: MouseEventHandler | undefined
}

const Card = ({ image, id,name, languages, date_start, date_end, onClick }: iCardProps) => {

    /*
    const [pathImage,setPathImage] = useState<string>();
    
    const loadImagePath = async() => {

        setPathImage(await getDownloadURL(ref(storage,image)))
    }
    useEffect(() => {
        loadImagePath();
    },[])*/
    return (
        <Container>
            <Image>
                <img src={image} />
            </Image>
            <Left>
                <Title>{name}</Title>
                <SubTitle>
                    <span>{moment(date_start.toMillis()).format("MMMM/YYYY")}</span>
                    <span>- {date_end ? moment(date_end.toMillis()).format("MMMM/YYYY") : "Atualmente"}</span>
                </SubTitle>
                <Icons>
                    {languages.map((name,key) => <Icon key={key} name={name} />)}
                </Icons>
                <View onClick={onClick} data-tip='Ver Sobre'><FaEye /></View>
            </Left>
        </Container>

    );
}
export default Card;