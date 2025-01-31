import React from "react";
import { Filters } from "./Filters";
import { type FilterValue } from "../types";
import styles from './FilterPanel.module.scss'


interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const FilterPanel: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
    return(
        /* TODO: styles, responsive desing */
        /* styles instalados "footer" */
        <div className={styles.contentPanel}>
            <span className={styles.countTask}>
                Tasks por hacer: <strong>{activeCount}</strong>
            </span>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 &&(
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Borrar task competadas
                    </button>
                )
            }
        </div>
    )
}