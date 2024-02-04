import React from 'react'
import classNames from 'classnames'

import styles from './Pagination.module.css'

const Pagination = (props) => {

    const { totalPages, currentPage, setCurrentPage } = props

    const renderPageNumbers = () => {
        const pageNumbers = [];

        const maxPageNumbersToShow = 5;
        const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

        let startPageNumber, endPageNumber;

        if (totalPages <= maxPageNumbersToShow) {
            startPageNumber = 1;
            endPageNumber = totalPages;
        } else {
            if (currentPage <= halfMaxPageNumbersToShow + 1) {
                startPageNumber = 1;
                endPageNumber = maxPageNumbersToShow;
            } else if (currentPage + halfMaxPageNumbersToShow >= totalPages) {
                startPageNumber = totalPages - maxPageNumbersToShow + 1;
                endPageNumber = totalPages;
            } else {
                startPageNumber = currentPage - halfMaxPageNumbersToShow;
                endPageNumber = currentPage + halfMaxPageNumbersToShow;
            }
        }

        for (let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers.push(i);
        }

        if (startPageNumber > 1) {
            pageNumbers.unshift('...');
        }

        if (endPageNumber < totalPages) {
            pageNumbers.push('...');
        }

        return pageNumbers;
    };

    const pageNumbers = renderPageNumbers()

    return (
        <div className={classNames('flex', 'gap-x-1', 'justify-center', 'mt-4')}>
            {
                currentPage > 1 && <div className={classNames('flex', 'gap-x-1')}>
                    <div className={classNames('border', 'border-border', 'px-2', 'text-sm', styles.icon)}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                        Previous
                    </div>
                    {
                        pageNumbers.indexOf(1) === -1 &&
                        <div className={classNames('border', 'border-border', 'px-2', 'text-sm', styles.icon)}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </div>
                    }
                </div>
            }
            {
                pageNumbers
                    .map(i => {
                        if (!Number.isInteger(i)) {
                            return <div key={i + Math.floor(Math.random() * 100)}> {i} </div>
                        }
                        return <div className={classNames('border', 'border-border', 'px-2', 'text-sm', styles.icon, {
                            'bg-secondary': currentPage === i,
                            'text-primary': currentPage === i,
                        })}
                            onClick={() => setCurrentPage(i)}
                            key={i}
                        >
                            {i}
                        </div>
                    })
            }
            {
                currentPage < totalPages && <div className={classNames('flex', 'gap-x-1')}>
                    {
                        pageNumbers.indexOf(totalPages) === -1 &&
                        <div className={classNames('border', 'border-border', 'px-2', 'text-sm', styles.icon)}
                            onClick={() => setCurrentPage(totalPages)}
                        >
                            {totalPages}
                        </div>
                    }
                    <div className={classNames('border', 'border-border', 'px-2', 'text-sm', styles.icon)}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        Next
                    </div>
                </div>
            }
        </div>
    )
}

export default Pagination