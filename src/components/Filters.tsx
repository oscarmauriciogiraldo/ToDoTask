import React from "react";
import {  FILTERS_BUTTONS } from "../const";
import { type FilterValue } from "../types";
import styles from './Filters.module.scss'

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ 
    filterSelected, onFilterChange }
) => {
    return (
        <div className={styles.buttonsFilters}>
            <ul className={styles.button}>
                {
                    Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                        const isSelected = key === filterSelected
                        const className = isSelected ? 'selected' : ''
                        return (
                            <li key={key}>
                                <a
                                    href={href}
                                    className={className}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        onFilterChange(key as FilterValue)
                                    }}
                                >
                                    {literal}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}