import {sortByTypes} from '../constants/sortByTypes';

//TODO: this function should parse norwegian time to milliseconds
export const sortItemsByDate = (items, order) => {
    if (order === sortByTypes.NONE) {
        return items;
    }

    return items.sort((a, b) => {
        const dateAMilliseconds = Date.parse(a.get('date'));
        const dateBMilliseconds = Date.parse(b.get('date'));

        if (order === sortByTypes.ASCENDING)
            return dateAMilliseconds > dateBMilliseconds ? 1 : -1;
        return dateAMilliseconds > dateBMilliseconds ? -1 : 1
    });
};