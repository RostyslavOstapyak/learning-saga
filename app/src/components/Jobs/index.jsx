import React, { useEffect } from 'react';
import api from '../../modules/api/api'
import { useDispatch, useSelector } from 'react-redux';
import { JOBS } from '../../modules/api/endpoints';
import { apiActions } from '../../modules/api/actions';

const Jobs = () => {

    const state = useSelector(state => state.api[JOBS])
    const dispatch = useDispatch();


    useEffect(() => {
        (async () => {
            try {
                dispatch(apiActions.fetch(JOBS));

                const data = await api.fetch(JOBS);

                dispatch(apiActions.fetchSuccess(JOBS, data));

            } catch (err) {
                dispatch(apiActions.fetchError(JOBS, err));
            }
        })()
    }, [])

    console.log(state);

    return (
        <div>
            Jobs Component
        </div>
    );
};

export default Jobs;