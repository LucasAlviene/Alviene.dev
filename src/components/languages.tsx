import { IconType, IconBaseProps } from 'react-icons';
import { FaUnity, FaNodeJs, FaPhp, FaReact, FaAws } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiFirebase, SiElectron } from 'react-icons/si';
type languageAvailable = 'php' | 'unity' | 'nodejs' | 'reactjs' | 'reactnative' | 'mysql' | 'postgresql' | 'firebase' | 'aws' | 'electron';

interface LanguageParams {
    Icon: IconType
    name: string
}
interface iLanguageIcons {
    [name: string]: LanguageParams
}

const languagesIcons: iLanguageIcons = {
    unity: { Icon: FaUnity, name: 'Unity' },
    nodejs: { Icon: FaNodeJs, name: 'NodeJS' },
    php: { Icon: FaPhp, name: 'PHP' },
    reactjs: { Icon: FaReact, name: 'ReactJS' },
    reactnative: { Icon: FaReact, name: 'React Native' },
    mysql: { Icon: SiMysql, name: 'Mysql' },
    postgresql: { Icon: SiPostgresql, name: 'PostgreSQL' },
    firebase: { Icon: SiFirebase, name: 'Firebase' },
    aws: { Icon: FaAws, name: 'Aws' },
    electron: { Icon: SiElectron, name: 'Electron' }
}
interface iIcon extends IconBaseProps {
    name: languageAvailable
}
const Icon = ({ name, ...props }: iIcon): JSX.Element => {
    const Element = languagesIcons[name];
    return <Element.Icon {...props} data-tip={Element.name} />
}
export default Icon;
export { languagesIcons };
export type { languageAvailable };