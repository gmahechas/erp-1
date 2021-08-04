import { FC } from 'react';
import { Link } from 'react-router-dom';

import FragmentHco from '@mf-3/utils/hoc/FragmentHco';
import { connector, PropsFromRedux } from '../store/reducers';

interface IProps extends PropsFromRedux {}
const Country: FC<IProps> = ({ country, searchMany }) => {
    const handleContries = () => {
        return (
            <ul>
                {country.entity.data &&
                    country.entity.data.map((country: any) => {
                        return <li key={country.id}>{country.title}</li>;
                    })}
            </ul>
        );
    };

    const handleSearchMany = () => {
        searchMany('hola');
    };

    return (
        <FragmentHco>
            <div>Country</div>
            <Link to='/estate'>Link Estate</Link>
            <button onClick={handleSearchMany}>Buscar</button>
            {handleContries()}
        </FragmentHco>
    );
};

export default connector(Country);
