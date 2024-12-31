import { getIconURL } from '@utils/helper/getAssetsUrlUtils';

const SortIcon = () => <img className="sort-icon" src={getIconURL('sort.svg')} alt="sort_icon" />;

const ArrowDownIcon = () => <img className="arrow-down-icon" src={getIconURL('arrow_down.svg')} alt="arrow_down" />;

const ArrowLeftOutlineIcon: React.FC<IconProps> = ({ className = '' }) => (
  <img className={`arrow-left--outline ${className}`} src={getIconURL('arrow-left--outline.svg')} alt="arrow-left" />
);

const ArrowRightOutlineIcon: React.FC<IconProps> = ({ className = '' }) => (
  <img className={`arrow-right--outline ${className}`} src={getIconURL('arrow-right--outline.svg')} alt="arrow-right" />
);

const Download = () => <img className="download-icon" src={getIconURL('download.svg')} alt="download" />;

export { SortIcon, ArrowDownIcon, ArrowLeftOutlineIcon, ArrowRightOutlineIcon, Download };
