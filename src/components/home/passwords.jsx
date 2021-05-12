import PasswordEntry from "./password_entries"

export default function Passwords() {
    return (
        <section className="w-3/12 bg-green-300">

            <h1 className="text-center">Passwords</h1>

            <PasswordEntry name="Gmail" />
            <PasswordEntry name="Hotmail" />
            <PasswordEntry name="Teams" />
        </section>
    )
}