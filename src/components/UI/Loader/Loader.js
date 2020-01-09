import React from 'react';
import classess from './Loader.module.scss';

const Loader = props => (
    <div className={classess.Loader}>
        <div className={classess.LoaderInner}>
            <div/>
        </div>
    </div>
);

export default Loader;