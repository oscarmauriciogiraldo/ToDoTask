import React from "react";
import { Filters } from "./Filters";
import { type FilterValue } from "../types";


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
        <div className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tasks
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