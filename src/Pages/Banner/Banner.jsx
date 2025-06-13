const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[83vh] rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1/2">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1/2">
                    <h1 className="text-5xl font-bold">Job Portal News</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Let's Start</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;