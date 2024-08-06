import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Children } from 'react'

const Comment = ({ children, name, date }) => {
    return (
        <>
            <div className='bg-neutral-900 bg-opacity-80 p-8 mb-16'>
                <div className='flex flex-row justify-between'>
                    <h3 className='mb-4'>{name}</h3>
                    <p className='text-accent-green'>{date}</p>
                </div>

                <p>{children}</p>
            </div>

        </>
    )
}

export default Comment;
