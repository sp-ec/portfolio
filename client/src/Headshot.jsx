import React from 'react';

const Headshot = () => {
    return (
        <div>
            <img src={require('./photos/me.png')} alt='Me' className='w-48 h-48 rounded-full m-3' />
        </div>
    );
};

export default Headshot;