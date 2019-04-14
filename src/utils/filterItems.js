export const filterItems = (items, dataSourcesFilter) => items.filter(item => {
    const itemCategory = item.get('category');
    return dataSourcesFilter.get(itemCategory);
});
