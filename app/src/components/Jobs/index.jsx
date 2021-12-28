import React, { useEffect } from 'react';
import api from '../../modules/api/api'
import { useDispatch, useSelector } from 'react-redux';
import { JOBS } from '../../modules/api/endpoints';
import { apiActions } from '../../modules/api/actions';

const Jobs = () => {

    const state = useSelector(state => state.api[JOBS])

    console.log(state);

    return (
        <div>
            Jobs Component
        </div>
    );
};

export default Jobs;