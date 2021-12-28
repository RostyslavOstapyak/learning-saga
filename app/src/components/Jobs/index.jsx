import React, { useEffect } from 'react';
import { JOBS } from '../../modules/api/endpoints';
import useFetch from '../../hooks/useFetch'

const Jobs = () => {

    const { response, performFetch } = useFetch(JOBS);

    useEffect(() => {
        performFetch();
    }, [performFetch])

    console.log(response);

    return (
        <div>
            Jobs Component
        </div>
    );
};

export default Jobs;