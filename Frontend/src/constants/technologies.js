import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { SiRedux, SiMongodb, SiMysql, SiExpress, SiPostman, SiScikitlearn, SiPytorch, SiNumpy, SiPandas, SiPlotly, SiTensorflow } from 'react-icons/si';

export const techData = {
    Frontend: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript (ES6+)', icon: FaJsSquare },
        { name: 'React', icon: FaReact },
        { name: 'Redux', icon: SiRedux },
    ],
    Backend: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Python', icon: FaPython },
    ],
    Databases: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
    ],
    'AI/ML': [
        { name: 'Scikit-Learn', icon: SiScikitlearn },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas },
        { name: 'Matplotlib', icon: SiPlotly },
        { name: 'TensorFlow', icon: SiTensorflow },
    ],
    'Tools & Other': [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: VscVscode },
        { name: 'Postman', icon: SiPostman },
    ],
};
