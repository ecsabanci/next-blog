interface TagChipProps {
    tag: string;
}

export function TagChip({ tag }: TagChipProps) {
    return (
        <span className="text-tiny text-gray-300 bg-gray-700 px-2 py-1 rounded-md dark:bg-indigo-300/50 dark:text-gray-100">
            {tag}
        </span>
    );
}