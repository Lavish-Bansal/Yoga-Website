function Home() {
    return (
        <section className="">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="max-w-6xl mx-auto px-3 sm:px-6 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="h1 p-8">
                            {"Inner Peace Yoga Classes"}
                        </h1>
                        <p className="text-2xl text-gray-500 mb-8">
                            "Join Our Yoga Community – Where Every Breath is a Step Towards Inner Peace, Every Pose is a Celebration of Strength, and Every Session is an Invitation to Well-Being."
                        </p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div>
                                <a
                                    href="/register"
                                    className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Home;