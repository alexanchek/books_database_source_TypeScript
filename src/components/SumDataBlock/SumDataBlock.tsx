interface ISumDataBlock {
    label: string
    length: number
}

export const SumDataBlock: React.FC<ISumDataBlock> = ({label, length}) => {
    return (
        <div className="">
            {length === 0 ? "Ничего не найдено. Попробуйте поискать ;)" : `${label} найдено: ${length}`}
        </div>
    )
}