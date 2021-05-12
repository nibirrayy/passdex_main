import CategoriesEntries from './categories_entries';

export default function Categories() {

    return (
        <section className="w-3/12 bg-yellow-200 flex flex-col">

            <h1 className="text-center">category</h1>

            <CategoriesEntries name="Category 1" />
            <CategoriesEntries name="Category 2" />
            <CategoriesEntries name="Category 3" />
        </section>
    )
}