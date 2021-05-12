import { useContext } from 'react';
import VaultEntries from './vault_entries';
import { dataProvider } from './home'
export default function Vaults() {

    const data = useContext(dataProvider)
    return (
        <section className="w-2/12 bg-red-200 flex justify-center">


            {/*This should cotains circle vault icons*/}
            <div>
                {/*data.map(element => {
                    return (
                        <VaultEntries name={element.folder_title} />
                    )
                })
            */}
                <VaultEntries name="Value 1" />
                <VaultEntries name="Value 2" />
                <VaultEntries name="Value 3" />
            </div>

        </section>
    )
}