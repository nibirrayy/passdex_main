export default function details() {

    return (
        <section className="w-4/12 bg-blue-300">
            <h1 className="text-center">Passwords details</h1>

            <div>
                <h1 className="text-2xl font-bold mb-8">Form With Floating Labels</h1>

                <form>
                    <div className="relative z-0 w-full mb-5">
                        <input type="text" name="name" placeholder=" " required
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                        <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter
                            name</label>
                    </div>

                    <div className="relative z-0 w-full mb-5">
                        <input type="email" name="email" placeholder=" "
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email
                            address</label>
                        <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                    </div>


                    <button id="button" type="button"
                        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
                        Toggle Error
                    </button>
                </form>
            </div>

        </section>
    )
}